import { defineCollection, reference, z } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { withProviderRefCheck } from './data/utils/with-provider-ref-check.js';

// ---------------------------------------------------------------------------
// 共享子 Schema
// ---------------------------------------------------------------------------

// 见 Content & Data Architecture v1.0 第 5 节：来源必须分组标注，
// 不允许把厂商信息 / 本站测试 / 第三方资料 / 编辑观点混成一个事实。
const sourceMetaSchema = z.object({
  type: z.enum(['vendor', 'in-house', 'third-party', 'editorial']),
  sourceUrl: z.url().optional(),
  retrievedAt: z.coerce.date(),
  publishedAt: z.coerce.date().optional(),
  verifiedAt: z.coerce.date().optional(),
  claim: z.string(),
  evidence: z.string().optional(),
});

const pricingPlanSchema = z.object({
  name: z.string(),
  price: z.string(),
  billingCycle: z.string().optional(),
  trafficQuota: z.string().optional(),
});

const thirdPartyNoteSchema = z.object({
  source: z.string(),
  sourceUrl: z.url().optional(),
  claim: z.string(),
  date: z.coerce.date(),
});

// ---------------------------------------------------------------------------
// providers（Data Collection）
// ---------------------------------------------------------------------------

const providerSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  aliases: z.array(z.string()).optional(),
  status: z.enum(['active', 'inactive', 'discontinued', 'watch']),
  vendor: z.object({
    officialWebsite: z.url(),
    description: z.string(),
    pricing: z.array(pricingPlanSchema).optional(),
    traffic: z.string().optional(),
    devices: z.number().optional(),
    protocols: z.array(z.string()).optional(),
    routes: z.array(z.string()).optional(),
    regions: z.array(z.string()).optional(),
    clientSupport: z.array(z.string()).optional(),
    support: z.array(z.string()).optional(),
    source: sourceMetaSchema,
  }),
  thirdPartyNotes: z.array(thirdPartyNoteSchema).optional(),
  editorial: z.object({
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    suitableFor: z.array(z.string()),
    notSuitableFor: z.array(z.string()),
    summary: z.string(),
    source: sourceMetaSchema,
  }),
  lastVerified: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

const providers = defineCollection({
  loader: file('src/data/providers/providers.json'),
  schema: providerSchema,
});

// ---------------------------------------------------------------------------
// tests（Data Collection，TestRecord，独立于 Provider，通过 providerId 关联）
// ---------------------------------------------------------------------------

const testEnvironmentSchema = z.object({
  location: z.string(),
  network: z.string(),
  client: z.string(),
  protocol: z.string(),
});

const streamingResultSchema = z.object({
  platform: z.string(),
  unlocked: z.boolean(),
  notes: z.string().optional(),
});

const aiServiceResultSchema = z.object({
  service: z.string(),
  accessible: z.boolean(),
  notes: z.string().optional(),
});

const testRecordSchema = z.object({
  id: z.string(),
  providerId: reference('providers'),
  date: z.coerce.date(),
  methodology: z.string(),
  environment: testEnvironmentSchema,
  // results 全部 optional：不强制每次测试覆盖所有指标，不得为凑 Schema 造假数据。
  results: z
    .object({
      downloadMbps: z.number().optional(),
      uploadMbps: z.number().optional(),
      latencyMs: z.number().optional(),
      packetLossPercent: z.number().optional(),
      stabilityScore: z.number().optional(),
      streaming: z.array(streamingResultSchema).optional(),
      aiServicesAccess: z.array(aiServiceResultSchema).optional(),
    })
    .optional(),
  tester: z.string().optional(),
  notes: z.string().optional(),
});

const tests = defineCollection({
  loader: withProviderRefCheck(file('src/data/tests/tests.json'), (data) => [data.providerId]),
  schema: testRecordSchema,
});

// ---------------------------------------------------------------------------
// board（选梯子推荐榜：推荐档定义 + 每家品牌的名次、档位与一句话理由）
// ---------------------------------------------------------------------------

const tierSchema = z.object({
  id: z.string(),
  label: z.string(),
  tagline: z.string(),
  rule: z.string(),
});

const boardEntrySchema = z.object({
  providerId: reference('providers'),
  tier: z.string(),
  rank: z.number().int().min(1),
  reason: z.string(),
});

const boardSchema = z.object({
  title: z.string(),
  description: z.string(),
  methodology: z.string(),
  snapshotAt: z.coerce.date(),
  tiers: z.array(tierSchema),
  entries: z.array(boardEntrySchema),
});

const board = defineCollection({
  loader: withProviderRefCheck(file('src/data/board/board.json'), (data) => {
    const entries = (data.entries as Array<{ providerId: unknown }>) ?? [];
    return entries.map((entry) => entry.providerId);
  }),
  schema: boardSchema,
});

// ---------------------------------------------------------------------------
// articles（Content Collection：按 type 分栏目路由，见 data/utils/article-routing.ts）
// ---------------------------------------------------------------------------

const faqPairSchema = z.object({ q: z.string(), a: z.string() });

export const ARTICLE_TYPES = ['zhinan', 'changjing', 'xiazai', 'jiaocheng', 'paicha', 'bikeng'] as const;
export const PLATFORMS = ['windows', 'mac', 'android', 'iphone', 'hongmeng', 'linux', 'luyouqi'] as const;
export const RANK_BLOCKS = ['overall', 'value', 'cheap', 'dedicated', 'monthly', 'traffic', 'clash', 'overseas', 'none'] as const;

const articleSchema = z.object({
  // 栏目：选购指南 / 使用场景 / 梯子下载 / 使用教程 / 故障排查 / 避坑指南（路由见 data/utils/article-routing.ts）
  type: z.enum(ARTICLE_TYPES),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  // 一词一页：每篇文章登记 1 个主关键词（见 docs/keyword-registry.md）。
  primaryKeyword: z.string(),
  secondaryKeywords: z.array(z.string()).max(5).optional(),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  author: z.string().optional(),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  // 一句话结论：页面顶部"先说结论"框，同时进 Article JSON-LD 的 abstract。
  answer: z.string(),
  // 本文没有覆盖 / 不能替你判断的事：页面底部"这篇没有覆盖的"清单。
  limits: z.array(z.string()).max(5).optional(),
  // 本文引用的官方来源：只能来自 docs/sources.json 白名单（校验脚本会查）。
  sources: z.array(z.object({ title: z.string(), url: z.url() })).max(6).optional(),
  // 下载页 / 教程页对应的客户端（src/data/live/clients.json 的 slug）与平台。
  client: z.string().optional(),
  platform: z.enum(PLATFORMS).optional(),
  // 文末"资料里……的机场"数据块：由页面按 providers 真实字段筛选生成，
  // 不在正文里手写品牌结论。none = 不显示。
  rankBlock: z.enum(RANK_BLOCKS).default('none'),
  rankBlockHeading: z.string().optional(),
  relatedTopics: z.array(z.string()).optional(),
  // 本文自己的常见问题：页面可见文字 = FAQPage JSON-LD 文字（纯文本）。
  faqs: z.array(faqPairSchema).max(8).optional(),
  symptom: z.string().optional(),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: articleSchema,
});

// ---------------------------------------------------------------------------
// glossary（Content Collection）
// ---------------------------------------------------------------------------

const glossarySchema = z.object({
  term: z.string(),
  definition: z.string(),
  extendedExplanation: z.string().optional(),
  aliases: z.array(z.string()).optional(),
  relatedTerms: z.array(z.string()).optional(),
  relatedArticles: z.array(z.string()).optional(),
  updatedAt: z.coerce.date(),
});

const glossary = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/glossary' }),
  schema: glossarySchema,
});

export const collections = {
  providers,
  tests,
  board,
  articles,
  glossary,
};
