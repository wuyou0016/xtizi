// 两两对比：只根据资料里真实存在的字段生成对照表、差异要点和"按需求怎么选"。
// 缺失的字段写"资料暂缺"，不替品牌补；没有测试数据的指标（速度、稳定性）不参与对比。
import type { BoardRow } from './board';
import { bestPerGb, cheapestMonthly, cheapestMonthlyBilled, cleanList, completeness, largestPlan } from './provider-facts';

// 对比页覆盖推荐榜前 N 名之间的所有组合（N=4 → 6 对）。2026-10 由 8 名 28 对收敛：新域名先放少量有区分度的配对页，
// 其余配对互相相似度高（0.6 以上）且每页只有极少入链，放出来只会稀释整站质量。
export const PAIR_COUNT_TOP = 4;

export function pairSlug(a: string, b: string): string {
  return `${a}-vs-${b}`;
}

export interface CompareRow {
  label: string;
  a: string;
  b: string;
}

export interface PairResult {
  table: CompareRow[];
  /** 资料上的差异要点 */
  points: string[];
  /** 按需求给出的取舍建议（每条都能追溯到某个字段） */
  picks: { need: string; pick: string }[];
  faqs: { q: string; a: string }[];
}

const EMPTY = '资料暂缺';
const money = (n: number) => `¥${n}`;

export function comparePair(a: BoardRow, b: BoardRow): PairResult {
  const na = a.provider.data.name;
  const nb = b.provider.data.name;
  const fa = facts(a);
  const fb = facts(b);

  const table: CompareRow[] = [
    { label: '选梯子推荐名次', a: `第 ${a.rank} 名`, b: `第 ${b.rank} 名` },
    { label: '最低月均价', a: fa.cheap ? `${fa.cheap.plan.price}（${fa.cheap.plan.name}）` : EMPTY, b: fb.cheap ? `${fb.cheap.plan.price}（${fb.cheap.plan.name}）` : EMPTY },
    { label: '最低价对应的付费周期', a: fa.cheap?.plan.cycle || EMPTY, b: fb.cheap?.plan.cycle || EMPTY },
    { label: '最低价对应的流量', a: fa.cheap?.plan.quota || EMPTY, b: fb.cheap?.plan.quota || EMPTY },
    { label: '最便宜的月付套餐', a: fa.monthly ? `${fa.monthly.plan.price}、${fa.monthly.plan.quota || '流量未写'}` : '资料里没有月付', b: fb.monthly ? `${fb.monthly.plan.price}、${fb.monthly.plan.quota || '流量未写'}` : '资料里没有月付' },
    { label: '最大一档流量', a: fa.large ? `${fa.large.gb}GB（${fa.large.plan.name}）` : EMPTY, b: fb.large ? `${fb.large.gb}GB（${fb.large.plan.name}）` : EMPTY },
    { label: '每 GB 折算价（最低）', a: fa.perGb ? `约 ¥${fa.perGb.perGb.toFixed(3)}` : '无法折算', b: fb.perGb ? `约 ¥${fb.perGb.perGb.toFixed(3)}` : '无法折算' },
    { label: '线路', a: fa.routes.join('、') || EMPTY, b: fb.routes.join('、') || EMPTY },
    { label: '协议', a: fa.protocols.join('、') || EMPTY, b: fb.protocols.join('、') || EMPTY },
    { label: '节点地区', a: fa.regions.join('、') || EMPTY, b: fb.regions.join('、') || EMPTY },
    { label: '客户端支持', a: fa.clients.join('、') || EMPTY, b: fb.clients.join('、') || EMPTY },
    { label: '资料完整度', a: `${fa.comp}/5`, b: `${fb.comp}/5` },
    { label: '速度 / 延迟 / 解锁', a: '实时检测中', b: '实时检测中' },
  ];

  const points: string[] = [];
  const picks: { need: string; pick: string }[] = [];

  // 价格
  if (fa.cheap && fb.cheap) {
    if (fa.cheap.monthly === fb.cheap.monthly) {
      points.push(`入门价格持平：两家最低一档折合都是每月 ${money(fa.cheap.monthly)}，区别要看流量和付费周期。`);
    } else {
      const [lo, hi, nlo, nhi] = fa.cheap.monthly < fb.cheap.monthly ? [fa.cheap, fb.cheap, na, nb] : [fb.cheap, fa.cheap, nb, na];
      const diff = Math.round((hi.monthly - lo.monthly) * 10) / 10;
      points.push(`入门价格：${nlo}的最低一档是每月 ${money(lo.monthly)}（${lo.plan.cycle || '周期未写'}），${nhi}是每月 ${money(hi.monthly)}（${hi.plan.cycle || '周期未写'}），每月相差 ${money(diff)}。`);
      picks.push({ need: '月均价越低越好', pick: `${nlo}。它的最低一档是 ${lo.plan.price}${lo.plan.cycle === '按年付费' ? '，但需要按年付费' : ''}。` });
    }
  } else if (fa.cheap || fb.cheap) {
    const [has, lack] = fa.cheap ? [na, nb] : [nb, na];
    points.push(`价格资料：${has}有可核对的价格，${lack}的价格资料暂缺，这一项无法直接比较，需要到${lack}官网查看。`);
    picks.push({ need: '下单前就想知道确切价格', pick: `${has}。${lack}需要你先到官网套餐页确认。` });
  } else {
    points.push('价格资料：两家都没有可核对的公开价格，请分别到官网套餐页查看后再比。');
  }

  // 月付
  if (fa.monthly && fb.monthly) {
    const [lo, nlo] = fa.monthly.monthly <= fb.monthly.monthly ? [fa.monthly, na] : [fb.monthly, nb];
    points.push(`月付：两家都有按月付费的套餐，${na}最低 ${fa.monthly.plan.price}，${nb}最低 ${fb.monthly.plan.price}。`);
    if (fa.monthly.monthly !== fb.monthly.monthly) picks.push({ need: '想按月付费、先试一个月', pick: `两家都可以，${nlo}的月付门槛更低（${lo.plan.price}）。` });
  } else if (fa.monthly || fb.monthly) {
    const [has, lack, m] = fa.monthly ? [na, nb, fa.monthly] : [nb, na, fb.monthly!];
    points.push(`月付：资料里只有${has}记录了按月付费的套餐（${m.plan.price}），${lack}能读出价格的档位都不是月付。`);
    picks.push({ need: '想按月付费、先试一个月', pick: `${has}。${lack}的资料里没有月付档位。` });
  } else {
    points.push('月付：两家的资料里都没有按月付费的套餐记录。');
  }

  // 流量
  if (fa.large && fb.large && fa.large.gb !== fb.large.gb) {
    const [hi, nhi, lo, nlo] = fa.large.gb > fb.large.gb ? [fa.large, na, fb.large, nb] : [fb.large, nb, fa.large, na];
    points.push(`流量上限：${nhi}最大一档是 ${hi.gb}GB（${hi.plan.price}），${nlo}是 ${lo.gb}GB（${lo.plan.price}）。`);
    picks.push({ need: '每月流量用得多', pick: `${nhi}。它有 ${hi.gb}GB 的档位，${hi.plan.cycle || '付费周期以官网为准'}。` });
  }
  if (fa.perGb && fb.perGb && fa.perGb.perGb !== fb.perGb.perGb) {
    const [lo, nlo] = fa.perGb.perGb < fb.perGb.perGb ? [fa.perGb, na] : [fb.perGb, nb];
    points.push(`流量单价：按月均价除以流量折算，${na}最低约 ¥${fa.perGb.perGb.toFixed(3)} 每 GB，${nb}最低约 ¥${fb.perGb.perGb.toFixed(3)} 每 GB，${nlo}的单价更低。`);
  }

  // 线路
  if (fa.routes.length && fb.routes.length) {
    points.push(fa.routes.join() === fb.routes.join() ? `线路：两家的线路记录相同，都是${fa.routes.join('、')}。` : `线路：${na}记录为${fa.routes.join('、')}，${nb}记录为${fb.routes.join('、')}。`);
  } else if (fa.routes.length || fb.routes.length) {
    const [has, lack, r] = fa.routes.length ? [na, nb, fa.routes] : [nb, na, fb.routes];
    points.push(`线路：只有${has}的资料写明了线路（${r.join('、')}），${lack}没有线路记录。`);
    picks.push({ need: '希望线路类型有明确说法', pick: `${has}。${lack}需要你向客服确认。` });
  }

  // 协议 / 地区 / 客户端
  if (fa.protocols.length !== 0 || fb.protocols.length !== 0) {
    if (fa.protocols.length && fb.protocols.length) {
      const common = fa.protocols.filter((x) => fb.protocols.includes(x));
      points.push(`协议：${common.length ? `两家都记录了${common.join('、')}` : '两家没有相同的协议记录'}；${na}共 ${fa.protocols.length} 种，${nb}共 ${fb.protocols.length} 种。`);
    } else {
      points.push(`协议：只有${fa.protocols.length ? na : nb}的资料里有协议记录。`);
    }
  }
  if (fa.regions.length && fb.regions.length) {
    const onlyA = fa.regions.filter((x) => !fb.regions.includes(x));
    const onlyB = fb.regions.filter((x) => !fa.regions.includes(x));
    if (onlyA.length || onlyB.length) {
      points.push(`节点地区：${onlyA.length ? `${na}多记录了${onlyA.join('、')}` : ''}${onlyA.length && onlyB.length ? '，' : ''}${onlyB.length ? `${nb}多记录了${onlyB.join('、')}` : ''}，其余地区相同。`);
    } else {
      points.push(`节点地区：两家记录的地区相同（${fa.regions.join('、')}）。`);
    }
  } else if (fa.regions.length || fb.regions.length) {
    const [has, lack] = fa.regions.length ? [na, nb] : [nb, na];
    points.push(`节点地区：只有${has}的资料里有节点地区，${lack}暂缺。`);
    picks.push({ need: '要用对地区有要求的服务', pick: `先看${has}，它的节点地区有记录；${lack}需要到官网确认节点列表。` });
  }
  if (fa.comp !== fb.comp) {
    const [hi, nhi] = fa.comp > fb.comp ? [fa.comp, na] : [fb.comp, nb];
    picks.push({ need: '想少做功课、资料越全越好', pick: `${nhi}。五项公开资料里它查得到 ${hi} 项。` });
  }
  picks.push({ need: '最在意速度和晚高峰表现', pick: '资料无法回答。两家都没有选梯子的测速数据，建议各买最短周期，在自己的网络下于晚高峰对比。' });

  const [front, back] = a.rank < b.rank ? [a, b] : [b, a];
  const faqs = [
    {
      q: `${na}和${nb}哪个好？`,
      a: `没有对所有人都成立的答案。在选梯子推荐榜里，${front.provider.data.name}排第 ${front.rank} 名，${back.provider.data.name}排第 ${back.rank} 名，名次不是测速名次。更实际的做法是按你最在意的一项来选：价格、能否月付、流量还是线路说法，本页逐项列出了两家资料上的差别。`,
    },
    {
      q: `${na}和${nb}哪个便宜？`,
      a:
        fa.cheap && fb.cheap
          ? fa.cheap.monthly === fb.cheap.monthly
            ? `两家资料里最低一档折合都是每月 ${money(fa.cheap.monthly)}。${na}这一档是${fa.cheap.plan.cycle || '周期未写'}、${fa.cheap.plan.quota || '流量未写'}，${nb}是${fb.cheap.plan.cycle || '周期未写'}、${fb.cheap.plan.quota || '流量未写'}，要结合流量和付费周期一起看。`
            : `按最低月均价（按资料），${fa.cheap.monthly < fb.cheap.monthly ? na : nb}更低：${na}是每月 ${money(fa.cheap.monthly)}，${nb}是每月 ${money(fb.cheap.monthly)}。注意年付套餐的月均价是折算值，实际要一次付清，付款前到官网结账页面再核对一遍。`
          : `资料不足以比较。${fa.cheap ? `${na}最低一档是 ${fa.cheap.plan.price}` : `${na}的价格资料暂缺`}，${fb.cheap ? `${nb}最低一档是 ${fb.cheap.plan.price}` : `${nb}的价格资料暂缺`}。缺的一方需要到官网套餐页查看后再比。`,
    },
    {
      q: `${na}和${nb}谁的速度更快、更稳定？`,
      a: `选梯子没有这两家的测速、延迟和丢包数据，所以不做判断。线路表现和你的地区、运营商、使用时段都有关系，别人的测速截图参考价值有限。想知道哪家更适合你，可以各买一个最短周期，在晚上八点到十一点用同样的服务对比几天。`,
    },
  ];

  return { table, points, picks, faqs };
}

function facts(row: BoardRow) {
  const v = row.provider.data.vendor;
  return {
    cheap: cheapestMonthly(row.provider),
    monthly: cheapestMonthlyBilled(row.provider),
    large: largestPlan(row.provider),
    perGb: bestPerGb(row.provider),
    routes: cleanList(v.routes),
    protocols: cleanList(v.protocols),
    regions: v.regions ?? [],
    clients: v.clientSupport ?? [],
    comp: completeness(row.provider).have.length,
  };
}
