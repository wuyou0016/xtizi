import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getBoard } from '../data/utils/board';
import { isDemoEntry } from '../data/utils/demo-filter';
import { articleTypeLabel, getArticleHref } from '../data/utils/article-routing';
import { RANK_PAGES } from '../data/copy/rank-pages';
import { CLIENTS, shortName } from '../data/utils/live';

// 站内搜索索引：构建时生成的静态 JSON，页面里用纯前端检索，不经过任何服务器。
// 字段：t 标题，u 路径，k 类型，d 摘要，w 关键词（空格分隔）。
export const GET: APIRoute = async () => {
  const [articles, terms, board] = await Promise.all([getCollection('articles', ({ id }) => !isDemoEntry(id)), getCollection('glossary', ({ id }) => !isDemoEntry(id)), getBoard()]);
  const clip = (s: string, n = 80) => (s.length > n ? `${s.slice(0, n)}…` : s);
  const items: { t: string; u: string; k: string; d: string; w: string }[] = [];

  for (const a of articles) {
    items.push({ t: a.data.title, u: getArticleHref(a), k: articleTypeLabel[a.data.type], d: clip(a.data.answer), w: [a.data.primaryKeyword, ...(a.data.secondaryKeywords ?? [])].join(' ') });
  }
  for (const t of terms) items.push({ t: `${t.data.term}是什么意思`, u: `/cidian/${t.id}/`, k: '术语', d: clip(t.data.definition), w: [t.data.term, ...(t.data.aliases ?? [])].join(' ') });
  for (const row of board.rows) {
    const p = row.provider.data;
    items.push({ t: `${p.name}怎么样？${p.name}机场资料核对`, u: `/jichang/${p.slug}/`, k: '机场', d: clip(row.reason), w: [p.name, ...(p.aliases ?? []), `${p.name}官网`, `${p.name}价格`, `${p.name}优惠码`].join(' ') });
  }
  for (const c of CLIENTS) items.push({ t: `${shortName(c)} 下载`, u: `/xiazai/${c.slug}/`, k: '梯子下载', d: `${c.kind}，内核 ${c.core}`, w: `${shortName(c)} ${c.name} 下载 客户端` });
  for (const r of RANK_PAGES) items.push({ t: r.h1, u: `/tuijian/${r.slug}/`, k: '榜单', d: clip(r.lead), w: r.keywords.join(' ') });
  const fixed: [string, string, string, string][] = [
    ['机场推荐榜', '/tuijian/', '榜单', '机场推荐 梯子推荐 机场排行榜'],
    ['梯子导航', '/daohang/', '导航', '梯子导航 机场导航 翻墙导航 机场官网'],
    ['梯子下载', '/xiazai/', '下载', '梯子下载 梯子软件 梯子工具 客户端'],
    ['机场官网检测', '/jiance/', '检测', '机场跑路了吗 机场官网打不开 官网检测'],
    ['机场对比', '/duibi/', '对比', '机场哪个好 机场对比'],
    ['机场优惠码', '/youhuima/', '优惠码', '机场优惠码 梯子折扣码'],
    ['选梯子向导', '/gongju/xuan-tizi-xiangdao/', '工具', '选梯子 梯子怎么选 向导'],
    ['梯子流量计算器', '/gongju/liuliang-jisuanqi/', '工具', '梯子流量 流量计算'],
    ['梯子成本计算器', '/gongju/chengben-jisuanqi/', '工具', '机场价格 月均价 每GB价格'],
    ['梯子客户端选择器', '/gongju/kehuduan-xuanze/', '工具', '梯子客户端 客户端选择'],
    ['下单前核对清单', '/gongju/xuangou-qingdan/', '工具', '买梯子注意事项 核对清单'],
    ['梯子常见问题', '/faq/', '问答', '梯子常见问题 机场FAQ'],
    ['排名与核验方法', '/fangfa/', '说明', '排名方法 数据来源 评测方法'],
  ];
  for (const [t, u, k, w] of fixed) items.push({ t, u, k, d: '', w });
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
