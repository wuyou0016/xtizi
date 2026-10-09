// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ---- sitemap 的 lastmod：只写“内容真的更新过”的日期，来源都是仓库里的真实字段 ----
const root = path.dirname(fileURLToPath(import.meta.url));
const ARTICLE_BASE = { zhinan: 'zhinan', changjing: 'changjing', xiazai: 'xiazai', jiaocheng: 'jiaocheng', paicha: 'paicha', bikeng: 'bikeng' };
/** @type {Map<string, string>} */
const lastmod = new Map();
function scanContent(dir, toRoute) {
  const full = path.join(root, 'src/content', dir);
  if (!fs.existsSync(full)) return;
  for (const f of fs.readdirSync(full).filter((x) => x.endsWith('.md'))) {
    const head = fs.readFileSync(path.join(full, f), 'utf8').split('\n---')[0] ?? '';
    const date = head.match(/^updatedAt:\s*(\d{4}-\d{2}-\d{2})/m)?.[1];
    const type = head.match(/^type:\s*(\w+)/m)?.[1];
    const route = toRoute(f.replace(/\.md$/, ''), type);
    if (date && route) lastmod.set(route, date);
  }
}
scanContent('articles', (slug, type) => (type && ARTICLE_BASE[type] ? `/${ARTICLE_BASE[type]}/${slug}/` : undefined));
scanContent('glossary', (slug) => `/cidian/${slug}/`);
const readJson = (p) => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const day = (v) => String(v).slice(0, 10);
try {
  const board = day(readJson('src/data/board/board.json')[0].snapshotAt);
  for (const r of ['/', '/tuijian/', '/jichang/', '/duibi/', '/youhuima/']) lastmod.set(r, board);
  const providers = readJson('src/data/providers/providers.json');
  for (const p of providers) lastmod.set(`/jichang/${p.slug}/`, day(p.updatedAt));
  const live = day(readJson('src/data/live/releases.json').checkedAt);
  const mon = day(readJson('src/data/live/monitor.json').checkedAt);
  lastmod.set('/xiazai/', live);
  lastmod.set('/jiance/', mon);
  lastmod.set('/daohang/', live > mon ? live : mon);
} catch {}
const siteUpdatedAt = (() => {
  try {
    return day(readJson('src/data/site-meta.json').pagesUpdatedAt);
  } catch {
    return undefined;
  }
})();
/** 取路径所属的最近更新日期：精确匹配优先；对比页、专项榜取榜单快照日期；栏目页取其下文章的最近更新日期；其余页面取 site-meta.json 里的模板更新日期。 */
function lastmodFor(pathname) {
  if (lastmod.has(pathname)) return lastmod.get(pathname);
  if (pathname.startsWith('/duibi/') || pathname.startsWith('/tuijian/')) return lastmod.get('/tuijian/');
  const seg = pathname.split('/').filter(Boolean)[0];
  if (seg && (ARTICLE_BASE[seg] || seg === 'cidian') && pathname === `/${seg}/`) {
    const dates = [...lastmod.entries()].filter(([r]) => r.startsWith(`/${seg}/`)).map(([, d]) => d);
    if (dates.length) return dates.sort().at(-1);
  }
  return siteUpdatedAt;
}

// Sitemap inclusion policy（见 XuanTizi Crawl / Indexability Foundation v1.0）：
// - 排除 404 页面（不是可索引内容）
// - 排除任何带 query string 的 URL（canonical 不含 query，sitemap 也不应包含）
// - 排除任何路径片段命中 demo/mock 关键词的 URL（开发占位数据的防御性兜底，
//   正式发布门槛应在页面生成阶段就不产出这些路径，这里是第二道防线）
// - 排除分页类路径（/page/ 或 ?page=），除非该分页本身是独立有价值的 canonical 页面
// - 排除 /internal-stats（站内数据面板，robots noindex，不应出现在 sitemap 里）
/** @param {string} pageUrl @returns {boolean} */
function isSitemapExcluded(pageUrl) {
  const url = new URL(pageUrl);

  if (url.pathname === '/404' || url.pathname === '/404/' || url.pathname === '/404.html') {
    return true;
  }
  if (url.search) {
    return true;
  }
  if (/\/(demo|mock)(-|\/|$)/i.test(url.pathname)) {
    return true;
  }
  if (/\/page\/\d+\/?$/.test(url.pathname)) {
    return true;
  }
  if (url.pathname === '/internal-stats' || url.pathname === '/internal-stats/') {
    return true;
  }
  if (url.pathname === '/llms.txt' || url.pathname === '/search-index.json') {
    return true;
  }
  if (url.pathname === '/sousuo/' || url.pathname === '/sousuo') {
    return true;
  }
  return false;
}

// https://astro.build/config
export default defineConfig({
  // sitemap 需要绝对域名才能生成 canonical 绝对 URL，正式 canonical host 见 CLAUDE.md / SEO Foundation。
  site: 'https://xtizi.com',
  integrations: [
    sitemap({
      filter: (page) => !isSitemapExcluded(page),
      serialize(item) {
        const date = lastmodFor(new URL(item.url).pathname);
        if (date) item.lastmod = `${date}T00:00:00.000Z`;
        return item;
      },
    }),
  ],
});
