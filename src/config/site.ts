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
    '选梯子是梯子导航与选购资料站：整理 Clash、V2Ray 等梯子工具的官方下载入口和配置教程，收录机场的价格、线路与订阅方式资料，并按 ChatGPT、Claude、奈飞、Telegram、YouTube 等场景讲清梯子怎么选、连不上怎么查。',

  defaultTitle: '选梯子｜梯子导航、梯子下载与机场订阅教程',
  defaultDescription:
    '选梯子是梯子导航与选购资料站：整理 Clash、V2Ray 等梯子工具的官方下载入口和配置教程，收录机场的价格、线路与订阅方式资料，并按 ChatGPT、Claude、奈飞、Telegram、YouTube 等场景讲清梯子怎么选、连不上怎么查。',

  defaultOgImage: '/images/og/default.png',

  author: {
    name: '选梯子编辑部',
  },
} as const;
