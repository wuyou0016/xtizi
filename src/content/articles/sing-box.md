---
type: xiazai
title: sing-box 下载：官方地址、最新版本与各平台客户端
description: "sing-box 下载前先分清：它既是命令行内核，也有官方的安卓与苹果平台客户端。本页说明官方仓库与文档站、各平台怎么获取 sing-box 客户端、怎么确认官方构建，以及第一次使用的三件事，配置为 JSON，门槛高于 Clash 系。"
category: 客户端下载
primaryKeyword: sing-box 下载
secondaryKeywords: [sing-box, sing-box 客户端, sing-box 安卓]
difficulty: intermediate
publishedAt: 2026-10-08
updatedAt: 2026-10-09
answer: "sing-box 是通用代理内核，官方还提供安卓和苹果平台的图形客户端，配置为 JSON，门槛高于 Clash 系。官方渠道是 SagerNet 的 sing-box 仓库和官方文档站，版本与发布日期见页面顶部数据卡。"
limits:
  - 各平台官方客户端的上架情况和获取方式会变化，一律以 sing-box 官方文档为准。
  - 配置字段会随版本调整，旧教程里的写法可能失效，本页不提供可直接粘贴的完整配置。
  - 本页不评价任何内核或客户端的速度，连接效果取决于你的订阅和线路。
sources:
  - title: sing-box 官方仓库
    url: https://github.com/SagerNet/sing-box
  - title: sing-box 官方文档
    url: https://sing-box.sagernet.org/
client: sing-box
rankBlock: overall
relatedTopics: [sing-box-jiaocheng, hiddify, nekobox, jichang-xieyi, hysteria2, neihe, dingyue-zhuanhuan]
faqs:
  - q: sing-box 是内核还是客户端？
    a: "两者都是。sing-box 本身是一个通用代理内核，以命令行程序的形式发布；官方另外提供了安卓和苹果平台的图形客户端。很多第三方客户端也把它当作内核使用。所以搜索 sing-box 下载时，要先想清楚自己需要的是命令行内核，还是某个平台上的图形客户端。"
  - q: 发布页的文件那么多，应该选哪个？
    a: "按系统和处理器架构选，文件名里会写明，比如 windows、linux、darwin 与 amd64、arm64 等字样，格式以发布页为准。选标着 Latest 的正式版，标着 Pre-release 的是测试构建。拿不准自己的架构时，先查清设备的处理器类型，不要随意挑一个试。"
  - q: 机场的订阅链接能直接导入 sing-box 吗？
    a: "不一定。sing-box 的配置是 JSON，机场常见的通用订阅是节点链接列表，格式不同。如果机场直接提供 sing-box 格式的订阅，就可以在图形客户端里导入；否则需要订阅转换，或者改用能直接导入通用订阅的客户端。转换既可能丢掉部分字段，也意味着订阅链接要交给转换工具处理，动手前把这两点想清楚。"
  - q: sing-box 在 iPhone 上怎么装？
    a: "官方的苹果平台客户端通过 App Store 分发，具体名称、上架地区和获取方式以官方文档为准。你的商店地区里能否下载，要看商店页面。如果需要使用其他地区的商店，要先准备对应地区的 Apple 账户，准备方法可以看站内的外区 Apple ID 教程。"
  - q: 照着旧教程写的配置运行报错，怎么办？
    a: "sing-box 的配置字段会随版本调整，一些旧写法被弃用或移除，旧教程里的配置在新版本上可能直接报错。先用命令行的检查功能定位出错的字段，再对照官方文档里的配置说明和变更说明修改。不要把来路不明的整段配置直接粘贴使用。"
---

sing-box 下载有一个别的客户端没有的问题：先要决定你想下载的是哪种东西。它首先是一个通用代理内核，以命令行程序发布；官方同时提供安卓和苹果平台的图形客户端；而 Windows 和 Linux 上想要图形界面，通常要选用以它为内核的第三方客户端。下面按“内核、平台官方客户端、第三方封装”三层拆开讲，免得下错东西。

## sing-box 是什么：通用内核，加上几个平台的官方客户端

sing-box 是一个通用的代理平台，支持多种协议，也支持 TUN 等接管流量的方式。它的配置是一份 JSON 文件，里面写明入站、出站和路由规则。这和 Clash 系的 YAML 配置是两套体系，门槛也更高一些。协议方面的支持范围，以[sing-box 官方文档](https://sing-box.sagernet.org/)为准，不同协议的区别见[机场协议怎么选](/zhinan/jichang-xieyi/)。

项目的官方渠道有两个，互相印证：GitHub 上 SagerNet 组织下的 [sing-box 仓库](https://github.com/SagerNet/sing-box)，以及[官方文档站](https://sing-box.sagernet.org/)。

和 Clash 系客户端相比，sing-box 的重点不在界面，而在“内核 + 配置”。因此很多第三方客户端把它当作内核使用，用户不需要直接面对 JSON。内核的概念见[代理内核](/cidian/neihe/)。

## 适合谁，不适合谁

**适合：**

- 愿意读文档、能看懂 JSON 配置的用户，想精确控制入站、出站和路由。
- 机场提供了 sing-box 格式的订阅，或者你自己有服务器和节点配置。
- 需要在路由器、服务器等没有图形界面的环境里运行代理。
- 想用官方的安卓或苹果客户端，而不是第三方封装。

**不适合：**

- 第一次接触梯子、只想“粘贴订阅就用”的新手。这类需求看 [Hiddify 下载](/xiazai/hiddify/)页介绍的客户端更省事。
- 机场只给 Clash 订阅，又不想折腾格式转换的人。
- 不想花时间读文档和排查配置错误的人。配置字段随版本调整，排错需要耐心。

## sing-box 下载：先分清内核与各平台官方客户端

下表列出各平台上常见的形态。具体名称、上架情况和获取方式会变，一律以官方文档为准。

| 平台 | 常见形态 | 怎么获取 | 配置方式 |
| --- | --- | --- | --- |
| Windows、Linux | 官方文档客户端页列出的 sing-box for Desktop，或官方发布页上的命令行程序 | 官方文档与官方仓库发布页 | JSON 配置文件，或客户端内导入 |
| macOS | 官方的 Apple 平台客户端（sing-box for Apple platforms），或命令行程序 | 官方仓库与官方文档 | JSON，或客户端内导入 |
| iPhone、iPad | 官方的 Apple 平台客户端（文档中的 iOS 客户端） | App Store，以官方文档为准 | 客户端内导入配置 |
| Apple TV | 同属 Apple 平台客户端（文档写明覆盖 tvOS） | App Store，以官方文档为准 | 客户端内导入配置 |
| 安卓 | 官方的 sing-box for Android | 官方仓库发布页及官方文档提到的渠道 | 客户端内导入配置 |

挑选命令行程序时，按系统和处理器架构对号入座，文件名里会写明，比如 windows、linux、darwin 与 amd64、arm64 等字样。再留意三点：

1. 选标着 Latest 的正式版，Pre-release 是测试构建，求稳就不要选。
2. Source code 压缩包是源代码，不是可执行文件。
3. 同一版本下并列着很多系统和架构的文件，不属于你设备的那些，一个都不要下。

表里 iPhone、iPad 和 Apple TV 这几行都经由商店分发，商店地区里搜不到的话，准备账户的办法放在[外区 Apple ID 怎么准备](/jiaocheng/waiqu-apple-id/)里，这里不展开。

## sing-box 下载来源核对：哪些线索能证明出自官方

- **两个渠道互相对照。** 从官方文档站的安装或下载页面，点进它指向的仓库；也可以反过来，从仓库主页的链接跳到文档站。两边指向同一个项目，才可信。
- **组织名与仓库名。** 地址里 github.com 后面应当依次是 SagerNet 和 sing-box。换成任何别的账号，哪怕仓库同名，也只能当作转存或改版。
- **商店版从文档进入。** 苹果平台和安卓的商店版本，从官方文档里给出的链接进入商店页面，不要在商店里自己搜索后凭名字下载。
- **文件摘要。** 发布页如果附有摘要，用系统自带的命令算出本地文件的 SHA256，两串字符逐位一致才算数：

```text
macOS 或 Linux：shasum -a 256 你下载的文件
Windows PowerShell：Get-FileHash .\你下载的文件 -Algorithm SHA256
```

- **自查版本信息。** 解压后在终端里运行 `sing-box version`，会显示内核版本和编译信息，应当与你下载的版本对应。官方发布包与自行编译的包，功能标签可能不同，缺少标签时部分配置会报错。
- **不信后缀。** 官方文档里找不到叫“增强”“免配置”的版本，遇到这类名字的安装包，按 [破解版梯子软件的风险](/bikeng/pojie-kehuduan/) 里的思路处理。

仿冒页面的特征，见[机场假官网怎么识别](/bikeng/jia-guanwang/)。

## sing-box 第一次使用要做的三件事

1. **准备配置。** 没有现成配置就用不起来。如果机场提供 sing-box 格式的订阅，在图形客户端里按提示导入远程配置即可；机场只给通用订阅时，要先转换格式，转换的做法和风险见[订阅转换是什么](/jiaocheng/dingyue-zhuanhuan/)。
2. **先检查，再运行。** 命令行用户在启动前先检查配置，避免带着错误运行：

   ```text
   sing-box check -c config.json
   sing-box run -c config.json
   ```

   第一条会指出配置里不合规的字段，第二条才是真正启动。配置字段随版本调整，旧教程里的写法可能失效，出错时先对照官方文档里的配置说明和变更说明。

3. **验证路由。** 配置跑起来之后，要确认的不是“能不能上网”，而是路由有没有按你写的走：国内站点应当落在直连出站，境外站点落在代理出站。各打开一个，再对照日志或客户端的连接面板，与规则的本意一致才算完成。规则的写法思路见[分流规则怎么写](/jiaocheng/fenliu-guize/)。

图形客户端里的具体操作，各平台差别较大，完整流程看 [sing-box 使用教程](/jiaocheng/sing-box-jiaocheng/)。

## 和同类客户端的区别

| 客户端 | 形态 | 内核 | 配置方式 | 上手难度 |
| --- | --- | --- | --- | --- |
| sing-box | 内核与官方客户端 | sing-box | JSON 配置文件 | 较高 |
| Hiddify | 多平台图形客户端 | sing-box | 一键导入订阅 | 低 |
| NekoBox for Android | 安卓图形客户端 | sing-box | 导入订阅与节点 | 低到中 |
| Karing | 多平台图形客户端 | sing-box | 导入订阅 | 低到中 |
| v2rayN | 桌面图形客户端 | Xray / sing-box | 通用订阅与节点管理 | 中 |
| Clash Verge Rev | 桌面图形客户端 | Mihomo | Clash 订阅 | 低到中 |

前四款用的是同一个内核。选 sing-box 本体，换来的是控制力，付出的是学习成本；选 [Hiddify](/xiazai/hiddify/)、[NekoBox](/xiazai/nekobox/) 这类封装好的客户端，则是用少量设置换来省事。在它们之间选，看的是你要不要自己动手写配置，而不是谁“更快”。

## 下一步

- **想从最简单的路径开始**：先试 Hiddify 或 NekoBox，用熟了再回来看 sing-box 本体。
- **决定用 sing-box 本体**：照着 [sing-box 使用教程](/jiaocheng/sing-box-jiaocheng/)走一遍，先检查配置，再运行。
- **还没有订阅**：到[机场推荐](/tuijian/)看榜单数据，确认套餐提供 sing-box 格式或通用订阅。
- **想弄清协议差别**：读[机场协议怎么选](/zhinan/jichang-xieyi/)，其中 [Hysteria2](/cidian/hysteria2/) 一类较新的协议，要看内核和客户端是否支持。
