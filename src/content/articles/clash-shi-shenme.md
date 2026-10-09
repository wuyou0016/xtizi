---
type: zhinan
title: "Clash 是什么？2026 还能用的分支与内核"
description: "Clash 是什么？它是一类按规则分流的代理内核，加上围绕它做的图形客户端。原版已停更，现在说的 Clash 多指 Mihomo（Clash Meta）内核及其客户端。本文讲清 Clash 内核、YAML 配置、规则分流和各平台还能用的分支。"
category: 线路与协议
primaryKeyword: Clash 是什么
secondaryKeywords: [Clash, Clash 内核, Clash Meta]
difficulty: beginner
publishedAt: 2026-10-08
updatedAt: 2026-10-08
answer: "Clash 是一类按规则分流的代理内核加图形客户端的统称。原版内核与 Clash for Windows 已在 2023 年底停更，现在说的 Clash 多指社区延续的 Mihomo（Clash Meta）内核，以及基于它的 Clash Verge Rev 等客户端。"
limits:
  - 本文只讲 Clash 是什么和怎么区分分支，不涉及具体机场的订阅质量。
  - 各客户端的菜单名称和功能会随版本变化，操作细节以当前版本和官方文档为准。
  - 本文不给出客户端的版本号，版本信息请看下载页的数据卡。
sources:
  - title: Mihomo（Clash Meta）文档
    url: https://wiki.metacubex.one/
  - title: Mihomo 内核官方仓库
    url: https://github.com/MetaCubeX/mihomo
  - title: Clash Verge Rev 官方仓库
    url: https://github.com/clash-verge-rev/clash-verge-rev
rankBlock: clash
relatedTopics: [clash-jichang, v2ray-shi-shenme, tizi-gongju, neihe, fenliu, celue-zu]
faqs:
  - q: Clash 现在还能用吗？
    a: 原版 Clash 内核已经停更，但社区延续下来的 Mihomo（Clash Meta）内核仍在被多款客户端使用，所以说的 Clash 通常还能用。要注意的是，应该选基于 Mihomo 的客户端，并从官方仓库或应用商店下载，不要继续安装旧教程里停更的原版软件。
  - q: Clash、Clash Meta 和 Mihomo 是什么关系？
    a: Clash Meta 是社区在原版基础上增加功能的分支，后来项目以 Mihomo 之名发布，很多教程仍沿用 Clash Meta 的旧称，指的基本是同一个内核。具体名称沿革和协议支持范围，以 Mihomo 官方文档为准。
  - q: 装了 Clash 就能上外网吗？
    a: 不能。Clash 只是一个按规则转发流量的工具，本身不提供节点。你还需要有节点的来源，通常是机场给的订阅链接，导入客户端后才能使用。没有节点，Clash 只能做直连转发，起不到代理作用。
  - q: Clash 和 V2Ray 哪个更好？
    a: 两者不是同一层面的比较。它们是不同的内核家族，配置格式和订阅格式不同，各有适合的客户端。很多机场两种格式都提供。看你习惯的客户端和需要的功能来选，规则分流更方便的往往是 Clash 系，详细对比见站内 V2Ray 相关文章。
  - q: Clash 是 VPN 吗？
    a: 严格说不是。Clash 属于代理客户端，使用的是代理协议，而不是 WireGuard 这类隧道协议。手机上之所以出现 VPN 图标，是因为客户端借用系统的 VPN 接口来接管流量。两者的区别在站内有专门的文章讲解。
---

Clash 是什么？简单说，它是一类按规则分流的代理内核，加上围绕它做出来的图形客户端。原版 Clash 内核与 Clash for Windows 的仓库已在 2023 年底删除、停止更新，现在人们说的 Clash，多指社区延续下来的 Mihomo（Clash Meta）内核，以及基于它的图形客户端。下面从内核、配置、分流到客户端选择，一步步讲清楚。

## Clash 是什么：一个内核加一份配置文件

很多人以为 Clash 是一个 App，实际上它由两部分组成：

- **内核**：真正干活的程序，没有漂亮的界面，负责读取配置、接管流量、判断每一条连接该怎么走。
- **配置文件**：一份告诉内核“有哪些节点、怎么分组、什么流量走哪里”的文本文件，格式是 YAML。

你平时在电脑或手机上点开的那个带按钮的程序，是**图形客户端**。它把内核打包进来，用界面替你管理配置文件、切换节点、开关系统代理。

所以当有人说“我用的是 Clash”，他可能指的是内核，也可能指的是某款客户端。这个词在日常里是一个泛称。关于内核本身是什么，词典里也有简要解释：[代理内核](/cidian/neihe/)。

## 原版停更之后，现在说的 Clash 指什么

这是最容易让新手困惑的地方。网上有大量早年的教程，推荐的软件现在已经不再维护。下表把几个常见名字的现状理清：

| 名称 | 是什么 | 现状 | 建议 |
| --- | --- | --- | --- |
| 原版 Clash 内核 | 最初的 Clash 项目 | 仓库已在 2023 年底删除，停止更新 | 不要作为新装的选择 |
| Clash for Windows | 基于原版内核的 Windows 图形客户端 | 仓库同样已删除并停更 | 不要再下载旧安装包 |
| Mihomo（Clash Meta）内核 | 社区在原版基础上延续、扩展的内核 | 持续由社区维护，是目前多数 Clash 系客户端使用的内核 | 优先选择基于它的客户端 |
| Mihomo 系图形客户端 | 本站收录的 Clash Verge Rev、Clash Party、FlClash、Clash Nyanpasu、ClashX Meta、Clash Meta for Android | 各自独立维护，更新节奏不同 | 按系统选，并查看官方仓库的更新情况 |
| OpenClash | OpenWrt 路由器上的插件，内核为 Mihomo | 独立项目 | 路由器场景使用 |
| Stash | iOS 与 macOS 的付费应用，兼容 Clash 配置 | 在 App Store 上架 | 苹果设备可选，见下文平台对照 |

关于名称，**Clash Meta** 是社区分支早期的叫法，后来项目以 **Mihomo** 之名发布。很多教程仍沿用旧称，读到时可以当成同一个内核。具体的名称沿革和功能范围，以 [Mihomo 官方文档](https://wiki.metacubex.one/) 和 [官方仓库](https://github.com/MetaCubeX/mihomo) 为准。

这里有一个直接影响你选择的结论：**选 Clash 系客户端，要选内核是 Mihomo 的**，原因是不少较新的协议只有它支持，这一点在[Clash 机场怎么选](/zhinan/clash-jichang/)里会展开讲。

## Clash 内核和图形客户端，各管什么

| 层次 | 谁负责 | 做什么 | 你在哪里接触它 |
| --- | --- | --- | --- |
| 内核 | Mihomo 等 | 读取配置、建立连接、按规则决定每条流量的去向、处理 DNS | 一般接触不到，只在设置里看到名称 |
| 图形客户端 | Clash Verge Rev 等 | 导入订阅、切换节点和模式、开关系统代理或 TUN、更新配置 | 日常操作都在这里 |
| 配置文件 | 机场订阅或你自己编辑 | 描述节点、策略组和规则 | 导入订阅后自动生成 |

这样分层的好处是：同一个内核可以配多个不同的客户端，你换客户端不用换配置。坏处是出了问题要分清是哪一层的：节点连不上多半是订阅或线路的问题，开关代理失败多半是客户端的权限或系统设置的问题。

## 配置文件和规则分流：Clash 的核心特色

Clash 最有辨识度的功能，是**按规则分流**：国内网站直连，国外网站走代理，其余走兜底。这一切都写在 YAML 配置文件里。下面是一个只展示结构的示意，字段为占位，不能直接使用：

```yaml
mixed-port: 端口号
mode: rule
proxies:
  - name: 节点一
    type: 协议类型
    server: 服务器地址
proxy-groups:
  - name: 代理选择
    type: select
    proxies: [节点一, DIRECT]
rules:
  - DOMAIN-SUFFIX,example.com,代理选择
  - GEOIP,CN,DIRECT
  - MATCH,代理选择
```

读懂这几段，就读懂了 Clash 的一半：

- `proxies` 是节点列表，通常由机场订阅自动生成。
- `proxy-groups` 是策略组，决定怎么选节点，比如手动选、自动选延迟最低的、故障时转移。用法见[策略组怎么用](/jiaocheng/celue-zu/)。
- `rules` 是规则，**从上往下逐条匹配，命中第一条就按它的去向走**，最后一条 `MATCH` 兜底。
- `mode` 决定整体工作方式：规则模式、全局模式、直连模式，选择方法见[Clash 规则模式、全局模式、直连模式怎么选](/jiaocheng/guize-quanju-zhilian/)。

规则怎么写、怎么让国内直连，见[分流规则怎么写](/jiaocheng/fenliu-guize/)。大多数人不需要手写，机场订阅里已经带好了规则，导入即可使用。

## 各平台还能用的 Clash 分支与客户端

下表以本站收录的客户端为准，内核信息来自站内资料，是否仍在更新请到各自的官方仓库确认：

| 平台 | 可选的 Clash 系客户端 | 内核 | 备注 |
| --- | --- | --- | --- |
| Windows | Clash Verge Rev、Clash Party、FlClash、Clash Nyanpasu | Mihomo | 图形界面，新手友好 |
| macOS | Clash Verge Rev、Clash Party、FlClash、Clash Nyanpasu、ClashX Meta，另有 Stash | Mihomo；Stash 为兼容 Clash 配置 | ClashX Meta 是菜单栏形态 |
| Linux | Clash Verge Rev、Clash Party、FlClash、Clash Nyanpasu，另有命令行的 Mihomo 内核 | Mihomo | 内核可以单独运行 |
| Android | FlClash、Clash Meta for Android | Mihomo | 通过系统的 VPN 接口接管流量 |
| iPhone | Stash | 兼容 Clash 配置 | App Store 付费应用，不在中国大陆区商店上架，需要其他地区的 Apple ID |
| 路由器 | OpenClash | Mihomo | OpenWrt 插件 |

想看某个客户端的下载地址和适用系统，到[下载中心](/xiazai/)按系统挑。如果你是 Windows 用户，可以先看[Clash Verge Rev 下载](/xiazai/clash-verge-rev/)，想核对它是否还在更新，看[Clash Verge Rev 官方仓库](https://github.com/clash-verge-rev/clash-verge-rev)的发布记录。

## 几个常见的误解

回到“Clash 是什么”这个问题，下面四种说法最容易搞混：

| 误解 | 事实 |
| --- | --- |
| Clash 就是机场 | Clash 是客户端和内核，机场是卖订阅的服务商，两者是不同的东西，见[机场是什么意思](/zhinan/jichang-shi-shenme/) |
| 装好 Clash 就能直接用 | 还需要订阅或节点，没有节点的 Clash 起不到代理作用 |
| Clash 是一种 VPN | 它是代理客户端，手机上的 VPN 图标只是借用了系统接口，区别见[VPN 梯子](/zhinan/vpn-tizi/) |
| 旧教程推荐的 Clash 版本还能用 | 旧教程里的软件可能早已停更，以官方页面和下载页为准 |

## 怎么确认你下载的 Clash 还在维护

下载之前，花几分钟自己核对，比事后排查省事得多：

1. 打开客户端的设置或关于页面，找到内核名称，确认是 Mihomo。不同客户端的菜单名称不同，以当前界面为准。
2. 到客户端的官方仓库，看最近有没有新的发布和提交。仓库长期没有动静，就要谨慎。
3. 对照本站下载页的版本数据卡，看你要装的版本是否是当前的。
4. 只从官方仓库或应用商店下载。来路不明的整合包和修改版有安全风险，见[破解版梯子软件能用吗](/bikeng/pojie-kehuduan/)。
5. 遇到配置或协议支持的疑问，以 Mihomo 官方文档为准，而不是以某篇旧教程为准。

做到这五步，你就不会被“最新版 Clash for Windows”这类过期说法误导。

## 下一步：选客户端，再选订阅

1. 在[下载中心](/xiazai/)按你的系统挑一个 Clash 系客户端。
2. 装好后，学习怎么导入订阅，通用方法见[订阅链接怎么用](/jiaocheng/dingyue-daoru/)。
3. 还没有订阅的话，读[Clash 机场怎么选](/zhinan/clash-jichang/)，再到[梯子推荐](/tuijian/)里筛选候选。
4. 对 V2Ray 这条路线好奇，可以对照阅读[V2Ray 是什么](/zhinan/v2ray-shi-shenme/)。
