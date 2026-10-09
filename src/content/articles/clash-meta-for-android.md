---
type: xiazai
title: Clash Meta for Android 下载：官方地址与版本
description: "Clash Meta for Android 下载只认 GitHub 上 MetaCubeX 组织名下的 ClashMetaForAndroid 仓库。本页说明这款 mihomo 内核的 Clash 安卓客户端（CMFA）适合谁、APK 怎么挑、怎么判断仓库是否仍在更新，以及第一次打开的三件事。"
category: 客户端下载
primaryKeyword: Clash Meta for Android 下载
secondaryKeywords: [Clash 安卓下载, CMFA, Clash Meta 安卓]
difficulty: beginner
publishedAt: 2026-10-08
updatedAt: 2026-10-09
answer: "Clash Meta for Android 常简称 CMFA，是 mihomo 内核的 Clash 系安卓客户端，适合手里有 Clash 订阅的安卓用户。官方渠道是 MetaCubeX 组织下的 ClashMetaForAndroid 仓库发布页，版本与日期见页面顶部数据卡。"
limits:
  - APK 的文件名、架构分包方式和应用内菜单名会随版本调整，本页只描述特征，以官方发布页为准。
  - 仓库是否仍在活跃维护会变化，请以页面顶部数据卡的发布日期和仓库页面的状态提示为准。
  - 本页不评价任何客户端的速度，同内核的客户端之间没有可比的测速结论。
sources:
  - title: Clash Meta for Android 官方仓库
    url: https://github.com/MetaCubeX/ClashMetaForAndroid
  - title: Mihomo（Clash Meta）文档
    url: https://wiki.metacubex.one/
client: clash-meta-for-android
rankBlock: clash
relatedTopics: [clash-meta-android, android, flclash, clash-shi-shenme, clash-jichang, dingyue-zhuanhuan]
faqs:
  - q: CMFA 是什么意思，和 Clash Meta for Android 是同一个吗？
    a: "是同一个。CMFA 是 Clash Meta for Android 的常用简称，指的是 MetaCubeX 组织维护的这款安卓客户端。搜索 Clash 安卓下载时看到的 CMFA，通常就是它。核对时认准发布仓库的组织名是 MetaCubeX、仓库名是 ClashMetaForAndroid。"
  - q: Clash Meta for Android 现在还在更新吗？
    a: "别凭印象回答，自己去查。进入 MetaCubeX 名下的 ClashMetaForAndroid 仓库，先找有没有“已归档（Archived）”的标记，再拿顶部数据卡上的发布日期跟今天比一比。仓库已归档，或者很久没有新发布，就把它当作停更，改用同为 mihomo 内核的其他安卓客户端，例如 FlClash。"
  - q: 它能导入通用订阅吗？
    a: "它主要处理 Clash 格式的配置，也就是机场提供的 Clash 订阅链接。机场只给通用订阅时，要么先转换格式，要么换一款吃通用订阅的客户端。转换意味着把订阅链接交给第三方工具，兼容性和泄露风险都得自己权衡。判断机场是否提供 Clash 订阅，可以看站内的 Clash 机场选购文章。"
  - q: Clash Meta for Android 要付费吗？
    a: "不需要。这是一个开源项目，官方发布页上的 APK 免费取得，授权协议写在顶部数据卡里。真正需要付费的是机场订阅，客户端里并没有内置节点。哪个页面标价出售 APK、激活码或“会员”，就可以直接判定不是官方来源。"
  - q: 想让部分 App 不走代理，该怎么设置？
    a: "在应用内的访问控制相关设置里选择模式，可以只让选中的 App 走代理，也可以让选中的 App 不走代理，具体名称以当前版本界面为准。改动之后需要重新启动连接才会生效。国内 App 不走代理，既省套餐流量，也能减少误判。"
---

Clash Meta for Android 下载只认一个来源：GitHub 上 MetaCubeX 组织名下的 ClashMetaForAndroid 仓库。搜“Clash 安卓下载”时，应用市场和下载站里同名、近名的软件很多，有的早已停更，有的被改过包，所以先把来源认准，再谈装哪个文件。至于它现在还有没有人维护、安卓上该拿哪个包，这两件数据卡回答不了的事，下面分开讲。

## Clash Meta for Android 是什么：mihomo 内核的 Clash 安卓客户端

它常被简称为 CMFA，是一款安卓上的 Clash 系图形客户端，内核是 mihomo（早期叫 Clash Meta）。名字里保留了 Meta，是沿用旧称。mihomo 是目前仍在维护的 Clash 内核，原版 Clash 内核的仓库已经删除停更，来龙去脉见 [Clash 是什么](/zhinan/clash-shi-shenme/)。内核的配置项含义可以查 [Mihomo（Clash Meta）文档](https://wiki.metacubex.one/)。

软件本身开源免费，不带任何节点。它能做的事包括：管理订阅配置、切换策略组和节点、查看日志、按应用决定是否走代理。真正处理流量的是内核，客户端负责把这些操作做成界面。界面菜单名称以当前版本为准。

需要提醒的是，选这款软件之前先看看它的维护状态，本页后面有判断方法。

## 适合谁，不适合谁

**适合：**

- 机场提供 Clash 订阅，手机是安卓系统。
- 想要规则分流和策略组，让国内网站直连、国外网站走代理。
- 已经在电脑上用 Clash 系客户端，想让手机用同一套订阅和习惯。

**不适合：**

- 机场只给通用订阅的人。这种情况看 [v2rayNG 下载](/xiazai/v2rayng/)页介绍的客户端，或先了解[订阅转换](/jiaocheng/dingyue-zhuanhuan/)的做法与风险。
- iPhone 用户。苹果设备需要走 App Store，见 [iPhone 梯子下载](/xiazai/iphone/)。
- 手机跑的是 HarmonyOS NEXT 的人。这条系统路线不能直接安装安卓 APK，替代办法见[鸿蒙梯子下载](/xiazai/hongmeng/)。
- 在意长期更新节奏、又不想自己判断仓库状态的人。这类用户可以直接考虑同内核的 FlClash。

## Clash 安卓下载：在官方发布页挑对 APK

官方发布页是 [github.com/MetaCubeX/ClashMetaForAndroid/releases](https://github.com/MetaCubeX/ClashMetaForAndroid/releases)。Assets 列表里通常有多个 APK，区别主要在处理器架构：

| 发布页上的文件 | 它是什么 | 什么时候选 |
| --- | --- | --- |
| 文件名带 arm64-v8a | 只含 64 位 ARM 代码的单架构包 | 已确认手机属于这种处理器，想要体积小的 |
| 文件名带 armeabi-v7a | 只含 32 位 ARM 代码的单架构包 | 仅限较早的设备 |
| 文件名带 x86 或 x86_64 | 为模拟器和个别平板准备的包 | 手机基本用不上 |
| 文件名带 universal | 多种架构合在一起的通用包 | 拿不准时的保底选择，代价是体积更大 |

架构字样之外，文件名里还可能有区分构建类型的字样，具体含义以发布页的说明为准。发布页上标着 Latest 的是正式发布，标着 Pre-release 的是测试构建，想少踩坑就别选后者。

## Clash Meta for Android 下载后，怎么确认是官方构建、是否仍在更新

**来源**

- **组织名**。仓库属于 MetaCubeX 这个组织，不是某个个人账号。仓库名是 ClashMetaForAndroid，字母和大小写都对得上。
- **校验值**。判断一个安装包有没有被动过手脚，通用思路写在[破解版梯子软件的风险](/bikeng/pojie-kehuduan/)里；这个仓库的发布页若附了校验信息，就把 APK 传到电脑上算一遍再对照。
- **名字**。应用市场里叫“Clash 安卓版”“Clash 汉化版”的包，没法追溯到这个仓库，这类名字本身就是警示信号。官方版本的界面语言可以在设置里调整。
- **权限**。安装和首次启动时，它只该向系统申请 VPN 连接这一项授权；一旦多出通讯录、短信或无障碍服务的请求，基本可以认定包被改过，拒绝并卸载。

**维护状态**

仓库有没有人照看，会随时间改变，选 Clash Meta for Android 之前自己顺着下面几步查一遍：

1. 打开仓库页面，看顶部有没有已归档（Archived）的提示。
2. 拿数据卡上的发布日期和今天比一比，间隔很长就当它已经停更。
3. 看仓库的议题区是否还有维护者回复。

停更并不等于马上失灵，代价是 mihomo 内核的新特性和新协议跟不上。遇到这种情况，同为 mihomo 内核的 [FlClash](/xiazai/flclash/)是一个常见的替代，订阅可以直接沿用。

## 初次打开 Clash Meta for Android：先完成三件事

1. **导入订阅。** 到配置页面，新建配置并选择从链接导入，粘贴机场后台复制的 Clash 订阅链接，保存后选中这份配置。通用做法见[订阅链接怎么用](/jiaocheng/dingyue-daoru/)，完整步骤见 [Clash Meta for Android 使用教程](/jiaocheng/clash-meta-android/)。
2. **启动并允许 VPN。** 点击启动，系统会弹出添加 VPN 连接的确认框，同意即可，这是安卓对代理类 App 的统一要求。回到代理页，在主策略组里挑一个节点，嫌麻烦就让它保持自动选择。
3. **设置访问控制并验证。** 在设置里找到访问控制相关选项，让国内 App 不走代理，改动后重新连接。最后分别打开一个需要代理的网页和一个国内 App，两边都打得开，访问控制才算设对。

规则、全局、直连三种模式的差别，见 [Clash 规则模式](/jiaocheng/guize-quanju-zhilian/)。部分安卓系统会在后台清理耗电应用，导致连接中断，可以在系统设置里把它加入不受电池优化限制的名单，位置因厂商而异。

## 和同类安卓客户端的区别

| 客户端 | 内核 | 支持系统 | 订阅与配置特点 | 更适合谁 |
| --- | --- | --- | --- | --- |
| Clash Meta for Android | Mihomo | 安卓 | 吃 Clash 订阅，策略组与规则完整 | 机场给 Clash 订阅的安卓用户 |
| FlClash | Mihomo | 安卓、Windows、macOS、Linux | 界面简洁，多端同一套 | 想让手机和电脑用同一款的人 |
| v2rayNG | Xray | 安卓 | 吃通用订阅，分应用代理 | 机场给通用订阅的人 |
| NekoBox for Android | sing-box | 安卓 | 支持的协议面较广 | 需要更多协议的人 |
| Hiddify | sing-box | 多平台 | 一键导入，设置少 | 想要省事的新手 |

前两款用的是同一个内核。同一份 Clash 订阅换到 FlClash 里，策略组和规则的解析方式不变，两者的差别只在界面和操作习惯上。所以在它们之间选，看的是操作习惯和维护状态，没有必要为了“更快”而换。想把安卓上的所有客户端放在一起比较，去[安卓梯子下载](/xiazai/android/)页。

## 下一步

- **Clash Meta for Android 下载完成后**：按 [Clash Meta for Android 使用教程](/jiaocheng/clash-meta-android/)走一遍，从导入配置到规则设置。
- **还没有订阅**：到[机场推荐](/tuijian/)看榜单数据，确认套餐提供 Clash 订阅，判断方法见 [Clash 机场怎么选](/zhinan/clash-jichang/)。
- **发现仓库更新不活跃**：回到上面的对照表，换成 FlClash 一类同内核的客户端。
- **想先弄清安卓上整体怎么装**：读[安卓梯子怎么用](/zhinan/anzhuo-tizi/)。
