// 生成默认分享图 public/images/og/default.png（1200×630）：node scripts/generate-og.mjs
import sharp from 'sharp';
import { readFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(dir, '..', 'public');
mkdirSync(path.join(publicDir, 'images/og'), { recursive: true });
const logo = readFileSync(path.join(publicDir, 'favicon.svg'), 'utf8').replace(/<svg[^>]*>/, '').replace('</svg>', '').replace(/xz-/g, 'lg-');
const font = 'PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, sans-serif';

// 等距立体柱：x 为左下角，h 为高度
function bar(x, h, top, left, right, label) {
  const y = 520 - h;
  const w = 68;
  const d = 28;
  return `
    <polygon points="${x},${y} ${x + w},${y} ${x + w + d},${y - d * 0.6} ${x + d},${y - d * 0.6}" fill="${top}"/>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${left}"/>
    <polygon points="${x + w},${y} ${x + w + d},${y - d * 0.6} ${x + w + d},${520 - d * 0.6} ${x + w},520" fill="${right}"/>
    <text x="${x + w / 2}" y="${y + 44}" text-anchor="middle" font-size="38" font-weight="900" fill="#ffffff" font-family="SF Mono, Menlo, monospace">${label}</text>`;
}
// 每个栏目一张分享图：标题与副标题不同，立体阶梯与配色一致。
const SECTIONS = {
  default: ['2026 梯子推荐与机场推荐导航', '性价比机场 · 便宜机场 · 梯子下载 · Clash · V2Ray', 'ChatGPT · Claude · 奈飞 · Telegram · YouTube'],
  tuijian: ['机场推荐榜', '28 家机场的价格、流量、线路一张表对照', '性价比 · 便宜 · 专线 · 月付 · 大流量 · 稳定'],
  jichang: ['机场大全', '每家机场一页：价格、线路、协议、节点地区', '资料逐项标来源，缺的栏位如实写出'],
  xiazai: ['梯子下载', 'Clash、V2Ray、sing-box 等客户端的官方地址', '版本号与发布日期，由官方接口核验'],
  changjing: ['梯子使用场景', 'ChatGPT · Claude · Gemini · 奈飞 · YouTube', 'Telegram · 推特 · Discord · GitHub · Steam'],
  zhinan: ['梯子选购指南', '梯子是什么 · 机场怎么选 · 梯子多少钱', 'VPN 机场 · Clash · V2Ray · 科学上网'],
  jiaocheng: ['梯子使用教程', '订阅导入 · 系统代理 · TUN 模式 · 分流规则', 'Clash · v2rayN · 小火箭 · sing-box'],
  paicha: ['梯子故障排查', '连不上 · 速度慢 · 订阅更新失败 · 打不开', '按现象找原因，由易到难一步步排'],
  bikeng: ['机场避坑指南', '跑路前兆 · 永久套餐 · 假官网 · 订阅泄露', '只讲你自己看得见的信号'],
  jiance: ['机场官网检测', '28 家机场官网现在能不能打开', '定时检测，区分被墙还是停运'],
  duibi: ['机场对比', '两家机场逐项对照价格、流量、线路', '资料里查得到的，才放进表里'],
  gongju: ['选梯子工具箱', '选梯子向导 · 流量计算器 · 成本计算器', '客户端选择器 · 下单前核对清单'],
  cidian: ['梯子术语库', 'IPLC · TUN · 流量倍率 · 原生 IP · 订阅', '一句话定义，加上怎么判断'],
};
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');
for (const [key, [headline, line1, line2]] of Object.entries(SECTIONS)) {
  const hSize = headline.length > 11 ? 42 : 46;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0b1233"/><stop offset="1" stop-color="#050816"/></linearGradient>
    <radialGradient id="g1" cx="0.15" cy="0" r="0.8"><stop stop-color="#6b96ff" stop-opacity=".45"/><stop offset="1" stop-color="#6b96ff" stop-opacity="0"/></radialGradient>
    <radialGradient id="g2" cx="0.95" cy="0.1" r="0.7"><stop stop-color="#a78bfa" stop-opacity=".4"/><stop offset="1" stop-color="#a78bfa" stop-opacity="0"/></radialGradient>
    <linearGradient id="tt" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#7ea4ff"/><stop offset=".55" stop-color="#22d3ee"/><stop offset="1" stop-color="#a78bfa"/></linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#6b96ff" stroke-opacity=".12" stroke-width="1"/></pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#g1)"/>
  <rect width="1200" height="630" fill="url(#g2)"/>
  <g transform="translate(70,64) scale(1.9)">${logo}</g>
  <text x="212" y="150" font-size="96" font-weight="900" fill="url(#tt)" font-family="${font}">选梯子</text>
  <text x="74" y="262" font-size="${hSize + 6}" font-weight="800" fill="#e9edff" font-family="${font}">${esc(headline)}</text>
  <text x="74" y="326" font-size="28" font-weight="600" fill="#a3afd6" font-family="${font}">${esc(line1)}</text>
  <text x="74" y="374" font-size="28" font-weight="600" fill="#a3afd6" font-family="${font}">${esc(line2)}</text>
  <rect x="74" y="446" width="280" height="64" rx="18" fill="#141d42" stroke="#6b96ff" stroke-opacity=".6" stroke-width="2"/>
  <text x="214" y="489" text-anchor="middle" font-size="30" font-weight="800" fill="#22d3ee" font-family="SF Mono, Menlo, monospace">xtizi.com</text>
  ${bar(790, 330, '#fff1b8', '#ffbf3c', '#d9730d', '1')}
  ${bar(858, 264, '#a8c1ff', '#5b8cff', '#2643b8', '2')}
  ${bar(926, 204, '#8be9fb', '#22b8d8', '#0b6c8a', '3')}
  ${bar(994, 152, '#cdbdff', '#8f73f2', '#4a2fb0', '4')}
  ${bar(1062, 106, '#a5b1e6', '#5a6bb5', '#2b356e', '5')}
  <rect x="760" y="520" width="400" height="3" fill="#6b96ff" fill-opacity=".5"/>
</svg>`;
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true, quality: 92, effort: 10 }).toFile(path.join(publicDir, 'images/og', `${key}.png`));
}
console.log('og generated:', Object.keys(SECTIONS).length);
