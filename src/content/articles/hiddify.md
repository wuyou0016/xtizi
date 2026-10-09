---
type: xiazai
title: Hiddify 下载：官方地址、最新版本与适用系统
description: "Hiddify 下载的官方渠道是 GitHub 上 hiddify 组织名下的 hiddify-app 仓库发布页。本页说明这款 sing-box 内核、主打少设置的多平台客户端适合谁、各系统怎么挑安装包、怎么避免下成同名的服务器面板，以及第一次打开的三件事。"
category: 客户端下载
primaryKeyword: Hiddify 下载
secondaryKeywords: [Hiddify, Hiddify 客户端, Hiddify 安卓]
difficulty: beginner
publishedAt: 2026-10-08
updatedAt: 2026-10-09
answer: "Hiddify 是 sing-box 内核的多平台客户端，覆盖 Windows、macOS、Linux、安卓和 iPhone，主打导入订阅后少设置，适合新手。官方渠道是 hiddify 组织下的 hiddify-app 仓库发布页，版本与发布日期见页面顶部数据卡。"
limits:
  - 安装包的文件名、各平台的上架渠道和应用内菜单名会随版本调整，本页只描述特征，以官方发布页为准。
  - 本页不评价任何客户端的速度，连接效果取决于你的订阅和线路，同内核的客户端之间没有可比的测速结论。
  - 支持的订阅格式和功能随版本变化，具体以官方仓库说明和应用内提示为准。
sources:
  - title: Hiddify 官方仓库
    url: https://github.com/hiddify/hiddify-app
client: hiddify
rankBlock: overall
relatedTopics: [hiddify-jiaocheng, sing-box, android, windows, dingyue-daoru, tun]
faqs:
  - q: Hiddify 和 Hiddify Manager 是一回事吗？
    a: "不是。本页讲的 Hiddify 是装在你自己设备上的客户端，仓库名是 hiddify-app；同一团队还有面向服务器的管理面板项目，用来搭建和管理服务端，普通用户不需要。下载时认准 hiddify-app 这个仓库，别把面板当成客户端装。"
  - q: Hiddify 支持哪些系统？
    a: "它面向 Windows、macOS、Linux、安卓和 iPhone 五类系统，具体以页面顶部数据卡里的支持系统为准。不同系统的获取方式不同，桌面和安卓可以从官方仓库发布页取得安装包，iPhone 则需要通过 App Store，上架情况以商店页面为准。"
  - q: Hiddify 能导入机场的订阅吗？
    a: "通常可以。它支持粘贴订阅链接、从剪贴板和扫码导入。但支持的订阅格式随版本变化，导入前最好先看仓库说明和应用内的提示。如果机场只提供某种特殊格式导入失败，先确认复制的是订阅链接而不是单个节点，再考虑订阅转换，转换会涉及兼容性和隐私风险。"
  - q: Hiddify 要付费吗？
    a: "客户端本身不收费，hiddify-app 仓库发布页上的安装包可以直接取用，授权协议在顶部数据卡里。它不带节点，要花钱的是机场订阅。iPhone 版是否另有收费，以 App Store 页面为准。把 Hiddify 包装成激活码或会员出售的页面，不是官方渠道。"
  - q: 想自己写规则让某些网站直连，Hiddify 够用吗？
    a: "它的设计重点是少设置，细调空间不如 Clash 系客户端或直接使用 sing-box。设置里一般提供按地区预置的分流选项，能满足多数日常使用。需要大量自定义规则、策略组和覆写的用户，可以回头看对照表里更偏向手动配置的客户端。"
---

Hiddify 下载的官方来源是 GitHub 上 hiddify 组织名下的 hiddify-app 仓库。这个名字里有个容易踩的坑：同一团队还维护着面向服务器的管理面板，普通用户并不需要，下载时要认准客户端这个仓库。顶部数据卡管的是发布信息，其余的，也就是这个客户端的取舍、各系统该拿哪个包、怎么核对没下错，放在下面讲。

## Hiddify 是什么：少设置的多平台 sing-box 客户端

Hiddify 是一款多平台的图形客户端，内核是 sing-box，覆盖 Windows、macOS、Linux、安卓和 iPhone。它的设计目标很明确：把“导入订阅、点连接、用起来”这件事做到最短，把大部分设置收进预置选项里。内核本身的背景，见 [sing-box 下载](/xiazai/sing-box/)页。

它能做的事包括：粘贴订阅链接或从剪贴板、扫码导入；默认自动选择节点；在系统代理和虚拟网卡（TUN）两种接管方式之间切换；按地区预置分流。这些功能在界面上的名称，以当前版本为准。

软件本身开源免费，不带任何节点。

## 适合谁，不适合谁

**适合：**

- 第一次用梯子，不想学路由和规则的新手。
- 手机、电脑、平板想用同一款客户端的人。
- 机场提供通用订阅，希望导入后尽量少操作。
- 想体验 sing-box 内核，但不想读配置文档的人。

**不适合：**

- 需要大量自定义规则、策略组和覆写的用户。Hiddify 把设置收得很紧，细调空间有限，这类需求更适合 Clash 系客户端或 sing-box 本体。
- 只想要某一个平台上最小体积客户端的人。
- 机场只提供特殊格式订阅、又不想折腾转换的人。

少设置是优点，也是取舍：省下的时间，是用细调的自由换的。

## Hiddify 下载：按系统在官方发布页选安装包

官方发布页是 [github.com/hiddify/hiddify-app/releases](https://github.com/hiddify/hiddify-app/releases)。Assets 列表里的文件按系统和格式区分，文件名里会写明系统字样：

| 你的系统 | 该找的文件特征 | 说明 |
| --- | --- | --- |
| Windows | 文件名含 windows 的安装程序或压缩包 | 一般有安装版和免安装版，以发布页为准 |
| macOS | 文件名含 macos 的磁盘映像 | 按你的芯片类型选择，不确定就看发布说明 |
| Linux | 文件名含 linux 的安装包或打包文件 | 按发行版选格式 |
| 安卓 | 文件名含 android 的 APK | 发布页里可能并排放着多个架构的包，不确定时选通用的那个 |
| iPhone | 通过 App Store 获取 | 上架地区以商店页面为准 |

下载时留意两点：

1. 选标着 Latest 的正式版，标着 Pre-release 的是测试构建，求稳就不要选。
2. Source code 压缩包是源代码，不是安装包。

Windows 上安装被系统拦住时，对照 [Windows 梯子下载](/xiazai/windows/)里 SmartScreen 那一节处理。安卓用户装 APK 之前，可以先读[安卓梯子下载](/xiazai/android/)里关于安装来源的说明。iPhone 这条线比较特殊：本地商店搜不到的话，得先有其他地区的账户，办法见[外区 Apple ID 怎么准备](/jiaocheng/waiqu-apple-id/)。

## 怎么确认下到的是官方客户端

Hiddify 的名字被很多项目共用，所以核对的重点是“这到底是哪个项目”。

- **仓库名**。组织是 hiddify，仓库是 hiddify-app。名字里带 Manager 的是服务器面板，不是客户端。
- **校验值**。发布页要是随附校验信息，就在本机算出下载文件的哈希，对着看：

```text
macOS 或 Linux：shasum -a 256 你下载的文件
Windows PowerShell：Get-FileHash .\你下载的文件 -Algorithm SHA256
```

- **空白启动**。官方客户端首次打开时没有任何预置节点。一打开就有来路不明的订阅或节点，说明被改过。
- **商店页面**。iPhone 版从官方仓库说明里指向的商店页面进入，不要在商店里搜到名字相近的应用就直接下载。
- **权限**。移动端的 Hiddify 只该申请 VPN 连接这类授权，通讯录、短信、无障碍服务之类的请求一出现，就当它是改包。
- **名字**。标着“破解版”“VIP 版”“解锁版”的安装包，没有一个能追溯到 hiddify-app 仓库。

假官网长什么样，看[机场假官网怎么识别](/bikeng/jia-guanwang/)；改包版本的客户端到底危险在哪里，请读[破解版梯子软件的风险](/bikeng/pojie-kehuduan/)。

## Hiddify 第一次打开要做的三件事

1. **导入订阅。** 复制机场后台的订阅链接，在主界面选择从剪贴板添加，或者用扫码、粘贴链接的方式导入。导入后订阅下的节点会出现在列表里。通用做法见[订阅链接怎么用](/jiaocheng/dingyue-daoru/)。
2. **选择模式和地区预设。** 在设置里确认接管方式：系统代理管得到浏览器等程序，虚拟网卡（TUN）能接管更多程序，但需要额外权限，原理见 [TUN 模式](/cidian/tun/)。再找到按地区预置分流的选项，选择与你所在地对应的预设，名称以当前版本为准。
3. **连接并验证。** 点连接，节点通常由它自动挑选。随后分别试一个国内网站和一个境外网站，两边都能打开，这一步就算过了。

安卓上首次连接时，系统会弹出添加 VPN 连接的确认框，同意即可。更完整的步骤见 [Hiddify 使用教程](/jiaocheng/hiddify-jiaocheng/)。

## 和同类客户端的区别

| 客户端 | 支持系统 | 内核 | 导入体验 | 细调空间 |
| --- | --- | --- | --- | --- |
| Hiddify | Windows、macOS、Linux、安卓、iPhone | sing-box | 一步导入，预置多 | 较小 |
| Karing | Windows、macOS、安卓、iPhone | sing-box | 导入订阅即用 | 中等 |
| NekoBox for Android | 安卓 | sing-box | 订阅分组管理 | 中等 |
| sing-box | Windows、macOS、Linux、安卓、iPhone | sing-box | 需要准备 JSON 配置 | 最大 |
| v2rayN | Windows、macOS、Linux | Xray / sing-box | 通用订阅与节点管理 | 中等 |
| Clash Verge Rev | Windows、macOS、Linux | Mihomo | 吃 Clash 订阅 | 较大 |

前四款用的是同一个内核，所以协议支持的差别不大，差别在于封装程度和更新节奏。Hiddify 选的是“省事”，sing-box 本体选的是“控制”。如果你同时在 iPhone 和安卓、Windows 之间切换，统一用一款会省去很多重复设置。想看另一款多平台的同内核客户端，可以读 [Karing 下载](/xiazai/karing/)。

## 下一步

- **Hiddify 下载后**：按 [Hiddify 使用教程](/jiaocheng/hiddify-jiaocheng/)走一遍，从导入订阅到模式选择。
- **还没有订阅**：[机场推荐](/tuijian/)里有榜单数据可查，选套餐时认准带通用订阅的；不知从何下手，就用[选梯子向导](/gongju/xuan-tizi-xiangdao/)。
- **觉得设置太少**：回到上面的对照表，换成 sing-box 本体或 Clash 系客户端，订阅可以沿用。
- **手机是安卓**：先读[安卓梯子怎么用](/zhinan/anzhuo-tizi/)，了解系统层面的要求。
