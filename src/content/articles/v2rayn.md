---
type: xiazai
title: v2rayN 下载：官方地址、最新版本与内核说明
description: "v2rayN 下载的官方渠道是 GitHub 上 2dust 名下的 v2rayN 仓库发布页，该项目没有独立官网。本页说明这款支持 Xray 与 sing-box 内核的 V2Ray 系客户端适合谁、怎么挑安装包、怎么核对官方构建，以及第一次打开要做的三件事。"
category: 客户端下载
primaryKeyword: v2rayN 下载
secondaryKeywords: [v2rayN, v2rayN 官网, V2Ray 下载]
difficulty: beginner
publishedAt: 2026-10-08
updatedAt: 2026-10-09
answer: "v2rayN 是 V2Ray 系的桌面图形客户端，支持 Xray 与 sing-box 内核，适合手里有通用订阅的电脑用户。官方渠道只有 GitHub 上 v2rayN 仓库的发布页，版本与发布日期见页面顶部数据卡。"
limits:
  - 安装包的文件名、运行库要求和界面菜单名会随版本调整，本页只描述特征，以官方发布页为准。
  - 本页不评价任何客户端的速度，连接效果取决于你的订阅和线路，不取决于图形界面。
  - 本页没有覆盖路由规则、TUN 等进阶设置，这些内容请看对应的使用教程。
sources:
  - title: v2rayN 官方仓库
    url: https://github.com/2dust/v2rayN
  - title: Project X（Xray）文档
    url: https://xtls.github.io/
client: v2rayn
rankBlock: overall
relatedTopics: [v2rayn-windows, windows, v2ray-shi-shenme, v2rayng, dingyue-daoru, neihe]
faqs:
  - q: v2rayN 有官方网站吗？
    a: "据项目仓库主页，v2rayN 的官方渠道就是 GitHub 上 2dust 账号下的 v2rayN 仓库，发布页提供各系统的安装包。搜索结果里自称“v2rayN 官网”的第三方页面，不是项目本身发布的，下载前请先按本页的方法核对来源和校验值，不要直接运行。"
  - q: v2rayN 和 V2Ray 是什么关系？
    a: "V2Ray 是一个代理内核项目，没有图形界面；v2rayN 是调用内核的图形客户端，名字沿用了前者。如今 v2rayN 支持 Xray 和 sing-box 内核，不再局限于最初的 V2Ray。多数人搜索 V2Ray 下载，真正需要的是 v2rayN 这样的客户端，而不是命令行内核。"
  - q: 我的机场只给 Clash 订阅，能用 v2rayN 吗？
    a: "要看订阅格式。v2rayN 主要处理通用订阅，也就是节点链接列表，订阅格式必须和客户端匹配。机场只给 Clash 格式时，直接用 Clash 系客户端更省事；想转换格式也可以，但转换有兼容和隐私方面的风险，先了解清楚再决定。"
  - q: v2rayN 要付费吗？
    a: "不收费。v2rayN 属于开源软件，安装包随发布页免费提供，授权协议看顶部数据卡。软件里没有预置节点，需要付费的只有机场订阅。任何要求先付款才给下载、或者出售激活码、授权的页面，都不是项目自己发布的，别付钱。"
  - q: 下载后杀毒软件报毒怎么办？
    a: "代理类工具经常被安全软件误报或提示，不能仅凭提示判断好坏，也不能因为没提示就放心。先核对下载地址是否是官方仓库，再用校验值比对文件；来源和校验值对不上，就不要运行。不要为了安装而长期关闭安全软件。"
---

找 v2rayN 下载入口，只认一个地址：GitHub 上 2dust 账号下的 v2rayN 仓库。这个项目没有独立的官方网站，所以搜索结果里写着“v2rayN 官网”的页面，请先核对再下载。顶部数据卡只管发布信息。它没回答的几个问题，也就是 v2rayN 是什么、谁该用、一长串文件拿哪个、下完怎么验，下面逐个说。

## v2rayN 是什么：V2Ray 系的老牌图形客户端

v2rayN 是一款桌面图形客户端，面向 Windows、macOS 和 Linux，内核方面支持 Xray 与 sing-box。真正转发流量的是内核，v2rayN 负责把导入订阅、管理节点、设置路由和开关系统代理这些事做成界面。Xray 的配置项含义可以查 [Project X（Xray）文档](https://xtls.github.io/)。

名字里的 v2ray 来自最早的内核项目。“V2Ray 下载”这个搜索词其实有两种意思：一种是找命令行内核，一种是找图形客户端。绝大多数用户要的是后者，也就是 v2rayN 这样带界面的软件。V2Ray、Xray 和 VMess、VLESS 之间的关系，见 [V2Ray 是什么](/zhinan/v2ray-shi-shenme/)。

软件本身开源免费，不带任何节点。它擅长的是通用订阅和单个节点的管理：粘贴订阅链接、手动添加分享链接、按分组整理节点、为不同域名设置直连或代理。

## 适合谁，不适合谁

**适合：**

- 机场提供的是通用订阅链接，电脑是 Windows、macOS 或 Linux。
- 手里有若干单独的节点分享链接，想自己管理。
- 想自己调整路由规则，而不是完全依赖机场下发的整套配置。
- 需要在同一个界面里切换不同内核。

**不适合：**

- 手机用户。手机上可以看同作者维护的安卓版 [v2rayNG](/xiazai/v2rayng/)。
- 机场只给 Clash 订阅、又不想折腾格式的人。这种情况直接用 Clash 系客户端更省事，对照见 [Windows 梯子下载](/xiazai/windows/)。
- 想要“导入即用、几乎不用看设置”的新手。这类需求更适合一键导入型的客户端，见下方对照表。

## v2rayN 下载与官网：入口只认 GitHub 仓库发布页

官方发布页是 [github.com/2dust/v2rayN/releases](https://github.com/2dust/v2rayN/releases)。仓库主页是 [github.com/2dust/v2rayN](https://github.com/2dust/v2rayN)。核对要点有两个：账号是 2dust，仓库名是 v2rayN，两者都对，才是项目本身。

### 在发布页挑对安装包

Assets 列表里的文件很多，按你的系统找特征：

| 你的系统 | 该找的文件特征 | 说明 |
| --- | --- | --- |
| Windows，Intel 或 AMD 处理器 | 文件名含 windows 与 64 的压缩包 | 多数 Windows 电脑属于这一类 |
| Windows，ARM 处理器 | 文件名含 windows 与 arm64 的压缩包 | 仅 ARM 架构的设备 |
| macOS | 文件名含 macos 与芯片架构的包 | 芯片架构要与你的 Mac 一致 |
| Linux | 文件名含 linux 的包，架构与机器一致 | 按发行版选择包格式 |

挑选时留意三点：

1. 选标着 Latest 的正式版。标着 Pre-release 的是测试构建，求稳就不要选。
2. 发布页通常有带运行库和不带运行库的包，内核文件是随包附带还是要在客户端里另行更新，也以发布页的说明为准。
3. Source code 压缩包是源代码，不是安装包。

Windows 用户安装时系统弹出的提示怎么判断，见 [Windows 梯子下载](/xiazai/windows/) 页里关于 SmartScreen 的一节。

## 怎么确认拿到的是官方构建

v2rayN 下载完成后，自己核对这几项，每一项都不依赖我们的说法：

- **地址**。浏览器地址栏里的域名是 github.com，账号段是 2dust，仓库段是 v2rayN。账号或仓库名差一个字母，都是仿冒。
- **校验值**。发布页若附带校验信息，就在本机算出压缩包的哈希来比对：

```text
Windows PowerShell：Get-FileHash .\你下载的文件.zip -Algorithm SHA256
macOS 或 Linux：    shasum -a 256 你下载的文件
```

- **空白启动**。刚解压运行的 v2rayN，订阅分组和节点列表都是空的；还没操作就出现一堆陌生条目，说明包被改过。
- **目录内容**。解压后只应有客户端本体、内核文件和配置，没有额外的安装器、广告组件或“推荐软件”。
- **名字**。搜索结果里叫“中文版”“增强版”“绿色版”“破解版”的东西，是别人重新打包的，并非 2dust 发布。界面语言想换，到设置里调整即可。

遇到自称官网、要求你先关闭安全软件再安装的页面，直接离开。想知道假官网长什么样，看[机场假官网怎么识别](/bikeng/jia-guanwang/)；装了改版客户端会怎样，看[破解版梯子软件的风险](/bikeng/pojie-kehuduan/)。

## v2rayN 第一次打开要做的三件事

1. **确认内核。** 在设置里查看当前使用的是 Xray 还是 sing-box，不确定就保持默认。
2. **导入订阅。** 到订阅分组里添加机场后台复制的通用订阅链接，更新订阅后节点会出现在列表里。通用做法见[订阅链接怎么用](/jiaocheng/dingyue-daoru/)，Windows 上的完整步骤见 [v2rayN 使用教程](/jiaocheng/v2rayn-windows/)。
3. **选节点并打开系统代理。** 右键托盘图标，选自动配置系统代理一类的选项，路由挑绕过大陆一类的预置规则，菜单名称以当前版本为准，系统代理本身的原理见[系统代理怎么设置](/jiaocheng/xitong-daili/)。最后做一次对照：访问一个国内网站，确认它没有绕路；再访问一个被限制的网站，确认它确实走了节点。

较新的版本提供 TUN 模式开关，需要管理员权限。基础用法跑通之前，先不用开。

## 和同类客户端的区别

| 客户端 | 内核 | 支持系统 | 配置与订阅特点 | 更适合谁 |
| --- | --- | --- | --- | --- |
| v2rayN | Xray / sing-box | Windows、macOS、Linux | 通用订阅与单个节点管理，路由可自己调 | 机场给通用订阅的电脑用户 |
| v2rayNG | Xray | 安卓 | 同作者的安卓版，支持分应用代理 | 手机用户 |
| Clash Verge Rev | Mihomo | Windows、macOS、Linux | 吃 Clash 订阅，规则与策略组界面完整 | 机场给 Clash 订阅的人 |
| sing-box | sing-box | 多平台 | JSON 配置，门槛较高 | 想自己写配置的人 |
| Hiddify | sing-box | 多平台 | 一键导入，设置少 | 想要省事的新手 |

选择的依据是：机场给你什么格式的订阅，以及你想不想自己动手调规则。内核只决定能用哪些协议，用起来快不快、稳不稳，主要看订阅和线路。需要对比协议的话，见[机场协议怎么选](/zhinan/jichang-xieyi/)。

## 下一步

- **v2rayN 下载并装好之后**：按 [v2rayN 使用教程](/jiaocheng/v2rayn-windows/)走一遍，从导入订阅到路由设置。
- **还没有订阅**：先在[机场推荐](/tuijian/)里看榜单数据，套餐要带通用订阅；没头绪的话，[选梯子向导](/gongju/xuan-tizi-xiangdao/)可以帮你收窄。
- **不确定该选哪款客户端**：用[客户端选择器](/gongju/kehuduan-xuanze/)按系统和订阅格式缩小范围。
- **手机也要用**：看安卓版 [v2rayNG 下载](/xiazai/v2rayng/)。
