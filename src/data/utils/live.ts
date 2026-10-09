// 自动采集的一手数据：客户端最新版本（GitHub 官方 API）与机场官网可访问性检测。
// 两份数据都由 scripts/ 下的脚本定时写入 src/data/live/，页面只读取、不加工成结论。
import clientsJson from '../live/clients.json';
import releasesJson from '../live/releases.json';
import monitorJson from '../live/monitor.json';

export type PlatformId = 'windows' | 'mac' | 'android' | 'iphone' | 'hongmeng' | 'linux' | 'luyouqi';

export const PLATFORM_LABEL: Record<PlatformId, string> = {
  windows: 'Windows',
  mac: 'macOS',
  android: '安卓',
  iphone: 'iPhone / iPad',
  hongmeng: '鸿蒙',
  linux: 'Linux',
  luyouqi: '路由器',
};

export const PLATFORM_ORDER: PlatformId[] = ['windows', 'mac', 'android', 'iphone', 'hongmeng', 'linux', 'luyouqi'];

export interface ClientInfo {
  slug: string;
  name: string;
  repo: string | null;
  store?: string;
  platforms: PlatformId[];
  kind: string;
  core: string;
}

export interface ReleaseInfo {
  repo: string;
  repoUrl: string;
  releasesUrl: string;
  latestTag: string | null;
  publishedAt: string | null;
  releaseUrl: string | null;
  archived: boolean;
  license: string | null;
  pushedAt: string | null;
  checkedAt: string;
}

export const CLIENTS = clientsJson as ClientInfo[];
const releases = releasesJson as { checkedAt: string; source: string; items: Record<string, ReleaseInfo> };
export const RELEASES_CHECKED_AT = releases.checkedAt;

export function getClient(slug: string): ClientInfo | undefined {
  return CLIENTS.find((client) => client.slug === slug);
}

export function getRelease(slug: string): ReleaseInfo | undefined {
  return releases.items[slug];
}

export function clientsForPlatform(platform: PlatformId): ClientInfo[] {
  return CLIENTS.filter((client) => client.platforms.includes(platform));
}

/** 客户端的官方获取地址：开源项目是 GitHub 发布页，商店应用是 App Store 页面。 */
export function officialUrl(client: ClientInfo): string {
  const release = getRelease(client.slug);
  return release?.releasesUrl ?? client.store ?? (client.repo ? `https://github.com/${client.repo}` : '#');
}

export const shortName = (client: ClientInfo) => client.name.replace(/（.*?）/g, '').trim();

export function fmtDate(value: string | Date | null | undefined): string {
  if (!value) return '—';
  const d = typeof value === 'string' ? new Date(value) : value;
  return d.toISOString().slice(0, 10);
}

export function fmtDateTime(value: string | Date | null | undefined): string {
  if (!value) return '—';
  const d = typeof value === 'string' ? new Date(value) : value;
  return `${d.toISOString().slice(0, 16).replace('T', ' ')} UTC`;
}

/** 两个时间之间相差的整天数（用于"距核验时已发布 N 天"，以数据核验时间为基准，不取构建时间）。 */
export function daysBetween(from: string | null | undefined, to: string): number | null {
  if (!from) return null;
  return Math.max(0, Math.floor((new Date(to).getTime() - new Date(from).getTime()) / 86400000));
}

// ---------------------------------------------------------------- 官网检测
export type MonitorState = 'up' | 'guarded' | 'error' | 'down';

export interface MonitorResult {
  id: string;
  host: string;
  state: MonitorState;
  status: number;
  ms: number;
  error?: string;
}

interface MonitorDay {
  day: string;
  checks: number;
  reachable: number;
}

const monitor = monitorJson as {
  checkedAt: string;
  firstCheckedAt: string;
  vantage: string;
  results: MonitorResult[];
  history: Record<string, MonitorDay[]>;
};

export const MONITOR = {
  checkedAt: monitor.checkedAt,
  firstCheckedAt: monitor.firstCheckedAt,
  vantage: monitor.vantage,
  results: monitor.results,
};

export const STATE_LABEL: Record<MonitorState, string> = {
  up: '可以打开',
  guarded: '有响应（拦截了自动请求）',
  error: '服务器报错',
  down: '没有响应',
};

export interface MonitorSummary {
  result: MonitorResult | undefined;
  checks: number;
  reachable: number;
  days: number;
  history: MonitorDay[];
}

export function monitorFor(providerId: string): MonitorSummary {
  const history = monitor.history[providerId] ?? [];
  return {
    result: monitor.results.find((r) => r.id === providerId),
    checks: history.reduce((sum, d) => sum + d.checks, 0),
    reachable: history.reduce((sum, d) => sum + d.reachable, 0),
    days: history.length,
    history,
  };
}
