---
type: xiazai
title: NekoBox 下载：安卓版官方地址与最新版本
description: "NekoBox 下载的官方渠道是 GitHub 上 MatsuriDayo 账号下的 NekoBoxForAndroid 仓库发布页。本页说明这款 sing-box 内核、协议面较广的安卓客户端适合谁、APK 怎么挑、怎么判断它是否仍在更新，以及 NekoBox 安卓版第一次打开的三件事。"
category: 客户端下载
primaryKeyword: NekoBox 下载
secondaryKeywords: [NekoBox, NekoBox 安卓, NekoBox for Android]
difficulty: beginner
publishedAt: 2026-10-08
updatedAt: 2026-10-09
answer: "NekoBox 是 sing-box 内核的安卓客户端，支持的协议面较广，适合手里有通用订阅、需要多种协议的安卓用户。官方渠道是 MatsuriDayo 账号下的 NekoBoxForAndroid 仓库，选用前请先对照数据卡里的发布日期判断更新是否活跃。"
limits:
  - 发布页里安装包的命名、分包方式，以及应用里各个菜单叫什么，都可能随版本变化，这里只讲共性，具体以官方发布页为准。
  - 仓库的维护状态会变化，是否仍在更新请以页面顶部数据卡的发布日期和仓库页面的状态提示为准。
  - 这里不比较各客户端谁更快：连接表现主要由你的订阅和线路决定，内核相同的客户端之间也拿不出可靠的测速对比。
sources:
  - title: NekoBox for Android 官方仓库
    url: https://github.com/MatsuriDayo/NekoBoxForAndroid
client: nekobox
rankBlock: overall
relatedTopics: [android, v2rayng, sing-box, anzhuo-tizi, dingyue-daoru, jichang-xieyi]
faqs:
  - q: NekoBox 和 NekoBox for Android 是同一个软件吗？
    a: "是同一个。NekoBox 是常用的简称，完整名字是 NekoBox for Android，只有安卓版本。需要小心的是，仓库名带 NekoBox 字样的第三方改版不止一个，核对时认准账号是 MatsuriDayo、仓库是 NekoBoxForAndroid，不要看到名字像就下载。"
  - q: NekoBox 现在还在更新吗？
    a: "这件事要亲自核实。先进入 MatsuriDayo 账号下的 NekoBoxForAndroid 仓库，看页面上有没有“已归档（Archived）”的标记，再看数据卡上的发布日期离今天多远。仓库归档，或者空档很长，就说明协议与内核可能已经落后，可以换同为 sing-box 内核的 Hiddify 一类客户端。"
  - q: NekoBox 和 v2rayNG 该选哪个？
    a: "取决于你的需求。两者都吃通用订阅，v2rayNG 用 Xray 内核，界面朴素，生态成熟；NekoBox 用 sing-box 内核，支持的协议面较广。如果机场用的协议只有 sing-box 内核支持，可以考虑 NekoBox，否则选更新更活跃、教程更多的那一款即可。"
  - q: NekoBox 可以导入什么格式的订阅？
    a: "通用订阅，也就是节点链接列表，通常可以导入；具体支持的格式以仓库说明和当前版本为准。机场只提供 Clash 格式订阅时，改用 Clash 系的安卓客户端更省事。硬要转换格式，就得把订阅链接交给转换工具，兼容性和隐私两头都要权衡。"
  - q: iPhone 上有 NekoBox 吗？
    a: "没有。NekoBox for Android 只面向安卓系统。苹果设备上想沿用 sing-box 内核，可以去看 sing-box 官方提供的苹果端应用，或者同样覆盖 iPhone 的 Hiddify。苹果设备的客户端要通过 App Store 获取，商店地区的问题见站内的外区 Apple ID 教程。"
---

NekoBox 下载要先看仓库，再看日期：官方仓库是 GitHub 上 MatsuriDayo 账号下的 NekoBoxForAndroid，选它之前最该核对的一项，是更新是否仍然活跃。顶部数据卡给出的只是发布记录，一款安卓客户端值不值得装，还得看下面几节：内核是什么，谁该用，APK 选哪个，以及怎么自己确认它没有停更。

## NekoBox 是什么：sing-box 内核、协议面较广的安卓客户端

NekoBox 的完整名字是 NekoBox for Android，只有安卓版本，内核是 sing-box。内核负责转发流量，NekoBox 负责把导入订阅、管理节点、设置路由这些操作做成界面。内核的背景见 [sing-box 下载](/xiazai/sing-box/)页，配置字段的含义可以查 [sing-box 官方文档](https://sing-box.sagernet.org/)。

它的特点是支持的协议面较广：主流的几种协议它都能处理，具体名单以仓库说明和当前版本为准。协议之间的差别，见[机场协议怎么选](/zhinan/jichang-xieyi/)。除此之外它还支持订阅分组、从剪贴板和扫码导入、路由规则以及分应用代理，菜单名称以当前版本为准。

软件本身开源免费，不带任何节点。

## 适合谁，不适合谁

**适合：**

- 机场提供通用订阅，手机是安卓系统，并且用到的协议偏新或偏冷门。
- 想用 sing-box 内核，但不想自己写 JSON 配置。
- 习惯订阅分组管理，节点多、需要整理的人。

**不适合：**

- iPhone 用户。它没有苹果设备的版本。
- 机场只给 Clash 订阅的人。手里的订阅属于另一套格式，换成原生支持 Clash 配置的安卓客户端，比先转换再导入省心。
- 非常在意持续更新的人。它的活跃度没有保证，装之前按后文的核对步骤自己看一眼。
- 手机是 HarmonyOS NEXT 的人。这条系统路线不直接兼容安卓 APK，思路得换，见[鸿蒙梯子下载](/xiazai/hongmeng/)。

## NekoBox 下载：在官方发布页挑对 APK

官方发布页是 [github.com/MatsuriDayo/NekoBoxForAndroid/releases](https://github.com/MatsuriDayo/NekoBoxForAndroid/releases)。NekoBox 的安装包会按处理器架构拆开，对着下面这张表选：

| 你的情况 | 下载哪个 APK | 备注 |
| --- | --- | --- |
| 不清楚处理器类型 | 通用包 | 体积大，但装错的概率小 |
| 手机买得比较近 | 带 arm64-v8a 的包 | 单架构包，体积更小 |
| 手机很旧 | 带 armeabi-v7a 的包 | 32 位设备才用得上 |
| 在电脑模拟器里跑 | 带 x86 字样的包 | 真机不要选 |

分包方式以发布页实际提供的为准，有的版本可能不拆分。发布页的其他标记也很直白：Latest 是正式版，Pre-release 是测试构建，Source code 压缩包是源码，不是安装包。

不确定自己手机架构的，先选通用包，再换成对应架构的包也不迟。

## 怎么确认是官方构建，以及它是否仍在更新

**确认来源。** 网上名字里带 NekoBox 的改版不止一个，所以来源比名字更重要。

- **账号和仓库**。账号是 MatsuriDayo，仓库是 NekoBoxForAndroid。账号换成别人，哪怕仓库名一模一样，也不是官方。
- **校验值**。发布页要是带了校验信息，就在电脑上算出 APK 的哈希来对照；安装包被改过会有什么后果、怎么识别，见[破解版梯子软件的风险](/bikeng/pojie-kehuduan/)。
- **权限**。NekoBox 只需要联网和 VPN 两类能力。弹出通讯录、短信，或者无障碍服务的授权框，等于在提醒你装错了包，该退出安装。
- **名字**。后缀里带“汉化增强”“去广告”“VIP”字样的，是别人二次打包的产物，与官方仓库没有关系。

**判断是否仍在更新。** 这是 NekoBox 下载前最值得花一分钟做的事。按顺序看：

1. 仓库顶部有没有已归档（Archived）的提示。
2. 数据卡里的发布日期若离今天已经很远，就按停更处理。
3. 看议题区是否还有维护者回复，未解决的问题是否越积越多。

停更不等于立刻失灵，麻烦出在后面：机场一旦启用新协议，你手里的客户端可能就认不出来了。遇到这种情况，同为 sing-box 内核的 [Hiddify](/xiazai/hiddify/) 是一个常见的替代，订阅可以直接沿用。

## 装好 NekoBox 之后，先做这三步

1. **导入订阅。** NekoBox 以分组管理节点：新建分组，填入机场给的订阅链接，更新一次，节点就进了列表。入口名称可能因版本而异，通用的导入做法见[订阅链接怎么用](/jiaocheng/dingyue-daoru/)。
2. **选节点并连接。** 点中某个节点再按连接，系统会跳出建立 VPN 连接的授权提示，点同意即可，安卓上所有代理类 App 都要走这一步。
3. **配置路由并验证。** 在设置里找到路由规则，选择让国内网站直连的预设；需要的话，再设置分应用代理，让国内 App 不经过节点，改动后重新连接。最后验证：用浏览器访问一个必须走代理的站点，再切到国内 App 看看是否还正常，两头都没问题，路由才算配好。

如果导入后节点全部超时，先看订阅链接是否过期、系统时间是否准确，再对照[节点超时怎么办](/paicha/jiedian-chaoshi/)逐项排查。

## NekoBox 和其他安卓客户端比，差在哪

| 客户端 | 内核 | 订阅与配置特点 | 取舍 |
| --- | --- | --- | --- |
| NekoBox for Android | sing-box | 通用订阅与分组管理，协议面较广 | 先核对更新状态 |
| v2rayNG | Xray | 通用订阅，界面朴素，教程多 | 稳妥的常规选择 |
| sing-box 官方客户端 | sing-box | 配置为 JSON，控制力强 | 门槛较高 |
| Hiddify | sing-box | 一键导入，设置少 | 细调空间小 |
| Clash Meta for Android | Mihomo | 吃 Clash 订阅，策略组完整 | 机场需要提供 Clash 订阅 |

NekoBox、sing-box 官方客户端和 Hiddify 用的是同一个内核，v2rayNG 则用 Xray 内核。具体取舍的顺序是：订阅格式，其次协议支持，界面习惯排在最后；换一款软件并不会换来更好的线路。整个安卓阵营的横向对照在[安卓梯子下载](/xiazai/android/)，和 Xray 内核的 v2rayNG 逐项比较，则去 [v2rayNG 下载](/xiazai/v2rayng/)。

## 下一步

- **NekoBox 下载前**：先花一分钟核对发布日期和仓库状态，更新不活跃就换同内核的客户端。
- **已经装好**：先导入订阅，再按上面的三步验证；整体的安装思路读[安卓梯子怎么用](/zhinan/anzhuo-tizi/)。
- **还没有订阅**：先去[机场推荐](/tuijian/)翻榜单，留意套餐是否附带通用订阅链接；拿不定主意，就让[选梯子向导](/gongju/xuan-tizi-xiangdao/)按用途筛一遍。
