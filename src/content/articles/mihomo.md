---
type: xiazai
title: Mihomo 内核下载：官方地址与最新版本
description: "Mihomo 下载只认 GitHub 上 MetaCubeX 组织的 mihomo 仓库发布页。它是没有界面的 Clash Meta 内核，多数 Clash 客户端已内置。本页讲谁需要单独下载、各系统文件怎么挑、第一次运行怎么验证，以及与 sing-box 内核的区别。"
category: 客户端下载
primaryKeyword: Mihomo 下载
secondaryKeywords: [Mihomo, Clash Meta 内核, Clash 内核下载]
difficulty: advanced
publishedAt: 2026-10-08
updatedAt: 2026-10-08
answer: "Mihomo 是 Clash Meta 内核，命令行程序，没有图形界面，多数 Clash 系客户端已经内置，普通用户不需要单独下载。适合 Linux 服务器、路由器或想手动换内核的人，只从 MetaCubeX 组织的官方仓库发布页获取。"
limits:
  - 发布页各文件的命名规则会随版本调整，本页只讲挑选思路，具体文件名以官方发布页为准。
  - 本页的命令和配置片段是最小示例，完整参数与配置项请查官方文档，不保证适用于所有版本。
  - 本页不介绍系统服务的写法和开机自启，这部分因发行版而异，请参考官方文档和你系统的说明。
sources:
  - title: Mihomo 内核官方仓库
    url: https://github.com/MetaCubeX/mihomo
  - title: Mihomo（Clash Meta）文档
    url: https://wiki.metacubex.one/
client: mihomo
rankBlock: clash
relatedTopics: [clash-shi-shenme, linux, clash-verge-rev, clash-dns, neihe]
faqs:
  - q: Mihomo 和 Clash Meta 是同一个东西吗？
    a: 是同一个项目。它最早叫 Clash Meta，是在原版 Clash 内核停更之后由社区接手并增强的分支，后来改名为 Mihomo，仓库在 GitHub 的 MetaCubeX 组织下。网上的教程里 Clash Meta、Meta 内核、Mihomo 说的通常都是它，只是新旧名字并存。
  - q: 普通用户需要单独做 Mihomo 下载吗？
    a: 通常不需要。Clash Verge Rev、Clash Party、FlClash 等 Clash 系图形客户端都已经内置了这个内核，装客户端的同时内核就位。只有在没有图形界面的 Linux 机器上，或者你想手动换成指定内核时，才需要直接从官方仓库下载。
  - q: 下载后双击没有反应，是下错了吗？
    a: 多半没下错。它是命令行程序，没有图形界面，双击运行不会弹出窗口。正确用法是在终端里指定配置目录来启动，例如准备好目录和配置文件后，用 -d 参数告诉它去哪里读配置。想要点选操作的界面，请改用带图形界面的 Clash 系客户端。
  - q: 文件名里的 compatible 是什么意思？
    a: 一般表示针对较老的处理器或不支持某些指令集的环境准备的构建。处理器较新时可以选不带该标记的版本，不确定就选兼容构建，通常更保险。各标记的确切含义，以官方发布页和文档的说明为准，不要凭文件名猜。
  - q: 启动时提示缺少地理数据库文件怎么办？
    a: 内核启动时需要地理位置相关的数据库来支持分流规则。多数情况下它会在首次启动时尝试自动下载，网络受限时下载会失败，这时需要手动从官方渠道获取对应文件，放到配置目录里。具体文件名以官方文档为准。
---

先说结论：绝大多数人不需要单独做 Mihomo 下载。Clash Verge Rev、Clash Party、FlClash 这些 Clash 系图形客户端，里面都已经带着这个内核。只有 Linux 服务器、没有图形界面的机器，或者想手动换内核的人，才需要自己去官方仓库取文件。版本号、发布日期和开源协议见页面顶部的数据卡，下面讲谁需要、文件怎么挑、怎么验证。

## Mihomo 是什么：Clash 生态现在用的内核

原版 Clash 内核与 Clash for Windows 的仓库已在 2023 年底删除停更。社区接手并增强出来的分支，最早叫 Clash Meta，后来改名为 Mihomo。今天网上说的 Clash 能用，指的多半是这个内核，以及基于它的图形客户端。这段来龙去脉，可以先读 [Clash 是什么](/zhinan/clash-shi-shenme/)。

它的角色是“引擎”，不是“整车”：

- 它是一个命令行程序，没有窗口，也不管导入订阅的界面。
- 它读取一份 YAML 配置，按配置里的节点和规则转发流量。
- 图形客户端做的事，是替你生成配置、启动内核、提供点选界面。

内核和客户端的分工，术语页 [代理内核](/cidian/neihe/) 有更短的解释。

## 谁需要单独下载，谁不需要

| 你的情况 | 要不要单独下载 | 更合适的做法 |
| --- | --- | --- |
| Windows、Mac 日常使用 | 不需要 | 装一款自带内核的客户端 |
| 安卓手机 | 不需要 | 安卓上的 Clash 系客户端已内置 |
| 没有图形界面的 Linux 机器 | 需要 | 直接下载内核，按配置运行 |
| 想试新内核或固定某个内核 | 可能需要 | 先确认客户端是否允许手动替换内核 |
| OpenWrt 路由器 | 通常不需要 | OpenClash 插件管理内核，见 [OpenClash 下载](/xiazai/openclash/) |

Linux 上有哪些桌面和命令行工具可选，对照见 [Linux 梯子下载](/xiazai/linux/) 页；桌面上的图形选择，可以看 [Clash Verge Rev 下载](/xiazai/clash-verge-rev/) 页。

## Mihomo 下载：官方发布页的文件怎么挑

官方发布页是 [github.com/MetaCubeX/mihomo/releases](https://github.com/MetaCubeX/mihomo/releases)。Assets 里文件很多，因为每个系统和处理器架构都有一份。选文件时抓住三个维度：

| 维度 | 怎么判断 | 文件名里的线索 |
| --- | --- | --- |
| 操作系统 | Windows、Linux、macOS | windows、linux、darwin 一类 |
| 处理器架构 | x86 的 64 位、ARM 的 64 位等 | amd64、arm64 一类 |
| 兼容程度 | 处理器是否较老 | 可能带 compatible 或类似标记 |

按这个顺序挑：

1. 确认条目标着 Latest。发布页上可能同时存在滚动更新的预发布条目，求稳就别选。
2. 在终端里用 `uname -m` 查看架构；Windows 用户在系统信息里看“系统类型”。
3. 在 Assets 里找到系统和架构都对得上的文件。Linux 常见压缩格式为 gz，Windows 常见为 zip，也可能提供 deb、rpm 包，以发布页现有文件为准。
4. 不确定处理器新旧时，选带兼容标记的构建，兼容构建对老设备更友好。
5. 下载后解压，改个好记的名字，放到固定目录，给可执行权限。

## 怎么确认下载的是官方内核

- **地址**。是 `github.com/MetaCubeX/mihomo`，和页面顶部数据卡的官方仓库一致。
- **文件来源**。只从该仓库发布页的 Assets 下载，不用网盘、群文件和“整合包”。
- **校验值**。发布说明或附带文件里提供了校验值的，下载后在本机计算比对。
- **版本信息**。运行 `mihomo -v`，输出的版本信息应与你下载的条目一致，也与数据卡显示的最新版相符。
- **功能边界**。官方内核不会弹出登录窗口，也不会要求付费激活，出现这些的都是被修改过的包。

## 第一次运行要做的三件事

1. **先验证程序能跑。** 在终端里执行 `mihomo -v`，能打印出版本和系统信息就说明架构选对了；报格式错误，多半是架构选错。
2. **准备工作目录和最小配置。** 新建一个目录，里面放 config.yaml。下面是一份最小示例，端口号仅为举例，订阅地址是占位：

```yaml
mixed-port: 7890
mode: rule
proxy-providers:
  airport:
    type: http
    url: "https://example.com/你的订阅链接"
    interval: 3600
    path: ./providers/airport.yaml
proxy-groups:
  - name: 代理
    type: select
    use:
      - airport
rules:
  - MATCH,代理
```

3. **先检查配置，再启动。** 用 `mihomo -t -d 你的目录` 检查配置语法，通过后用 `mihomo -d 你的目录` 启动。再用 `curl -x http://127.0.0.1:7890 -I https://你要访问的网站` 验证，端口以你配置里写的为准。

首次启动时若缺少地理数据库，内核会尝试自动下载，网络受限时会失败，需要手动放置，文件名以官方文档为准。配置项的完整含义，查 [Mihomo（Clash Meta）文档](https://wiki.metacubex.one/)。

## 和带界面的客户端、sing-box 内核的区别

| 对比项 | Mihomo 内核 | 带界面的 Clash 客户端 | sing-box 内核 |
| --- | --- | --- | --- |
| 形态 | 命令行程序 | 图形界面加内置内核 | 命令行程序，另有官方客户端 |
| 配置方式 | 手写 YAML | 图形界面导入、点选 | 手写 JSON 配置 |
| 订阅格式 | Clash 格式 | Clash 格式 | 自家格式，机场订阅常需转换 |
| 上手难度 | 高 | 低到中 | 高 |
| 更适合谁 | 服务器、需要精确控制的人 | 绝大多数桌面用户 | 偏好 sing-box 生态的人 |

sing-box 是另一条技术路线，细节见 [sing-box 下载](/xiazai/sing-box/) 页。遇到 DNS 相关的配置问题，先读 [Clash DNS 怎么设置](/jiaocheng/clash-dns/)。

## 下一步

- 刚完成 Mihomo 下载并跑通：把运行方式固化，用系统服务管理它，写法参考官方文档和你的发行版说明。
- 其实只是想在电脑上用 Clash：回头装一个自带内核的图形客户端，比自己维护内核省心得多。
- 还没有订阅：到 [梯子推荐](/tuijian/) 看榜单数据，确认套餐提供 Clash 订阅。
