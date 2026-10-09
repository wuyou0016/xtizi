// SEO 模块的类型约定。代码（seo-tags.ts、各页面、组件）可以复用，
// 可见文案（问答、标签介绍）由本站自己的 faq-data.ts / site-copy.ts / provider-faq.ts 提供，
// 必须是选梯子自己的文字，不能与其他站雷同。

export interface FaqItem {
  /** 所属板块 id（FAQ_CLUSTERS 里的 id） */
  cluster: string;
  q: string;
  /** 纯文本答案：页面可见文字 = FAQPage JSON-LD 文字 */
  a: string;
  /** 关联的关键词专题 slug（seo-tags.ts 的 TAG_STRUCT） */
  tags: string[];
}

export interface FaqCluster {
  id: string;
  title: string;
  intro: string;
}

export interface TagCopy {
  /** 专题名，会出现在标题、H1 和面包屑里，必须包含该专题的核心关键词 */
  name: string;
  /** 专题导航页卡片上的一句话（40 字以内） */
  blurb: string;
  /** 专题页开头的介绍段（70–130 字） */
  intro: string;
  /** 专题页第二段：选梯子对这个关键词的独有角度（90–170 字） */
  angle: string;
}
