// 全站审计：node scripts/audit-dist.mjs
// 对 dist/ 里的每个页面检查：title/description 长度与重复、H1 数量、canonical、JSON-LD 可解析、
// 内链死链、图片 alt、FAQPage 与可见文字一致、外链 rel、sitemap 覆盖，以及页脚、推广链接、榜单顺序等站点规则。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const BASE = 'https://xziti.com';
const WUYOU = 'https://vip02.worryfreeaff.com/#/?code=XT1WDPvr';

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}
const pages = walk(dist).filter((f) => f.endsWith('index.html') || f.endsWith('404.html'));
const toRoute = (f) => {
  const rel = path.relative(dist, path.dirname(f)).replace(/\\/g, '/');
  return rel ? `/${rel}/` : '/';
};
const isNoindex = (html) => /<meta name="robots" content="noindex/.test(html);
const noindexRoutes = new Set(pages.filter((f) => !f.endsWith('404.html') && isNoindex(fs.readFileSync(f, 'utf8'))).map(toRoute));
const routeSet = new Set(pages.filter((f) => !f.endsWith('404.html')).map(toRoute));
const problems = [];
const titles = new Map();
const descs = new Map();
const stats = { pages: pages.length, jsonld: 0, links: 0, words: 0 };
const inbound = new Map();

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const textOf = (html) => decode(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, '')).replace(/\s+/g, '');
const norm = (s) => s.replace(/\s+/g, '').replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
const FORBIDDEN = ['夯到拉', '编辑推荐顺序', '资料待补', '¥79/年', '79元/年', 'lorem', 'undefined', '[object Object]', 'NaN'];

for (const f of pages) {
  const route = toRoute(f);
  const html = fs.readFileSync(f, 'utf8');
  if (f.endsWith('404.html')) continue;

  const title = decode((html.match(/<title>([\s\S]*?)<\/title>/) ?? [])[1] ?? '');
  const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) ?? [])[1] ?? '');
  const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) ?? [])[1] ?? '';
  const h1s = (html.match(/<h1[\s>]/g) ?? []).length;

  if (!title) problems.push(`${route}: 缺 title`);
  if (title.length > 60) problems.push(`${route}: title 过长 ${title.length}`);
  if (route !== '/' && title.length < 14) problems.push(`${route}: title 过短 ${title.length}`);
  if (!desc) problems.push(`${route}: 缺 description`);
  else if (!noindexRoutes.has(route)) {
    if (desc.length > 155) problems.push(`${route}: description 过长 ${desc.length}（Bing 上限约 160）`);
    if (desc.length < 100) problems.push(`${route}: description 过短 ${desc.length}`);
  }
  if (canonical !== `${BASE}${route}`) problems.push(`${route}: canonical 不符 ${canonical}`);
  if (h1s !== 1) problems.push(`${route}: H1 数量 ${h1s}`);
  titles.set(title, [...(titles.get(title) ?? []), route]);
  if (desc) descs.set(desc, [...(descs.get(desc) ?? []), route]);

  const visibleRaw = textOf(html);
  stats.words += visibleRaw.length;
  const visible = norm(visibleRaw);
  const main = textOf((html.match(/<main[\s\S]*<\/main>/) ?? [''])[0]);
  if (main.length < 500 && !noindexRoutes.has(route)) problems.push(`${route}: 正文可见文字只有 ${main.length} 字`);
  for (const w of FORBIDDEN) if (main.includes(w) || title.includes(w) || desc.includes(w)) problems.push(`${route}: 出现禁用内容“${w}”`);
  for (const w of ['机场牛', 'jcniu']) if (main.includes(w) || title.includes(w) || desc.includes(w)) problems.push(`${route}: 正文/标题里不应出现“${w}”（只在页脚友情链接出现）`);

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    stats.jsonld++;
    let data;
    try {
      data = JSON.parse(m[1]);
    } catch {
      problems.push(`${route}: JSON-LD 无法解析`);
      continue;
    }
    if (data['@type'] === 'FAQPage') {
      for (const q of data.mainEntity) {
        if (!visible.includes(norm(q.name)) || !visible.includes(norm(q.acceptedAnswer.text))) problems.push(`${route}: FAQPage 文字与页面可见内容不一致：${q.name}`);
      }
    }
    if (data['@type'] === 'Product') problems.push(`${route}: 不使用 Product 结构化数据`);
    if ('aggregateRating' in data || 'review' in data || 'offers' in data) problems.push(`${route}: 结构化数据含评分/报价字段`);
  }
  const faqCount = (html.match(/"@type":"FAQPage"/g) ?? []).length;
  if (faqCount > 1) problems.push(`${route}: FAQPage 重复 ${faqCount}`);

  for (const m of html.matchAll(/<a [^>]*href="([^"]+)"/g)) {
    const href = m[1];
    if (/^(https?:|mailto:|tel:|#|\/\/)/.test(href) || /['+]/.test(href)) continue;
    stats.links++;
    const clean = href.split('#')[0].split('?')[0];
    if (!clean) continue;
    if (!clean.endsWith('/') && !/\.[a-z0-9]+$/.test(clean)) problems.push(`${route}: 内链缺结尾斜杠 ${href}`);
    if (!routeSet.has(clean) && !fs.existsSync(path.join(dist, clean.replace(/^\//, '')))) problems.push(`${route}: 死链 ${href}`);
    else if (clean !== route) inbound.set(clean, (inbound.get(clean) ?? 0) + 1);
  }
  for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\balt=/.test(m[0])) problems.push(`${route}: img 缺 alt`);
  for (const m of html.matchAll(/<a [^>]*href="(https?:\/\/[^"]+)"[^>]*>/g)) {
    const tag = m[0];
    if (!/xziti\.com/.test(m[1]) && !/rel="[^"]*noopener/.test(tag)) problems.push(`${route}: 外链缺 rel=noopener ${m[1]}`);
  }
  // 品牌官网入口（推广链接）必须带 nofollow sponsored
  for (const m of html.matchAll(/<a [^>]*href="(https:\/\/[^"]*#\/\?code=[^"]*)"[^>]*>/g)) {
    if (!/nofollow/.test(m[0]) || !/sponsored/.test(m[0])) problems.push(`${route}: 推广链接缺 nofollow sponsored`);
  }
  // 友情链接：首页放行，内页必须 nofollow
  for (const m of html.matchAll(/<a [^>]*href="(https:\/\/(?:jcniu\.com|jichangbao\.com)[^"]*)"[^>]*>/g)) {
    const nofollow = /nofollow/.test(m[0]);
    if (route === '/' && nofollow) problems.push(`${route}: 首页友情链接不应加 nofollow ${m[1]}`);
    if (route !== '/' && !nofollow) problems.push(`${route}: 内页页脚友情链接应加 nofollow ${m[1]}`);
  }
  // 页脚：恰好一个 Telegram 文字链接
  if ((html.match(/t\.me\/wyolink/g) ?? []).length !== 1) problems.push(`${route}: 页脚 Telegram 链接数量不是 1`);
}

for (const [t, rs] of titles) if (rs.length > 1) problems.push(`重复 title「${t.slice(0, 30)}」：${rs.join(' ')}`);
for (const [d, rs] of descs) if (rs.length > 1) problems.push(`重复 description「${d.slice(0, 30)}」：${rs.join(' ')}`);
for (const r of routeSet) if (r !== '/' && !noindexRoutes.has(r) && (inbound.get(r) ?? 0) < 2) problems.push(`${r}: 站内入链少于 2 个（${inbound.get(r) ?? 0}）`);

const sm = fs.readFileSync(path.join(dist, 'sitemap-0.xml'), 'utf8');
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const r of routeSet) {
  if (noindexRoutes.has(r)) {
    if (urls.includes(`${BASE}${r}`)) problems.push(`noindex 页面不应进 sitemap：${r}`);
    continue;
  }
  if (!urls.includes(`${BASE}${r}`)) problems.push(`sitemap 缺 ${r}`);
}
const noLastmod = (sm.match(/<url>(?:(?!<\/url>)[\s\S])*<\/url>/g) ?? []).filter((u) => !/<lastmod>/.test(u)).length;
stats.sitemapWithoutLastmod = noLastmod;
stats.sitemapUrls = urls.length;

// 站点规则
const read = (p) => fs.readFileSync(path.join(dist, p), 'utf8');
const w = read('jichang/wuyou-lianjie/index.html');
if (!w.includes(WUYOU.replace(/&/g, '&amp;')) && !w.includes(WUYOU)) problems.push('无忧链接官网跳转地址缺失或被改');
if (!textOf(w).includes('¥6.6/月')) problems.push('无忧链接资料页缺少 ¥6.6/月');
const home = read('index.html');
if (!/badge--gold/.test(home)) problems.push('首页缺少金色渐变徽章');
const order = ['无忧链接', '微风网络', '飞猫云', '暮光加速', 'Firefly'];
const board = textOf(read('tuijian/index.html'));
let last = -1;
for (const name of order) {
  const at = board.indexOf(name);
  if (at < last) problems.push(`推荐榜前五顺序不对：${name}`);
  last = at;
}
for (const host of ['jcniu.com', 'jichangbao.com']) if (!home.includes(host)) problems.push(`页脚缺少友情链接 ${host}`);
for (const host of ['rocketjichang.com', 'ejichang.com', 'jichangtj.net', 'jichanglabs.co']) if (home.includes(host)) problems.push(`页脚不应出现 ${host}（站长指定友情链接只保留机场牛与机场宝）`);
if (!fs.existsSync(path.join(dist, '0175f9ea32311ab38b30219e61520f7b.txt'))) problems.push('缺少 IndexNow key 文件');

console.log(JSON.stringify({ ...stats, avgChars: Math.round(stats.words / stats.pages) }));
console.log(`problems=${problems.length}`);
for (const p of problems.slice(0, Number(process.env.AUDIT_MAX ?? 80))) console.log(' -', p);
process.exit(problems.length ? 1 : 0);
