---
type: xiazai
title: v2rayNG 下载：安卓版官方地址与最新版本
description: "v2rayNG 下载要先分清装哪个文件、从哪里装：官方渠道是 GitHub 上 2dust 名下的 v2rayNG 仓库发布页。本页说明这款 Xray 内核的安卓客户端适合谁、APK 按处理器架构怎么挑、怎么核对官方构建，以及第一次打开的三件事。"
category: 客户端下载
primaryKeyword: v2rayNG 下载
secondaryKeywords: [v2rayNG, v2rayNG 安卓, V2Ray 安卓下载]
difficulty: beginner
publishedAt: 2026-10-08
updatedAt: 2026-10-09
answer: "v2rayNG 是 Xray 内核的安卓客户端，支持分应用代理，适合手里有通用订阅的安卓用户。官方渠道是 GitHub 上 2dust 账号下 v2rayNG 仓库的发布页，APK 要按手机处理器架构选，版本与日期见页面顶部数据卡。"
limits:
  - APK 的文件名、架构分包方式和应用内菜单名会随版本调整，本页只描述特征，以官方发布页为准。
  - 是否在应用商店上架、不同商店地区能否下载，以官方仓库说明和商店页面为准，本页不作判断。
  - 本页不评价任何客户端的速度，连接效果取决于你的订阅和线路，不取决于客户端。
sources:
  - title: v2rayNG 官方仓库
    url: https://github.com/2dust/v2rayNG
  - title: Project X（Xray）文档
    url: https://xtls.github.io/
  - title: Android 开发者文档：VpnService
    url: https://developer.android.com/reference/android/net/VpnService
client: v2rayng
rankBlock: overall
relatedTopics: [v2rayng-android, android, v2rayn, anzhuo-tizi, dingyue-daoru, celue-zu]
faqs:
  - q: v2rayNG 和 v2rayN 是同一个软件吗？
    a: "不是。v2rayN 是面向电脑的图形客户端，v2rayNG 是面向安卓手机的客户端，两者分别在各自的仓库发布，安装包也不通用。名字相近是因为同一位作者维护，所以电脑上的订阅和节点思路可以沿用，但软件需要分别下载。"
  - q: 手机该选哪个 APK 文件？
    a: "发布页里的 APK 往往不止一个，文件名中的 arm64-v8a、armeabi-v7a、x86 这些字样，就是在区分处理器架构。多数新手机属于 64 位 ARM，对应 arm64-v8a，但这取决于你的设备。拿不准时，选发布页提供的通用包，体积会大一些，但不容易装错。"
  - q: 能让部分 App 走代理，其他 App 直连吗？
    a: "可以，这是 v2rayNG 的分应用代理功能。你可以指定哪些 App 走代理，或者反过来指定哪些 App 不走代理。这样国内应用不必经过节点，既省流量，也减少异常。设置入口的名称以当前版本为准。注意改动后需要重新连接才会生效。"
  - q: v2rayNG 要付费吗？
    a: "不需要。2dust 仓库的发布页上就能免费取得 APK，授权协议写在数据卡里。节点并不在软件里，要买的是机场订阅。哪个页面要你先付钱才给下载链接，或者卖激活码，就可以判定不是官方来源，不要付款。"
  - q: 导入订阅后节点全部超时，先查什么？
    a: "先排除本地原因：确认手机网络正常、系统时间准确、订阅链接没有过期。再确认复制的是通用订阅链接，格式与客户端匹配。如果只有部分节点超时，多半是个别线路的问题。逐项排查的方法见站内的节点超时排查文章。"
---

安卓上做 v2rayNG 下载，要先分清两件事：从哪里装，和装哪个文件。来源只认 GitHub 上 2dust 账号下的 v2rayNG 仓库发布页；文件要看手机的处理器架构，因为发布页上的 APK 往往不止一个。顶部数据卡负责展示发布信息，下面回答它回答不了的问题：这款客户端合不合你的需求，发布页那一排 APK 到底拿哪一个。

## v2rayNG 是什么：Xray 内核的安卓客户端

v2rayNG 是一款安卓客户端，内核是 Xray，由 v2rayN 的作者维护。它通过 Android 提供的 VPN 服务接口接管手机的网络流量，再交给内核转发，接口的工作方式见 [Android 开发者文档：VpnService](https://developer.android.com/reference/android/net/VpnService)。内核的配置项含义可以查 [Project X（Xray）文档](https://xtls.github.io/)。

它的几个特点：

- 支持导入订阅链接，也支持扫码、从剪贴板导入单个节点。
- 支持分应用代理，可以指定哪些 App 走代理。
- 自带路由设置，可以让国内网站直连。
- 软件本身开源免费，不带任何节点。

如果你是电脑和手机都要用，电脑上对应的是 [v2rayN 下载](/xiazai/v2rayn/)页介绍的桌面客户端。

## 适合谁，不适合谁

**适合：**

- 机场提供通用订阅链接，手机是安卓系统。
- 想用分应用代理，只让部分 App 走节点。
- 愿意看一眼设置，对界面朴素没有意见。
- 电脑上已经在用 v2rayN，想沿用同一套思路。

**不适合：**

- iPhone 用户。苹果设备需要走 App Store 获取客户端，见 [iPhone 梯子下载](/xiazai/iphone/)。
- 用 HarmonyOS NEXT 的人。更早的 HarmonyOS 还能运行安卓应用，NEXT 这条线不直接兼容 APK，先读[鸿蒙梯子下载](/xiazai/hongmeng/)再决定。
- 机场只提供 Clash 格式订阅的人。v2rayNG 面向的是节点链接式的通用订阅，Clash 配置交给 Clash 系的安卓客户端更对路。
- 想要“一键导入、几乎不用设置”的新手。这类需求可以对照下表里的其他客户端。

## v2rayNG 下载：在官方发布页挑对 APK

官方发布页是 [github.com/2dust/v2rayNG/releases](https://github.com/2dust/v2rayNG/releases)。Assets 列表里通常有多个 APK，区别在于适配的处理器架构：

| Assets 里的条目 | 能直接安装吗 | 该怎么处理 |
| --- | --- | --- |
| 带 arm64-v8a 的 APK | 能 | 手机是 64 位 ARM 时的首选，单架构体积小 |
| 带 armeabi-v7a 的 APK | 能 | 留给较早的 32 位设备，或系统限定为 32 位的设备 |
| 带 x86 或 x86_64 的 APK | 能，但只对应特定设备 | 模拟器和少数平板才用得上 |
| 带 universal 的 APK | 能 | 不确定架构时的保底，体积更大 |
| Source code 压缩包 | 不能 | 这是源代码，不是安装包 |

不知道自己手机的架构，可以先选通用包；已经知道是 64 位 ARM 的，选 arm64-v8a 即可。也可以在系统设置的关于手机或设备信息页里查看处理器，菜单位置因厂商而异。

挑选时再留意三点：

1. 选标着 Latest 的正式版，标着 Pre-release 的是测试构建。
2. 文件名里的版本字样对不上数据卡的话，多半是点进了旧的发布条目，回去重新找。
3. 官方仓库的 README 如果列出了应用商店等其他渠道，以 README 为准，不要自己去不明来源的应用市场找。

## 怎么确认安装包是官方构建

APK 是可以被改包的，手机上又不方便看文件，所以更要靠来源和校验来确认。

- **地址**。浏览器地址栏的域名是 github.com，账号段是 2dust，仓库段是 v2rayNG。同名仓库挂在别的账号底下，一律按仿冒处理。
- **校验值**。发布页要是附了校验信息，把 APK 拷到电脑上，用下面的命令算出哈希再核对：

```text
macOS 或 Linux：shasum -a 256 你下载的文件.apk
Windows PowerShell：Get-FileHash .\你下载的文件.apk -Algorithm SHA256
```

- **安装权限**。用浏览器或文件管理器安装 APK，系统会要求你为那个应用开启“允许安装未知应用”，装完可以再关掉。菜单名称以系统为准。
- **权限范围**。装好后若它向你索要通讯录、短信或无障碍服务这类与代理无关的授权，立刻停用并卸载。
- **空白启动**。v2rayNG 刚装好时节点列表是空的，要靠你自己导入订阅；列表里预先躺着陌生节点，就是被改过的证据。
- **名字**。写着“汉化版”“VIP 版”“去广告版”的包是第三方改出来的，与 2dust 的仓库无关。

假网页长什么样，见[机场假官网怎么识别](/bikeng/jia-guanwang/)。安装包被别人改过之后会出什么问题，请读[破解版梯子软件的风险](/bikeng/pojie-kehuduan/)。

## v2rayNG 第一次打开要做的三件事

1. **允许 VPN 连接。** 第一次启动连接时，系统会弹出一个添加 VPN 连接的确认框，同意后状态栏会出现 VPN 图标，常见为钥匙形状，样式因系统而异。这是安卓对代理类 App 的统一要求，不是异常。
2. **导入订阅。** 打开订阅设置，新增一条记录，贴上机场给的通用链接，执行一次更新，节点才会列出来。通用做法见[订阅链接怎么用](/jiaocheng/dingyue-daoru/)，完整步骤见 [v2rayNG 使用教程](/jiaocheng/v2rayng-android/)。
3. **选节点并开启连接，再按需设置分应用代理。** 选中一个节点点击连接。需要的话，在设置里找到分应用代理，勾选要走代理的 App，改动后重新连接。验证时先开一个要代理的网页，再开几个国内 App，看它们是否仍然直连、没有被误带进代理。

另外，部分安卓系统会在后台自动清理耗电的应用，导致连接中断。连接老是自己断开的话，去系统的电池设置里给 v2rayNG 开一个后台不受限的例外，选项叫什么因厂商而异。

## 和同类安卓客户端的区别

| 客户端 | 内核 | 支持系统 | 订阅与配置特点 | 更适合谁 |
| --- | --- | --- | --- | --- |
| v2rayNG | Xray | 安卓 | 吃通用订阅，分应用代理，界面朴素 | 机场给通用订阅的安卓用户 |
| NekoBox for Android | sing-box | 安卓 | 支持的协议面较广 | 需要更多协议的人 |
| Clash Meta for Android | Mihomo | 安卓 | 吃 Clash 订阅，规则与策略组完整 | 机场给 Clash 订阅的人 |
| FlClash | Mihomo | 安卓、Windows、macOS、Linux | 界面简洁，手机和电脑同一套 | 想要多端统一的人 |
| Hiddify | sing-box | 多平台 | 一键导入，设置少 | 想要省事的新手 |

选哪款的起点，是机场发来的订阅长什么样：节点链接式的通用订阅，对应 v2rayNG 这一路；Clash 配置，则对应 Clash 系。内核决定协议支持范围和规则写法，至于连上之后表现如何，还得看订阅与线路。策略组与规则的概念，见[策略组怎么用](/jiaocheng/celue-zu/)。同样的对照更完整地放在[安卓梯子下载](/xiazai/android/)页。

## 下一步

- **v2rayNG 下载并装好之后**：按 [v2rayNG 使用教程](/jiaocheng/v2rayng-android/)走一遍，从导入订阅到分应用代理。
- **还没有订阅**：去[机场推荐](/tuijian/)对着榜单挑，并确认套餐给的是通用订阅；想按用途缩小范围，用[选梯子向导](/gongju/xuan-tizi-xiangdao/)。
- **想了解安卓上整体怎么装**：读[安卓梯子怎么用](/zhinan/anzhuo-tizi/)。
- **同一份订阅想在电脑上用**：看 [v2rayN 下载](/xiazai/v2rayn/)。
