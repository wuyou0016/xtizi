// 机场资料页的问答区：每一问都只用 providers.json、board.json 和官网检测里真实存在的数据拼出来。
// 哪一栏是空的，就不回答对应的问题或直说查不到；价格栏为空时不补数字。
// 没测过的三项（速度、稳定性、解锁）一律答"实时检测中"。
// 每问备了几种问法和答法，用 slug 算哈希来选，保证重新构建不会变，各资料页之间又有差别。
// 输出必须是纯文本，因为同一份文字既显示在页面上，也写进 FAQPage 结构化数据。
import type { BoardRow } from '../utils/board';
import { bestPerGb, cheapestMonthly, cheapestMonthlyBilled, cleanList, completeness, planFacts } from '../utils/provider-facts';
import { STATE_LABEL, fmtDate, fmtDateTime, type MonitorSummary } from '../utils/live';

export interface QA {
  q: string;
  a: string;
}

const SOURCE_LABEL: Record<string, string> = {
  vendor: '官网公开信息',
  'third-party': '第三方资料',
  editorial: '站长确认的信息',
  'in-house': '选梯子自己的记录',
};

function bucket(slug: string, salt: number, size: number): number {
  let h = 7919 + salt * 131;
  for (let i = 0; i < slug.length; i += 1) h = ((h << 5) - h + slug.charCodeAt(i)) | 0;
  return Math.abs(h) % size;
}
const pick = <T,>(slug: string, salt: number, variants: T[]): T => variants[bucket(slug, salt, variants.length)]!;

import couponsJson from '../coupons.json';

// 优惠码登记表：有出处才登记，noteIndex 指向该品牌 thirdPartyNotes 的第几条。
export const COUPONS = couponsJson as { providerId: string; code: string; noteIndex: number }[];

interface Context {
  tierLabel: string;
  total: number;
  monitor: MonitorSummary;
  monitorCheckedAt: string;
  vantage: string;
}

export function buildProviderFaq(row: BoardRow, ctx: Context): QA[] {
  const { provider } = row;
  const { name, slug, vendor, status, lastVerified, thirdPartyNotes } = provider.data;
  const source = SOURCE_LABEL[vendor.source.type] ?? vendor.source.type;
  const plans = planFacts(provider);
  const cheapest = cheapestMonthly(provider);
  const monthly = cheapestMonthlyBilled(provider);
  const perGb = bestPerGb(provider);
  const routes = cleanList(vendor.routes);
  const protocols = cleanList(vendor.protocols);
  const regions = vendor.regions ?? [];
  const clients = vendor.clientSupport ?? [];
  const comp = completeness(provider);
  const verified = fmtDate(lastVerified);
  const out: QA[] = [];

  // 1. 怎么样 / 值得买吗
  const lackText = comp.lack.length ? `还缺${comp.lack.join('、')}` : '五项都查得到';
  out.push({
    q: pick(slug, 1, [`${name}怎么样？值得买吗？`, `${name}机场靠谱吗？`, `${name}这家机场值不值得选？`]),
    a: pick(slug, 2, [
      `${name}在选梯子推荐榜排第 ${row.rank} 名（共 ${ctx.total} 家），属于“${ctx.tierLabel}”一档。公开资料里价格、线路、协议、节点地区、客户端支持五项查得到 ${comp.have.length} 项，${lackText}。值不值得买要结合你的用量和预算，建议先买最短周期试用。`,
      `先看事实：${name}在 ${ctx.total} 家机场里排第 ${row.rank} 名，推荐档是“${ctx.tierLabel}”，五项公开资料查得到 ${comp.have.length} 项，${lackText}。选梯子没有它的测速数据，所以不对速度和稳定性下结论；是否合适，买短周期在自己的网络下用几天最可靠。`,
      `${name}目前排在选梯子推荐榜第 ${row.rank} 名，档位为“${ctx.tierLabel}”。五项公开资料里有 ${comp.have.length} 项可以核对，${lackText}。名次不是测速名次，下单前请到官网把套餐页再核对一遍。`,
    ]),
  });

  // 2. 价格
  if (cheapest) {
    const planList = plans
      .slice(0, 3)
      .map((p) => `${p.name} ${p.price}${p.quota ? `、${p.quota}` : ''}${p.cycle ? `、${p.cycle}` : ''}`)
      .join('；');
    out.push({
      q: pick(slug, 3, [`${name}多少钱一个月？`, `${name}的价格和套餐是怎样的？`, `${name}最便宜的套餐多少钱？`]),
      a: `目前记下来的档位：${planList}。最低一档折合每月 ¥${cheapest.monthly}${cheapest.plan.cycle === '按年付费' ? '，这是年付折算出来的月均价，实际需要一次付清全年费用' : ''}${perGb ? `；按流量折算，最低约 ¥${perGb.perGb.toFixed(3)} 每 GB` : ''}。价格来自${source}，核对日期 ${verified}，付款时看官网结账页面显示的数字。`,
    });
  } else {
    out.push({
      q: pick(slug, 3, [`${name}多少钱一个月？`, `${name}的价格在哪里看？`, `${name}的套餐价格是多少？`]),
      a: pick(slug, 4, [
        `选梯子没有查到${name}可核对的公开价格，所以这里不写任何数字。价格需要到官网套餐页查看，有些机场不注册就看不到套餐列表。看价格时同时确认付费周期、每月流量和续费价格。`,
        `${name}的价格资料暂缺。我们不会用推测的数字填空，请直接到官网的套餐页核对；如果需要注册才能查看，可以先注册不付款，看清周期、流量和退款规则再决定。`,
      ]),
    });
  }

  // 3. 月付
  out.push({
    q: pick(slug, 5, [`${name}可以按月付费吗？`, `${name}有月付套餐吗？`, `${name}一定要年付吗？`]),
    a: monthly
      ? `可以。资料里记录了按月付费的套餐，最低的是 ${monthly.plan.name} ${monthly.plan.price}${monthly.plan.quota ? `、${monthly.plan.quota}` : ''}。第一次买可以先用月付试一个月，确认晚高峰也能满足需要，再考虑更长的周期。`
      : cheapest
        ? `资料里没有记录${name}的按月付费套餐，目前能读出价格的档位都需要按年付费。官网是否另有月付档位，以套餐页为准；如果你只想先试一个月，可以到月付机场页面看其他品牌。`
        : `资料里没有${name}的套餐记录，是否支持月付需要到官网确认。如果你想先试一个月再决定，可以到月付机场页面看资料里明确记录了月付套餐的品牌。`,
  });

  // 4. 线路
  out.push({
    q: pick(slug, 6, [`${name}是专线机场吗？`, `${name}用的是什么线路？`, `${name}是 IPLC 还是 IEPL？`]),
    a: routes.length
      ? `资料里${name}的线路记录为${routes.join('、')}，来源是${source}。线路类型无法从外部直接验证，选梯子也没有做过线路测试；判断是否名副其实，最实际的办法是买短周期，在晚上八点到十一点连续用几天。`
      : `资料里没有${name}的线路类型记录，无法判断它是专线、中转还是直连。付款前可以在官网套餐说明里找线路描述，或者直接问客服；如果你明确需要专线，可以到专线机场页面看资料里写明了线路的品牌。`,
  });

  // 5. 协议与客户端
  out.push({
    q: pick(slug, 7, [`${name}的协议有哪些，配什么客户端？`, `${name}能用 Clash 或小火箭吗？`, `${name}用什么客户端？`]),
    a:
      protocols.length || clients.length
        ? `${protocols.length ? `资料里记录的协议是${protocols.join('、')}` : '资料里没有协议记录'}；${clients.length ? `客户端一栏列的是${clients.join('、')}` : '没有写明支持哪些客户端'}。多数机场会同时提供 Clash 格式和通用格式的订阅，具体以官网面板为准。客户端请只从官方地址下载，见梯子下载页。`
        : `资料里没有${name}的协议和客户端支持记录。购买前请在官网确认它提供哪种格式的订阅，以及你的设备是否有对应的客户端；也可以先看梯子下载页了解各系统可用的客户端。`,
  });

  // 6. 节点地区
  if (regions.length) {
    out.push({
      q: pick(slug, 8, [`${name}有哪些地区的节点？`, `${name}有日本、美国节点吗？`, `${name}的节点分布在哪些地区？`]),
      a: `资料里记录的节点地区是${regions.join('、')}。这只说明有这些地区的节点，不代表某个具体服务一定可用；ChatGPT、Claude、奈飞这类服务还要看官方支持地区和节点 IP 的情况，这部分选梯子没测过，需要你按使用场景页的方法自己验证。`,
    });
  }

  // 7. 官网 / 跑路
  const m = ctx.monitor;
  if (m.result) {
    const stateText = STATE_LABEL[m.result.state];
    out.push({
      q: pick(slug, 9, [`${name}官网打不开，是跑路了吗？`, `${name}还能用吗？跑路了没有？`, `${name}官网还能打开吗？`]),
      a: `选梯子的脚本最近一次检测${name}官网入口的结果是“${stateText}”，检测时间 ${fmtDateTime(ctx.monitorCheckedAt)}，检测点为${ctx.vantage}；累计检测 ${m.checks} 次，其中 ${m.reachable} 次有响应。这只说明检测点当时能否打开官网，不能证明节点可用，也不代表你所在网络下的情况。你那边打不开时，先换网络或开着代理再试，并留意官方公告渠道。${status === 'watch' ? '另外，这家目前在选梯子的状态是“观察中”。' : ''}`,
    });
  }

  // 8. 优惠码
  const couponEntry = COUPONS.find((item) => item.providerId === provider.id);
  const couponNote = couponEntry ? (thirdPartyNotes ?? [])[couponEntry.noteIndex] : undefined;
  if (couponEntry && couponNote) {
    out.push({
      q: pick(slug, 10, [`${name}有优惠码吗？`, `${name}优惠码是多少？`]),
      a: `第三方资料（${couponNote.source}）里记录过${name}的优惠码 ${couponEntry.code}，记录日期 ${fmtDate(couponNote.date)}。优惠码可能过期或有使用条件，是否有效以官网结账页面显示的为准，原文说明见本页的资料来源部分和机场优惠码页面。`,
    });
  }

  // 9. 速度
  out.push({
    q: pick(slug, 11, [`${name}速度快吗？稳定吗？`, `${name}晚高峰卡不卡？`, `${name}的速度和延迟怎么样？`]),
    a: pick(slug, 12, [
      `实时检测中。选梯子目前没有${name}的测速、延迟和丢包数据，也不会转述无法核实的测速截图。速度和稳定性与你的地区、运营商、使用时段都有关，建议买最短周期，在晚高峰用你常用的服务连续试几天。`,
      `这一项选梯子没有测试数据，页面上统一标注为“实时检测中”。别人的测速结果对你的参考价值有限，因为线路表现取决于具体的地区和运营商。想知道${name}在你这里的表现，最可靠的办法是短周期试用。`,
    ]),
  });

  return out.slice(0, 9);
}
