// 全站基础配置。只放品牌/域名/语言等站点级事实，
// 不放具体文章 SEO、Provider 数据、榜单数据——那些属于内容/数据层。

export const siteConfig = {
  siteName: '选梯子',
  brandName: '选梯子',
  brandNameShort: '选梯子',
  brandNameEn: 'XuanTizi',
  url: 'https://xtizi.com',
  locale: 'zh-CN',
  language: 'zh-CN',

  // 定位：梯子选购指南站。把"买哪家机场、装哪个客户端、怎么配、出问题怎么查"拆成
  // 推荐榜（/tuijian/）、机场库（/jichang/）、梯子导航（/daohang/）、梯子下载（/xiazai/）、
  // 使用场景（/changjing/）、选购指南（/zhinan/）、教程（/jiaocheng/）、排查（/paicha/）、
  // 避坑（/bikeng/）和官网检测（/jiance/）十个栏目，每个搜索意图只分配一个主战页面
  // （见 docs/keyword-registry.md）。
  description:
    '选梯子：2026 梯子推荐与机场推荐导航站。整理性价比机场、便宜机场、专线机场的价格与线路资料，提供 Clash、V2Ray 等梯子工具下载与教程，按 ChatGPT、Claude、奈飞、Telegram、YouTube 场景讲清科学上网该怎么选。',

  defaultTitle: '选梯子｜2026 梯子推荐、机场推荐、梯子导航与性价比机场',
  defaultDescription:
    '选梯子：2026 梯子推荐与机场推荐导航站。整理性价比机场、便宜机场、专线机场的价格与线路资料，提供 Clash、V2Ray 等梯子工具下载与教程，按 ChatGPT、Claude、奈飞、Telegram、YouTube 场景讲清科学上网该怎么选。',

  defaultOgImage: '/images/og/default.png',

  author: {
    name: '选梯子编辑部',
  },
} as const;
