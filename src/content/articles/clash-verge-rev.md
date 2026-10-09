---
type: xiazai
title: Clash Verge Rev 下载：官方地址与最新版本
description: "Clash Verge Rev 下载的官方渠道是 GitHub 上的 clash-verge-rev 仓库发布页。本页说明这款内置 mihomo 内核的 Clash 系桌面客户端适合谁，Windows、macOS、Linux 各选哪个安装包，怎么确认是官方构建，以及第一次打开要做的三件事。"
category: 客户端下载
primaryKeyword: Clash Verge Rev 下载
secondaryKeywords: [Clash Verge 下载, Clash Verge Rev, Clash Windows 下载]
difficulty: beginner
publishedAt: 2026-10-08
updatedAt: 2026-10-09
answer: "Clash Verge Rev 是内置 mihomo 内核的 Clash 系桌面客户端，支持 Windows、macOS 和 Linux，适合拿到 Clash 订阅的电脑用户。安装包只从 GitHub 上 clash-verge-rev 仓库的发布页下载，版本与发布日期见页面顶部数据卡。"
limits:
  - 安装包的具体文件名和界面菜单名会随版本调整，本页只描述特征，以官方发布页和当前版本界面为准。
  - 本页不评价任何客户端的速度，连接效果取决于你的订阅和线路，同内核的客户端之间没有可比的测速结论。
  - 本页没有覆盖覆写脚本、服务模式等进阶设置，这些内容请看对应的使用教程。
sources:
  - title: Clash Verge Rev 官方仓库
    url: https://github.com/clash-verge-rev/clash-verge-rev
  - title: Mihomo（Clash Meta）文档
    url: https://wiki.metacubex.one/
client: clash-verge-rev
rankBlock: clash
relatedTopics: [clash-verge-rev-windows, clash-verge-rev-mac, windows, clash-shi-shenme, clash-party]
faqs:
  - q: Clash Verge 和 Clash Verge Rev 是什么关系？
    a: Clash Verge Rev 是 Clash Verge 的社区延续版本。原版 Clash Verge 停止维护后，由社区接手继续开发，仓库放在 GitHub 的 clash-verge-rev 组织下。现在搜索 Clash Verge 下载，要找的通常就是带 Rev 的这一版；网上仍在流传的原版安装包已经不再更新。
  - q: Clash Verge Rev 有手机版吗？
    a: 没有。它只提供 Windows、macOS 和 Linux 三个桌面系统的版本。应用商店或下载站里自称手机版的同名应用都不是这个项目发布的。安卓上想用同类的 Clash 系客户端，可以看 FlClash 或 Clash Meta for Android；iPhone 需要通过 App Store 获取其他客户端。
  - q: Clash Verge Rev 要付费吗？
    a: 不用付钱。clash-verge-rev 仓库的发布页就能下到安装包，开源协议写在顶部数据卡里。节点不随软件附赠，得另外准备机场订阅，真正的开销在那一头。标价出售安装包或激活码的页面，可以直接排除。
  - q: 装好打开后为什么一个节点都没有？
    a: 因为客户端只是工具，节点来自机场订阅。到订阅或配置页面，把机场后台复制的 Clash 订阅链接粘贴进去并导入，导入成功后选中这份配置，代理页面里才会出现节点和策略组。如果导入失败，先确认复制的是 Clash 格式的订阅链接。
  - q: 界面是英文的，需要另外下载汉化版吗？
    a: 不需要。官方版本可以在设置里切换界面语言，以当前版本的设置页为准。网上所谓的汉化版、中文绿色版都是第三方修改后重新打包的，来源无法核对，不属于官方构建，不建议使用。
---

Clash Verge Rev 下载只有一个官方渠道：GitHub 上 clash-verge-rev 组织名下的同名仓库。发布信息和核验时间都在顶部数据卡里。数据卡没写的，是它的来历、适合的人群、发布页上那么多文件该选哪个，以及装好之后先做的三件事。

## Clash Verge Rev 是什么

它是一款 Clash 系的桌面图形客户端：界面基于 Tauri 框架，内置 mihomo（Clash Meta）内核，支持 Windows、macOS 和 Linux。真正处理代理流量的是内核，Clash Verge Rev 负责把导入订阅、切换节点、开关系统代理这些操作做成界面。内核的配置项含义可以查 [Mihomo（Clash Meta）文档](https://wiki.metacubex.one/)。

名字里的 Rev 交代了来历。它是 Clash Verge 的社区延续版本：原版停止维护后，由社区接手继续开发。所以搜索“Clash Verge 下载”时，你要找的通常就是它。

另一个常见的搜索词是“Clash Windows 下载”。很多人想找的其实是 Clash for Windows，而它和原版 Clash 内核的仓库已在 2023 年底删除停更。Clash Verge Rev 是目前仍在维护的同类选择之一，来龙去脉见 [Clash 是什么](/zhinan/clash-shi-shenme/)。

软件本身开源免费，不带任何节点。它能做的事包括：管理多份订阅配置、切换策略组和节点、查看规则与连接、用系统代理或 TUN 两种方式接管流量、对订阅配置做追加修改。这些功能的菜单叫法，以你当前版本的界面为准。

## 适合谁，不适合谁

**适合：**

- 机场提供 Clash 订阅，电脑是 Windows、macOS 或 Linux。
- 想用规则分流，让国内网站直连、国外网站走代理，不想来回手动开关。
- 第一次用 Clash 系客户端，希望有完整的图形界面，并且有教程可以照着做。
- 需要查看连接列表、规则命中和日志来排查问题。

**不适合：**

- 手机用户。它没有安卓和 iOS 版本。
- 机场只给通用订阅、不给 Clash 订阅的人。这种情况看 v2rayN，或先了解 [订阅转换](/jiaocheng/dingyue-zhuanhuan/) 的做法与风险。
- 只想在 Mac 菜单栏点一下就完事的人。菜单栏型的 ClashX Meta 更贴近这种习惯。
- 没有图形界面的服务器。那里直接用 Mihomo 内核。

## Clash Verge Rev 下载：在官方发布页挑对安装包

官方发布页是 [github.com/clash-verge-rev/clash-verge-rev/releases](https://github.com/clash-verge-rev/clash-verge-rev/releases)。页面上的 Assets 列表文件很多，按你的系统对号入座：

| 你的系统 | 该找的文件特征 | 说明 |
| --- | --- | --- |
| Windows，Intel 或 AMD 处理器 | 文件名含 x64 的安装程序 | 多数 Windows 电脑属于这一类 |
| Windows，ARM 处理器 | 文件名含 arm64 的安装程序 | 仅 ARM 架构的设备 |
| macOS，Apple 芯片 | 文件名含 aarch64 的 .dmg | M 系列芯片的 Mac |
| macOS，Intel 处理器 | 文件名含 x64 的 .dmg | 较早的 Intel 机型 |
| Linux | .deb 或 .rpm，架构与机器一致 | 按发行版选择 |

下载时留意三点：

1. 选标着 Latest 的正式版。标着 Pre-release 的是测试构建，求稳就不要选。
2. Windows 版的界面依赖系统里的 WebView2 组件。发布页通常还会提供内置该组件的安装包变体，给系统里缺少它的电脑用，文件名和用法以发布说明为准。
3. Source code 压缩包是源代码，不是安装包。

安装时被系统拦下来怎么办：Windows 上的 SmartScreen 提示，[Windows 梯子下载](/xiazai/windows/) 里有专门一节；Mac 上弹出的“无法验证开发者”，对应说明在 [Mac 梯子下载](/xiazai/mac/)。

## 怎么确认拿到的是官方构建

自己核对这几项：

- **地址**。组织名和仓库名都是 clash-verge-rev，两段相同，中间用连字符而不是下划线。原版 Clash Verge 的仓库名不带 rev，别混在一起。
- **校验值**。发布说明里要是附了校验信息，就在本机算一遍再比对。
- **版本信息**。安装后在设置页查看客户端版本和内核版本，与你下载的版本对应。
- **更新来源**。应用内检查更新指向的是同一个官方仓库。如果某个版本的“更新”把你引向别的下载站，说明装的不是官方构建。
- **名字**。到处流传的“中文版”“汉化版”“绿色版”，都是第三方改过再打包的，来源没法核对。想换成中文界面，进设置页选语言。

被改过的安装包会带来什么后果，见[破解版梯子软件的风险](/bikeng/pojie-kehuduan/)。

## 第一次打开要做的三件事

1. **导入订阅。** 到订阅（配置）页面，粘贴机场后台复制的 Clash 订阅链接并导入，然后选中这份配置。通用做法见 [订阅链接怎么用](/jiaocheng/dingyue-daoru/)。
2. **确认模式并选节点。** 代理模式保持“规则”，在代理页面里给主要的策略组选一个节点，或保留自动选择。规则、全局、直连的差别见 [Clash 规则模式](/jiaocheng/guize-quanju-zhilian/)。
3. **打开系统代理并验证。** 设置页里把“系统代理”开关打开，之后各试一次：国内网页应该照常直连，需要代理的网页应该能打开，两者都满足才算做完，原理见[系统代理怎么设置](/jiaocheng/xitong-daili/)。

TUN 模式先不用开。它需要额外的系统权限，适合系统代理管不到的程序，等基础用法跑通之后再看 [TUN 模式](/jiaocheng/tun-moshi/)。

## 和同类客户端的区别

| 客户端 | 内核 | 支持系统 | 侧重点 | 相比之下更适合谁 |
| --- | --- | --- | --- | --- |
| Clash Verge Rev | Mihomo | Windows、macOS、Linux | 桌面端功能较全，界面基于 Tauri | 桌面用户的通用起点 |
| Clash Party | Mihomo | Windows、macOS、Linux | 覆写与内核设置做成了可视化界面 | 喜欢改配置的人 |
| FlClash | Mihomo | 安卓、Windows、macOS、Linux | 界面简洁，手机和电脑同一套 | 手机上也想用同一款的人 |
| ClashX Meta | Mihomo | macOS | 菜单栏操作 | 只在 Mac 上用、偏好轻量的人 |
| v2rayN | Xray / sing-box | Windows、macOS、Linux | 走通用订阅路线，可逐个节点手动管理 | 订阅不是 Clash 格式的人 |

前四款共用 mihomo，同一份订阅放进谁家，节点与规则的解析结果都相同，界面不一样，网络表现却由订阅和线路决定。所以在它们之间选，看的是操作习惯和你要不要某个特定功能，没有必要为了“更快”而换。

## 下一步

- Windows 用户：装好后按 [Clash Verge Rev 教程](/jiaocheng/clash-verge-rev-windows/) 走一遍，从导入订阅到系统代理。
- Mac 用户：看 [Clash Verge Rev Mac](/jiaocheng/clash-verge-rev-mac/) 教程，里面多了系统授权的部分。
- 还没有订阅：先去 [梯子推荐](/tuijian/) 看榜单，套餐必须附带 Clash 格式订阅，怎么判断见 [Clash 机场](/zhinan/clash-jichang/)。
- 完成 Clash Verge Rev 下载后觉得界面不合习惯：回到上面的对照表，换一款同内核的客户端，订阅可以直接沿用。
