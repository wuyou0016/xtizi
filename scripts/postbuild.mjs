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
    if (href.startsWith('https://xtizi.com')) return tag;
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

// 官网检测历史整理成可下载、可引用的数据文件（只含机场名、日期、检测次数与有响应次数；不含入口域名）。
{
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const monitor = JSON.parse(fs.readFileSync(path.join(root, 'src/data/live/monitor.json'), 'utf8'));
  const providers = JSON.parse(fs.readFileSync(path.join(root, 'src/data/providers/providers.json'), 'utf8'));
  const nameOf = new Map(providers.map((p) => [p.id, p.name]));
  const rows = [];
  for (const [id, list] of Object.entries(monitor.history ?? {})) {
    for (const d of list) rows.push({ provider_id: id, provider_name: nameOf.get(id) ?? id, date: d.day, checks: d.checks, reachable: d.reachable });
  }
  rows.sort((a, b) => a.date.localeCompare(b.date) || a.provider_id.localeCompare(b.provider_id));
  const outDir = path.join(dist, 'data');
  fs.mkdirSync(outDir, { recursive: true });
  const csv = ['provider_id,provider_name,date,checks,reachable', ...rows.map((r) => `${r.provider_id},${r.provider_name},${r.date},${r.checks},${r.reachable}`)].join('\n') + '\n';
  fs.writeFileSync(path.join(outDir, 'guanwang-jiance.csv'), '﻿' + csv);
  fs.writeFileSync(
    path.join(outDir, 'guanwang-jiance.json'),
    JSON.stringify({ source: 'https://xtizi.com/jiance/', vantage: monitor.vantage, firstCheckedAt: monitor.firstCheckedAt, checkedAt: monitor.checkedAt, note: '只记录检测点当时能否收到机场官网入口的响应，不代表节点可用，也不代表中国大陆网络下的情况。', rows }, null, 1) + '\n',
  );
  console.log(`postbuild: wrote data/guanwang-jiance.csv/json (${rows.length} rows)`);
}
