// 关键词专题体系：每个专题对应一个关键词落地页（/tag/{slug}/），聚合相关文章、
// 相关问答和（有真实字段支撑时）相关品牌。
// - 文章 → 专题：按标题 + 简介 + 主/次关键词里是否出现专题关键词自动归类
// - 问答 → 专题：问答数据里显式标注
// - 品牌 → 专题：只看 providers 里真实存在的字段，没有字段支撑的专题不给品牌贴标
import type { CollectionEntry } from 'astro:content';
import { FAQ_ITEMS } from './faq-data';
import type { FaqItem } from './seo-types';
import { TAG_COPY } from './site-copy';
import { bestPerGb, cheapestMonthly } from '../utils/provider-facts';

export interface SeoTag {
  slug: string;
  name: string;
  blurb: string;
  intro: string;
  angle: string;
  keywords: string[];
  links: { label: string; href: string }[];
}

interface TagStruct {
  slug: string;
  keywords: string[];
  links: { label: string; href: string }[];
}

const L = {
  tuijian: { label: '机场推荐榜', href: '/tuijian/' },
  pianyi: { label: '便宜机场推荐', href: '/tuijian/pianyi/' },
  xingjiabi: { label: '性价比机场对照表', href: '/tuijian/xingjiabi/' },
  zhuanxian: { label: '专线机场推荐', href: '/tuijian/zhuanxian/' },
  wending: { label: '稳定机场怎么判断', href: '/tuijian/wending/' },
  daliuliang: { label: '大流量机场推荐', href: '/tuijian/daliuliang/' },
  jichang: { label: '机场大全', href: '/jichang/' },
  xiazai: { label: '梯子下载', href: '/xiazai/' },
  daohang: { label: '梯子导航', href: '/daohang/' },
  jiaocheng: { label: '梯子使用教程', href: '/jiaocheng/' },
  changjing: { label: '梯子使用场景', href: '/changjing/' },
  zhinan: { label: '梯子选购指南', href: '/zhinan/' },
  paicha: { label: '梯子故障排查', href: '/paicha/' },
  bikeng: { label: '机场避坑指南', href: '/bikeng/' },
  jiance: { label: '机场官网检测', href: '/jiance/' },
  cidian: { label: '梯子术语库', href: '/cidian/' },
  youhuima: { label: '机场优惠码', href: '/youhuima/' },
  xiangdao: { label: '选梯子向导', href: '/gongju/xuan-tizi-xiangdao/' },
  chengben: { label: '梯子成本计算器', href: '/gongju/chengben-jisuanqi/' },
  kehuduan: { label: '客户端选择器', href: '/gongju/kehuduan-xuanze/' },
  windows: { label: 'Windows 梯子下载', href: '/xiazai/windows/' },
  mac: { label: 'Mac 梯子下载', href: '/xiazai/mac/' },
  android: { label: '安卓梯子下载', href: '/xiazai/android/' },
  iphone: { label: 'iPhone 梯子下载', href: '/xiazai/iphone/' },
  luyouqi: { label: '路由器梯子', href: '/xiazai/luyouqi/' },
};

export const TAG_STRUCT: TagStruct[] = [
  { slug: 'jichang-tuijian', keywords: ['推荐', '怎么选', '选购', '备用机场'], links: [L.tuijian, L.jichang, L.xiangdao] },
  { slug: 'pianyi-jichang', keywords: ['便宜', '低价', '多少钱', '价格', '一元', '免费', '学生'], links: [L.pianyi, L.youhuima, L.chengben] },
  { slug: 'xingjiabi-jichang', keywords: ['性价比', '流量', '倍率', '年付', '月付', '试用', '设备数'], links: [L.xingjiabi, L.daliuliang, L.chengben] },
  { slug: 'zhuanxian-jichang', keywords: ['专线', 'IPLC', 'IEPL', '中转', '直连', '线路'], links: [L.zhuanxian, L.cidian, L.tuijian] },
  { slug: 'wending-jichang', keywords: ['稳定', '晚高峰', '晚上卡', '速度慢', '超售', '限速', '测速'], links: [L.wending, L.jiance, L.zhuanxian] },
  { slug: 'tizi-xiazai', keywords: ['下载'], links: [L.xiazai, L.kehuduan, L.daohang] },
  { slug: 'tizi-gongju', keywords: ['梯子工具', '梯子软件', '内核', '客户端', '代理工具'], links: [L.xiazai, L.daohang, L.jiaocheng] },
  { slug: 'clash', keywords: ['Clash', 'Mihomo', 'mihomo', 'Stash'], links: [L.xiazai, L.jiaocheng, L.windows] },
  { slug: 'v2ray', keywords: ['V2Ray', 'v2rayN', 'v2rayNG', 'Xray', 'VMess', 'VLESS'], links: [L.xiazai, L.jiaocheng, L.android] },
  { slug: 'xiaohuojian', keywords: ['小火箭', 'Shadowrocket', 'iPhone', 'iOS', '苹果', 'Apple ID'], links: [L.iphone, L.jiaocheng, L.xiazai] },
  { slug: 'sing-box', keywords: ['sing-box', 'Hiddify', 'Karing', 'NekoBox'], links: [L.xiazai, L.jiaocheng, L.android] },
  { slug: 'kexue-shangwang', keywords: ['科学上网', '魔法上网', '翻墙', '梯子是什么', '机场是什么', '梯子机场'], links: [L.zhinan, L.tuijian, L.xiazai] },
  { slug: 'vpn', keywords: ['VPN', '加速器'], links: [L.zhinan, L.tuijian, L.cidian] },
  { slug: 'ai-gongju', keywords: ['ChatGPT', 'Claude', 'Gemini', 'AI 编程', 'GPT'], links: [L.changjing, L.tuijian, L.paicha] },
  { slug: 'liumeiti', keywords: ['奈飞', 'Netflix', 'Disney', 'YouTube', '流媒体', '解锁', 'TikTok', '电视'], links: [L.changjing, L.daliuliang, L.paicha] },
  { slug: 'shejiao', keywords: ['Telegram', '推特', 'Instagram', 'Facebook', 'Discord', 'WhatsApp'], links: [L.changjing, L.pianyi, L.paicha] },
  { slug: 'jiedian', keywords: ['节点', '原生 IP', '地区'], links: [L.jichang, L.cidian, L.tuijian] },
  { slug: 'dingyue', keywords: ['订阅'], links: [L.jiaocheng, L.paicha, L.bikeng] },
  { slug: 'xieyi', keywords: ['协议', 'Trojan', 'Hysteria', 'Shadowsocks', 'VLESS', 'VMess'], links: [L.cidian, L.zhinan, L.xiazai] },
  { slug: 'xinshou', keywords: ['新手', '第一次', '是什么', '怎么用'], links: [L.zhinan, L.xiangdao, L.xiazai] },
  { slug: 'paolu-bikeng', keywords: ['跑路', '避坑', '风险', '假官网', '泄露', '退款', '永久', '靠谱', '能信', '安全', '日志', '破解'], links: [L.bikeng, L.jiance, L.tuijian] },
  { slug: 'guzhang', keywords: ['连不上', '打不开', '怎么办', '排查', '失败', '超时', '用不了', '卡顿', '占用', '不走代理'], links: [L.paicha, L.jiance, L.jiaocheng] },
  { slug: 'shouji-tizi', keywords: ['手机', '安卓', 'Android', 'iPhone', '鸿蒙'], links: [L.android, L.iphone, L.xiazai] },
  { slug: 'diannao-tizi', keywords: ['电脑', 'Windows', 'Mac', 'Linux', '终端'], links: [L.windows, L.mac, L.xiazai] },
  { slug: 'luyouqi', keywords: ['路由器', 'OpenWrt', 'OpenClash', '局域网', '电视'], links: [L.luyouqi, L.jiaocheng, L.xiazai] },
  { slug: 'bangong-xuexi', keywords: ['办公', '外贸', '跨境', '学生', 'GitHub', '谷歌', 'Steam'], links: [L.changjing, L.zhuanxian, L.tuijian] },
];

// 专题的可见文案（名称、简介、角度段落）来自本站自己的 site-copy.ts；还没写文案的专题不生成页面。
export const SEO_TAGS: SeoTag[] = TAG_STRUCT.filter((struct) => TAG_COPY[struct.slug]).map((struct) => ({ ...struct, ...TAG_COPY[struct.slug]! }));

export function getTag(slug: string): SeoTag | undefined {
  return SEO_TAGS.find((tag) => tag.slug === slug);
}

type ArticleEntry = CollectionEntry<'articles'>;

function articleHaystack(article: ArticleEntry): string {
  const d = article.data;
  return `${d.title} ${d.description} ${d.primaryKeyword} ${(d.secondaryKeywords ?? []).join(' ')}`.toLowerCase();
}

export function articleMatchesTag(article: ArticleEntry, tag: SeoTag): boolean {
  const text = articleHaystack(article);
  return tag.keywords.some((keyword) => text.includes(keyword.toLowerCase()));
}

export function getTagsForArticle(article: ArticleEntry, limit = 6): SeoTag[] {
  return SEO_TAGS.filter((tag) => articleMatchesTag(article, tag)).slice(0, limit);
}

export function getArticlesForTag(tag: SeoTag, articles: ArticleEntry[]): ArticleEntry[] {
  return articles.filter((article) => articleMatchesTag(article, tag));
}

export function getFaqForTag(tag: SeoTag): FaqItem[] {
  return FAQ_ITEMS.filter((item) => item.tags.includes(tag.slug));
}

function hash(text: string): number {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) | 0;
  return Math.abs(h);
}

// 按专题重合数给页面挑相关问答；同分的用"种子 + 问题"哈希打散，避免所有页面拿到同一组问答。
export function getRelatedFaq(tagSlugs: string[], seed: string, limit = 3): FaqItem[] {
  const scored = FAQ_ITEMS.map((item) => ({
    item,
    score: item.tags.filter((tag) => tagSlugs.includes(tag)).length,
  })).filter((entry) => entry.score > 0);
  scored.sort((a, b) => b.score - a.score || hash(seed + a.item.q) - hash(seed + b.item.q));
  return scored.slice(0, limit).map((entry) => entry.item);
}

type ProviderEntry = CollectionEntry<'providers'>;

const listHas = (list: string[] | undefined, pattern: RegExp) => (list ?? []).some((value) => pattern.test(value));

// 品牌 → 专题：全部来自 providers.json 的真实字段（或由字段折算），不做主观判断。
const PROVIDER_MATCHERS: Record<string, (provider: ProviderEntry) => boolean> = {
  'zhuanxian-jichang': (p) => listHas(p.data.vendor.routes, /IPLC|IEPL|专线/i),
  'pianyi-jichang': (p) => (cheapestMonthly(p)?.monthly ?? Infinity) <= 10,
  'xingjiabi-jichang': (p) => bestPerGb(p) !== null,
  clash: (p) => listHas(p.data.vendor.clientSupport, /clash/i),
  xiaohuojian: (p) => listHas(p.data.vendor.clientSupport, /shadowrocket|小火箭/i),
  v2ray: (p) => listHas(p.data.vendor.clientSupport, /v2ray/i) || listHas(p.data.vendor.protocols, /VLESS|VMess/i),
  xieyi: (p) => (p.data.vendor.protocols ?? []).length > 0,
  jiedian: (p) => (p.data.vendor.regions ?? []).length > 0,
};

export const PROVIDER_MATCH_NOTE: Record<string, string> = {
  'zhuanxian-jichang': '资料里写明 IPLC、IEPL 或企业级专线',
  'pianyi-jichang': '资料里最低一档月均价不高于 ¥10',
  'xingjiabi-jichang': '资料里的价格和流量都读得出，可以折算每 GB 价格',
  clash: '资料的客户端支持里写了 Clash',
  xiaohuojian: '资料的客户端支持里写了 Shadowrocket',
  v2ray: '资料里写了 v2rayN 支持，或协议里有 VLESS / VMess',
  xieyi: '资料里记录了支持的协议',
  jiedian: '资料里记录了节点地区',
};

export function providerMatchesTag(provider: ProviderEntry, tag: SeoTag): boolean {
  const matcher = PROVIDER_MATCHERS[tag.slug];
  return matcher ? matcher(provider) : false;
}

export function tagHasProviderSupport(tag: SeoTag): boolean {
  return tag.slug in PROVIDER_MATCHERS;
}

export function getTagsForProvider(provider: ProviderEntry): SeoTag[] {
  return SEO_TAGS.filter((tag) => providerMatchesTag(provider, tag));
}
