---
type: xiazai
title: Clash Party 下载：原 Mihomo Party 的官方地址与版本
description: "Clash Party 下载的官方渠道是 GitHub 上 mihomo-party-org 组织的 clash-party 仓库发布页。它原名 Mihomo Party，改名后新旧名字常被混淆。本页讲清两个名字的关系、适合谁、安装包怎么挑、怎么认准官方构建，以及与同类客户端的区别。"
category: 客户端下载
primaryKeyword: Clash Party 下载
secondaryKeywords: [Mihomo Party 下载, Clash Party, Mihomo Party]
difficulty: beginner
publishedAt: 2026-10-08
updatedAt: 2026-10-09
answer: "Clash Party 就是原来的 Mihomo Party，同一个项目改了名，仓库在 GitHub 的 mihomo-party-org 组织下。它是使用 mihomo 内核的 Clash 系桌面客户端，支持 Windows、macOS 和 Linux，安装包只从该仓库的发布页下载。"
limits:
  - 改名前后安装包的文件名、应用内显示的名称可能不同，本页不逐版本列举，以官方发布页当前的文件为准。
  - 旧版 Mihomo Party 升级到新版时配置是否自动保留，本页没有核对，请以官方发布说明为准并提前备份订阅链接。
  - 本页没有覆盖覆写的具体写法和内核设置的各个选项，这些内容请看 Clash Party 使用教程。
sources:
  - title: Clash Party 官方仓库
    url: https://github.com/mihomo-party-org/clash-party
  - title: Mihomo（Clash Meta）文档
    url: https://wiki.metacubex.one/
client: clash-party
rankBlock: clash
relatedTopics: [clash-party-jiaocheng, clash-verge-rev, windows, clash-shi-shenme, neihe]
faqs:
  - q: Clash Party 和 Mihomo Party 是同一个软件吗？
    a: 是同一个项目。它原名 Mihomo Party，后来改名为 Clash Party，GitHub 仓库也随之改为 mihomo-party-org 组织下的 clash-party。网上很多教程、截图和机场文档仍然写着旧名字，内容大体通用，只是界面上的名称和安装包文件名可能与现在不同。
  - q: 已经装了 Mihomo Party，需要卸载重装吗？
    a: 不必着急。旧版本能正常使用就可以继续用，想升级时到官方仓库的发布页查看发布说明，确认从旧名称版本升级的方式以及配置是否保留。动手前先把订阅链接另外记下来，这样即使配置没有带过去，重新导入一次也就恢复了。
  - q: Clash Party 有手机版吗？
    a: 没有。它只提供 Windows、macOS 和 Linux 三个桌面系统的版本。手机上想用同样基于 mihomo 内核的客户端，安卓可以看 FlClash 或 Clash Meta for Android。官方仓库里没有手机安装包，所以在商店或下载站碰到的“手机版 Clash Party”，与这个项目没有关系。
  - q: 覆写是什么，新手需要用吗？
    a: 覆写是在不改动机场订阅原文的前提下，往配置里追加或替换内容的功能，例如加几条自己的分流规则、调整 DNS 设置。它的好处是订阅更新后你的改动不会被冲掉。新手一开始不需要，等导入订阅、系统代理都用顺了，有具体需求时再学。
  - q: Clash Party 和 Clash Verge Rev 选哪个？
    a: 内核相同，订阅可以原样搬过去，选哪个只取决于你想怎么操作。喜欢在图形界面里逐项调覆写和内核选项的人，可以先试 Clash Party；只想要一个通用的起点，先试 Clash Verge Rev 更省事。两款都免费，各装一遍对比一下，再留下顺手的那款。
---

搜 Mihomo Party 和搜 Clash Party，找到的是同一个项目：它原名 Mihomo Party，后来改了名，仓库也变成了 mihomo-party-org 组织下的 clash-party。Clash Party 下载只认这一个入口，也就是该仓库的发布页，别处的“镜像”“整合包”都不在考虑范围内。数据卡负责版本和协议，这页专门处理改名留下的混乱：先理清新旧名字，再讲适合谁、安装包怎么挑、装好后先做什么。

## Clash Party 和 Mihomo Party 是什么关系

先说软件本身：它是一款 Clash 系的桌面图形客户端，界面基于 Electron 框架，使用 mihomo 内核，支持 Windows、macOS 和 Linux。它不带节点，需要导入机场的 Clash 订阅才能用。名字里虽然还留着 Clash，内核早已换成 mihomo，这段来历放在 [Clash 是什么](/zhinan/clash-shi-shenme/) 里讲，这里不重复。

再说名字。改名之后，新旧两个名字同时在网上流通，容易让人以为是两款软件，甚至以为其中一个是仿冒品。实际情况是：

| 你看到的名字 | 它指什么 | 需要注意 |
| --- | --- | --- |
| Clash Party | 现在的名称 | 官方仓库与发布页使用的名字 |
| Mihomo Party | 改名之前的名称 | 旧教程、旧截图、部分机场文档里仍在使用，说的是同一款 |
| 仓库 mihomo-party-org/clash-party | 现在的官方仓库地址 | 组织名里保留了旧名字，仓库名是新名字 |

三点提醒：

- 组织名是 mihomo-party-org，仓库名是 clash-party。一旧一新拼在一起，看上去别扭，但这正是官方地址的样子。
- 旧的仓库地址一般会被 GitHub 自动跳转到新地址。跳转后，核对地址栏里的组织名没有变。
- 搜索“Mihomo Party 下载”时，排在前面的可能是沿用旧名字的下载站。名字新旧不是判断真伪的依据，地址才是。

## 适合谁，不适合谁

**适合：**

- 机场提供 Clash 订阅，电脑是 Windows、macOS 或 Linux。
- 想在不改动订阅原文的前提下加自己的规则、调 DNS，也就是会用到覆写的人。
- 希望在图形界面里查看和调整内核相关设置，而不是手写配置文件的人。

**不适合：**

- 手机用户。它没有安卓和 iOS 版本。
- 机场只提供通用订阅的人，这种情况更适合 V2Ray 系的客户端。
- 追求安装包小、占用资源少的人。Electron 框架自带一套浏览器内核，安装包体积一般比使用系统自带组件的客户端更大，这是框架的特性，与连接效果无关。

## Clash Party 下载：官方发布页上怎么挑安装包

官方发布页是 [github.com/mihomo-party-org/clash-party/releases](https://github.com/mihomo-party-org/clash-party/releases)。按系统找对应的文件：

| 你的系统 | 该找的文件特征 | 说明 |
| --- | --- | --- |
| Windows，Intel 或 AMD 处理器 | 文件名含 x64 的安装程序 | 多数电脑选这个 |
| Windows，ARM 处理器 | 文件名含 arm64 的安装程序 | 仅 ARM 架构的设备 |
| Windows，不想安装 | 文件名含 portable 的压缩包 | 解压到固定文件夹后运行，是否提供以发布页为准 |
| macOS，Apple 芯片 | 文件名含 arm64 | 封装格式以发布页为准 |
| macOS，Intel 处理器 | 文件名含 x64 | 同上 |
| Linux | .deb 或 .rpm，架构与机器一致 | 按发行版选择 |

挑的时候按这个顺序：

1. 先确认页面上这个版本标着 Latest，而不是 Pre-release。
2. 然后对照上表，只留下系统和处理器架构同时吻合的文件，其余一律忽略。
3. 发布页有时会为较旧的系统版本另外提供兼容构建，文件名里会有相应标注。系统不算老就不要选它们。
4. 文件名里出现的是新名字还是旧名字，取决于版本，以发布页为准，不必为此起疑。

Windows 用户装包时遇到的系统拦截提示，各款客户端大同小异，统一放在 [Windows 梯子下载](/xiazai/windows/) 汇总页里说明，这里不逐条展开。

## 改名之后，怎么认准官方构建

改名之后新旧名字混用，用户自己也说不清哪个才对，这正是仿冒下载站容易钻空子的地方。所以别拿名字当依据，按下面几项核对：

- **地址**。盯住地址栏里的两段：账号是 mihomo-party-org，仓库是 clash-party，缺一段或多一个字符都不对；数据卡里的官方仓库链接可以用来互相印证。
- **版本**。发布页上标 Latest 的那一版，与数据卡显示的是同一个。
- **来路**。别人转发给你的网盘包、群文件、“整合版”，哪怕文件名一字不差也不要装。二次打包的风险和识别办法见 [破解版梯子软件的风险](/bikeng/pojie-kehuduan/)。
- **应用内信息**。安装后在设置或关于页面查看版本号与内核版本；应用内的检查更新指向的应当是同一个官方仓库。
- **内核**。它使用的是 mihomo 内核，内核的各项配置含义可以对照 [Mihomo（Clash Meta）文档](https://wiki.metacubex.one/)。界面里出现你在文档中查不到的“专属加速”“内置线路”一类功能，就不是官方构建。

## 第一次打开要做的三件事

1. **导入订阅。** 在订阅（配置）管理页面粘贴机场后台复制的 Clash 订阅链接，导入后把它设为当前使用的配置。链接的来龙去脉见 [订阅链接怎么用](/jiaocheng/dingyue-daoru/)。
2. **打开系统代理。** 出站模式先不动，沿用默认的规则模式，然后打开系统代理开关。怎样确认它真的生效了，按 [系统代理怎么设置](/jiaocheng/xitong-daili/) 里的检查方法做一遍即可。
3. **认识“覆写”在哪，但先别动。** 找到覆写功能的入口，知道它是用来在订阅之外追加自己的规则和设置的，而且订阅更新不会把它冲掉。真正要用时再按教程写。

内核设置页同样值得看一眼：确认内核在运行、端口没有冲突即可，其余选项保持默认。这些功能的完整用法见 [Clash Party 教程](/jiaocheng/clash-party-jiaocheng/)。

## 和 Clash Verge Rev 等同类客户端的区别

| 对比项 | Clash Party | Clash Verge Rev | FlClash |
| --- | --- | --- | --- |
| 内核 | Mihomo | Mihomo | Mihomo |
| 界面框架 | Electron | Tauri | Flutter |
| 支持系统 | Windows、macOS、Linux | Windows、macOS、Linux | 安卓、Windows、macOS、Linux |
| 侧重点 | 覆写与内核设置的可视化 | 桌面端功能较全 | 界面简洁，手机电脑同一套 |
| 运行依赖 | 自带界面运行环境 | 依赖系统的网页渲染组件 | 自带界面运行环境 |
| 更适合谁 | 喜欢在界面里细调配置的人 | 想要一个通用起点的人 | 手机上也要用同一款的人 |

表里内核一栏全是 Mihomo，意味着换客户端不必换订阅，也不必重新学规则语法。真正要比较的，是各自的界面怎么组织、窗口占多少资源、覆写这类功能摆在哪一层。想了解另一款的细节，看 [Clash Verge Rev 下载](/xiazai/clash-verge-rev/) 页。

## 下一步

- 已经完成 Clash Party 下载和安装：按 Clash Party 教程把订阅、覆写、内核设置三部分过一遍。
- 手里还是旧名字的版本：先记下订阅链接，再去官方发布页看发布说明，决定何时升级。
- 还没有订阅：到 [梯子推荐](/tuijian/) 看榜单数据，确认套餐提供 Clash 订阅，判断方法见 [Clash 机场](/zhinan/clash-jichang/)。
- 用了一阵想加自己的规则：先读 [分流规则](/jiaocheng/fenliu-guize/)，再回来用覆写实现。
