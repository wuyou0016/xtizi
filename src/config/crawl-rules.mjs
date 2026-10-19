// 2026-10-19 “收敛要被抓取的页面 + 拆开孪生站”规则（Bing 复查 10/19 的建议 B6/B7/B9）。
//
// 背景：新站 8–16 天里只被抓取首页，其余页面从未被抓取；xtizi 与 tizidao 有 136 个完全相同的路径，两站对同一批查询互相蚕食。
// 分工：xtizi = 选购 / 榜单 / 下载 / 避坑 / 场景指南；术语（cidian）、排错（paicha）、教程归 tizidao。
// 做法：被收掉的页面保留在站内（用户仍可访问、站内链接不变），只加 noindex,follow 并移出 sitemap；不删除、不重定向。
// 本文件同时被 astro.config.mjs（sitemap 过滤）与 SEOHead / FaqBlock（运行时）使用，改规则只改这一处。

/** 整个栏目 noindex（含栏目首页） */
const NOINDEX_SECTIONS = [
  '/tag/', // 标签聚合页：与文章/栏目页重复，近重复度高
  '/cidian/', // 术语词条（与 tizidao 21 个路径相同）→ 归 tizidao
  '/paicha/', // 排错文章（与 tizidao 13 个路径相同）→ 归 tizidao
];

/** 单页 noindex（暂无） */
const NOINDEX_PATHS = new Set([]);

/** @param {string} pathname */
export function isNoindexPath(pathname) {
  const p = pathname.endsWith('/') ? pathname : `${pathname}/`;
  if (NOINDEX_PATHS.has(p)) return true;
  return NOINDEX_SECTIONS.some((s) => p === s || p.startsWith(s));
}

/**
 * 页面底部的“常见问题”区块（及对应的 FAQPage 结构化数据）只在真有问答意图的栏目显示：
 * 首页、/faq/ 总页、指南（zhinan）、避坑（bikeng）、教程（jiaocheng）。
 * 其余栏目（术语、标签、品牌档案、对比、榜单、工具、下载、场景、法务页等）不再每页硬塞 FAQ。
 */
const FAQ_SECTIONS = ['/zhinan/', '/bikeng/', '/jiaocheng/', '/gongju/']; // 工具页的“怎么用/怎么算”问答是自然意图，且正文本就偏短
const FAQ_EXACT = new Set(['/', '/faq/']);

/** @param {string} pathname */
export function faqAllowed(pathname) {
  const p = pathname.endsWith('/') ? pathname : `${pathname}/`;
  if (FAQ_EXACT.has(p)) return true;
  return FAQ_SECTIONS.some((s) => p.startsWith(s) && p !== s);
}

/** 页脚友情链接只在这些页面出现（原来每页都有，且几个新站互挂，是“站群页脚”足迹） */
const FRIEND_LINK_PATHS = new Set(['/', '/guanyu/']);

/** @param {string} pathname */
export function friendLinksAllowed(pathname) {
  const p = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return FRIEND_LINK_PATHS.has(p);
}
