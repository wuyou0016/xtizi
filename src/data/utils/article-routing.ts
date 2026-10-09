import type { CollectionEntry } from 'astro:content';

type ArticleType = CollectionEntry<'articles'>['data']['type'];

// Article 的 URL 前缀由 type 字段决定，全站统一从这里取值。
// 栏目与文章 slug 一律用拼音/英文关键词，一词一页，见 docs/keyword-registry.md。
export const articleBasePathByType: Record<ArticleType, string> = {
  zhinan: '/zhinan/',
  changjing: '/changjing/',
  xiazai: '/xiazai/',
  jiaocheng: '/jiaocheng/',
  paicha: '/paicha/',
  bikeng: '/bikeng/',
};

export const articleTypeLabel: Record<ArticleType, string> = {
  zhinan: '选购指南',
  changjing: '使用场景',
  xiazai: '梯子下载',
  jiaocheng: '使用教程',
  paicha: '故障排查',
  bikeng: '避坑指南',
};

export function getArticleHref(article: CollectionEntry<'articles'>): string {
  return `${articleBasePathByType[article.data.type]}${article.id}/`;
}
