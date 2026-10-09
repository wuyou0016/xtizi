// 品牌事实筛选：所有"专线机场 / 月付机场 / 大流量机场"之类的专项榜单都从 providers.json
// 的真实字段筛选或折算，不引入任何自造分数。没有字段支撑的品牌不会出现在对应专项里。
import type { CollectionEntry } from 'astro:content';
import type { BoardRow } from './board';

type ProviderEntry = CollectionEntry<'providers'>;

const PRICE_PATTERN = /(\d+(?:\.\d+)?)\s*(?:元)?\s*\/\s*月/;
const GB_PATTERN = /(\d+(?:\.\d+)?)\s*GB/i;

/** 套餐文案里能直接读出的"每月价格"（如 "¥6.6/月"、"年付¥99（约¥8.3/月）"）；读不出返回 null。 */
export function monthlyPrice(price: string): number | null {
  const match = price.match(PRICE_PATTERN);
  return match ? Number(match[1]) : null;
}

export function trafficGb(quota: string | undefined): number | null {
  if (!quota) return null;
  const match = quota.match(GB_PATTERN);
  return match ? Number(match[1]) : null;
}

export interface PlanFact {
  name: string;
  price: string;
  cycle: string;
  cycleId: string;
  quota: string;
  monthly: number | null;
  gb: number | null;
  /** 每 GB 折算价 = 月均价 ÷ 每月流量（两项都读得出才有） */
  perGb: number | null;
}

const CYCLE_LABEL: Record<string, string> = { yearly: '按年付费', monthly: '按月付费' };

export function planFacts(provider: ProviderEntry): PlanFact[] {
  return (provider.data.vendor.pricing ?? []).map((plan) => {
    const monthly = monthlyPrice(plan.price);
    const gb = trafficGb(plan.trafficQuota);
    return {
      name: plan.name,
      price: plan.price,
      cycle: plan.billingCycle ? (CYCLE_LABEL[plan.billingCycle] ?? plan.billingCycle) : '',
      cycleId: plan.billingCycle ?? '',
      quota: plan.trafficQuota ?? '',
      monthly,
      gb,
      perGb: monthly !== null && gb ? Math.round((monthly / gb) * 1000) / 1000 : null,
    };
  });
}

type Priced = { plan: PlanFact; monthly: number };

/** 最便宜的一档"每月价格"（读不出任何价格则为 null）。 */
export function cheapestMonthly(provider: ProviderEntry): Priced | null {
  let best: Priced | null = null;
  for (const plan of planFacts(provider)) {
    if (plan.monthly === null) continue;
    if (!best || plan.monthly < best.monthly) best = { plan, monthly: plan.monthly };
  }
  return best;
}

/** 每 GB 折算价最低的一档（月均价与流量都读得出才参与）。 */
export function bestPerGb(provider: ProviderEntry): { plan: PlanFact; perGb: number } | null {
  let best: { plan: PlanFact; perGb: number } | null = null;
  for (const plan of planFacts(provider)) {
    if (plan.perGb === null) continue;
    if (!best || plan.perGb < best.perGb) best = { plan, perGb: plan.perGb };
  }
  return best;
}

/** 流量最大的一档。 */
export function largestPlan(provider: ProviderEntry): { plan: PlanFact; gb: number } | null {
  let best: { plan: PlanFact; gb: number } | null = null;
  for (const plan of planFacts(provider)) {
    if (plan.gb === null) continue;
    if (!best || plan.gb > best.gb) best = { plan, gb: plan.gb };
  }
  return best;
}

/** 最便宜的按月付费套餐。 */
export function cheapestMonthlyBilled(provider: ProviderEntry): Priced | null {
  let best: Priced | null = null;
  for (const plan of planFacts(provider)) {
    if (plan.cycleId !== 'monthly' || plan.monthly === null) continue;
    if (!best || plan.monthly < best.monthly) best = { plan, monthly: plan.monthly };
  }
  return best;
}

/** 清掉 "（第三方资料）" 这类括号来源后缀，页面上的来源标注由单独的徽章给出。 */
export function cleanLabel(value: string): string {
  return value.replace(/（[^）]*）/g, '').trim();
}

export const cleanList = (list: string[] | undefined) => [...new Set((list ?? []).map(cleanLabel).filter(Boolean))];

export function hasDedicatedRoute(provider: ProviderEntry): boolean {
  return (provider.data.vendor.routes ?? []).some((route) => /IPLC|IEPL|专线/i.test(route));
}

export function hasMonthlyPlan(provider: ProviderEntry): boolean {
  return (provider.data.vendor.pricing ?? []).some((plan) => plan.billingCycle === 'monthly');
}

export function hasClashSupport(provider: ProviderEntry): boolean {
  return (provider.data.vendor.clientSupport ?? []).some((client) => /clash/i.test(client));
}

export function hasRegion(provider: ProviderEntry, names: string[]): boolean {
  const regions = provider.data.vendor.regions ?? [];
  return names.some((name) => regions.includes(name));
}

/** 五项公开资料里有几项查得到：价格、线路、协议、节点地区、客户端支持。 */
export function completeness(provider: ProviderEntry): { have: string[]; lack: string[] } {
  const v = provider.data.vendor;
  const items: [string, boolean][] = [
    ['价格', (v.pricing ?? []).length > 0],
    ['线路', (v.routes ?? []).length > 0],
    ['协议', (v.protocols ?? []).length > 0],
    ['节点地区', (v.regions ?? []).length > 0],
    ['客户端', (v.clientSupport ?? []).length > 0],
  ];
  return { have: items.filter(([, ok]) => ok).map(([k]) => k), lack: items.filter(([, ok]) => !ok).map(([k]) => k) };
}

export const LARGE_TRAFFIC_GB = 100;

export type RankBlockKind = 'overall' | 'value' | 'cheap' | 'dedicated' | 'monthly' | 'traffic' | 'clash' | 'overseas';

export interface RankBlockMeta {
  heading: string;
  intro: string;
  link: { label: string; href: string };
}

export const RANK_BLOCK_META: Record<RankBlockKind, RankBlockMeta> = {
  overall: {
    heading: '选梯子推荐榜目前排在前面的机场',
    intro: '下面是推荐榜的前几名。名次不是测速名次；价格与线路按资料原样列出，付款前到官网结账页面再核对一遍。',
    link: { label: '查看完整机场推荐榜', href: '/tuijian/' },
  },
  value: {
    heading: '资料里能算出每 GB 价格的机场',
    intro: '每 GB 价格 = 资料里的月均价 ÷ 每月流量，是一个纯折算值，只反映“同样的钱买到多少流量”，不反映线路质量。',
    link: { label: '查看性价比机场对照表', href: '/tuijian/xingjiabi/' },
  },
  cheap: {
    heading: '资料里月均价最低的几家机场',
    intro: '按套餐文案里能读出的每月价格从低到高排列。低价档多数需要按年付费，表里写明了付费周期。',
    link: { label: '查看便宜机场推荐', href: '/tuijian/pianyi/' },
  },
  dedicated: {
    heading: '资料里写明走专线的机场',
    intro: '下面这些品牌的资料里明确写了 IPLC、IEPL 或企业级专线。线路类型来自官网或第三方资料，选梯子没有做过线路测试。',
    link: { label: '查看专线机场推荐', href: '/tuijian/zhuanxian/' },
  },
  monthly: {
    heading: '资料里可以按月付费的机场',
    intro: '第一次买、或者不想被长周期套住时，月付更容易退出。下面是资料里记录了按月付费套餐的品牌。',
    link: { label: '查看月付机场推荐', href: '/tuijian/yuefu/' },
  },
  traffic: {
    heading: `资料里有 ${LARGE_TRAFFIC_GB}GB 以上套餐的机场`,
    intro: '看视频、多设备共用时流量是第一约束。下面是资料里至少有一档每月流量不低于 100GB 的品牌，按榜单名次排列。',
    link: { label: '查看大流量机场推荐', href: '/tuijian/daliuliang/' },
  },
  clash: {
    heading: '资料里明确写了支持 Clash 的机场',
    intro: '把 Clash 写进“客户端支持”的品牌目前很少。没写不等于不能用，多数机场都提供 Clash 格式订阅，只是资料里没有可核对的说明。',
    link: { label: '查看梯子下载与客户端对照', href: '/xiazai/' },
  },
  overseas: {
    heading: '资料里记录了日本、新加坡或美国节点的机场',
    intro: '对出口地区有要求的服务，节点在哪个地区比品牌名更重要。下面是资料里记录了这三个地区之一的品牌；能否正常使用需要你自己验证。',
    link: { label: '查看机场推荐榜', href: '/tuijian/' },
  },
};

export function filterRows(kind: RankBlockKind, rows: BoardRow[]): BoardRow[] {
  switch (kind) {
    case 'overall':
      return rows.slice(0, 8);
    case 'value':
      return rows.filter((row) => bestPerGb(row.provider) !== null);
    case 'cheap':
      return rows
        .map((row) => ({ row, best: cheapestMonthly(row.provider) }))
        .filter((item): item is { row: BoardRow; best: Priced } => item.best !== null)
        .sort((a, b) => a.best.monthly - b.best.monthly || a.row.rank - b.row.rank)
        .map((item) => item.row);
    case 'dedicated':
      return rows.filter((row) => hasDedicatedRoute(row.provider));
    case 'monthly':
      return rows.filter((row) => hasMonthlyPlan(row.provider));
    case 'traffic':
      return rows.filter((row) => (largestPlan(row.provider)?.gb ?? 0) >= LARGE_TRAFFIC_GB);
    case 'clash':
      return rows.filter((row) => hasClashSupport(row.provider));
    case 'overseas':
      return rows.filter((row) => hasRegion(row.provider, ['日本', '新加坡', '美国']));
  }
}

/** 给卡片/表格用的一行价格摘要。 */
export function priceLine(provider: ProviderEntry): { text: string; note: string } {
  const best = cheapestMonthly(provider);
  if (best) return { text: best.plan.price, note: [best.plan.name, best.plan.quota, best.plan.cycle].filter(Boolean).join(' · ') };
  const first = provider.data.vendor.pricing?.[0];
  if (first) return { text: first.price, note: first.name };
  return { text: '资料暂缺', note: '以官网套餐页为准' };
}
