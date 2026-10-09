// 读取各客户端官方 GitHub 仓库的最新发布版本，写入 src/data/live/releases.json。
// 数据全部来自 GitHub 公开 API，页面上显示的版本号、发布日期、核验时间都以此为准，不手写。
// 用法：node scripts/fetch-releases.mjs   （在 GitHub Actions 里会带 GITHUB_TOKEN 提高额度）
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const clients = JSON.parse(fs.readFileSync(path.join(root, 'src/data/live/clients.json'), 'utf8'));
const outFile = path.join(root, 'src/data/live/releases.json');
const prev = fs.existsSync(outFile) ? JSON.parse(fs.readFileSync(outFile, 'utf8')) : { items: {} };
const headers = { 'User-Agent': 'xtizi-release-check', Accept: 'application/vnd.github+json' };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

const items = { ...prev.items };
const now = new Date().toISOString();
for (const c of clients) {
  if (!c.repo) continue;
  try {
    const repoRes = await fetch(`https://api.github.com/repos/${c.repo}`, { headers });
    if (!repoRes.ok) throw new Error(`repo HTTP ${repoRes.status}`);
    const repo = await repoRes.json();
    let tag = null, publishedAt = null, url = null;
    const rel = await fetch(`https://api.github.com/repos/${repo.full_name}/releases/latest`, { headers });
    if (rel.ok) {
      const r = await rel.json();
      tag = r.tag_name; publishedAt = r.published_at; url = r.html_url;
    }
    items[c.slug] = {
      repo: repo.full_name,
      repoUrl: repo.html_url,
      releasesUrl: `${repo.html_url}/releases`,
      latestTag: tag,
      publishedAt,
      releaseUrl: url,
      archived: Boolean(repo.archived),
      license: repo.license?.spdx_id && repo.license.spdx_id !== 'NOASSERTION' ? repo.license.spdx_id : null,
      pushedAt: repo.pushed_at,
      checkedAt: now,
    };
    console.log(`${c.slug}: ${repo.full_name} ${tag ?? '(无正式发布)'} ${publishedAt ?? ''}${repo.archived ? ' [archived]' : ''}`);
  } catch (e) {
    console.log(`${c.slug}: 获取失败（${e.message}），保留上次记录`);
  }
}
fs.writeFileSync(outFile, JSON.stringify({ checkedAt: now, source: 'GitHub REST API', items }, null, 2) + '\n');
