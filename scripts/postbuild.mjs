// 构建后处理：Markdown 正文里的外链补 rel 与新窗口打开。
// src/data/sources.json 白名单内的官方来源（官方仓库、官方文档、官方帮助中心）正常放行，只补 noopener；
// 白名单之外的外链仍然加 nofollow。
// Astro 7 默认使用 Sätteri 渲染 Markdown，不支持旧的 rehype 插件，所以放在构建之后做。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}
const sources = JSON.parse(fs.readFileSync(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src/data/sources.json'), 'utf8'));
const isOfficial = (href) => sources.some((s) => href === s.url || href.startsWith(s.url.replace(/\/$/, '') + '/'));
let patched = 0;
let tables = 0;
for (const file of walk(dist).filter((f) => f.endsWith('.html'))) {
  const html = fs.readFileSync(file, 'utf8');
  const out = html.replace(/<a ([^>]*?)href="(https?:\/\/[^"]+)"([^>]*)>/g, (tag, before, href, after) => {
    if (href.startsWith('https://xziti.com')) return tag;
    const attrs = `${before}${after}`;
    if (/\brel=/.test(attrs)) return tag;
    patched++;
    return `<a ${before}href="${href}"${after} rel="${isOfficial(href) ? 'noopener' : 'noopener nofollow'}" target="_blank">`;
  });
  // Markdown 渲染出来的表格是裸 <table>，统一包一层横向滚动容器（页面自己写的表格已经有 .table-wrap）
  const wrapped = out.replace(/(<div class="table-wrap">)?<table(\s[^>]*)?>([\s\S]*?)<\/table>/g, (m, wrap) => (wrap ? m : `<div class="table-wrap">${m}</div>`));
  if (wrapped !== out) tables += (wrapped.match(/<div class="table-wrap">/g) ?? []).length - (out.match(/<div class="table-wrap">/g) ?? []).length;
  if (wrapped !== html) fs.writeFileSync(file, wrapped);
}
console.log(`postbuild: patched ${patched} external links, wrapped ${tables} tables`);
