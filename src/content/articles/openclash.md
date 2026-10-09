---
type: xiazai
title: OpenClash 下载：OpenWrt 插件官方地址与最新版本
description: "OpenClash 下载只认 GitHub 上 vernesong 的 OpenClash 仓库发布页。本页讲清这款 OpenWrt 路由器插件适合谁、ipk 与 apk 包怎么挑、安装前要查什么、装好先做哪三件事，以及 OpenClash 安装与电脑客户端的取舍。"
category: 客户端下载
primaryKeyword: OpenClash 下载
secondaryKeywords: [OpenClash, OpenClash 安装, OpenWrt Clash]
difficulty: advanced
publishedAt: 2026-10-08
updatedAt: 2026-10-08
answer: "OpenClash 是运行在 OpenWrt 路由器上的 Clash 插件，带 LuCI 管理界面，使用 mihomo 内核。安装包只从官方仓库发布页获取，格式为 ipk 或 apk，依赖项与固件版本相关，装之前先查固件、架构和包管理器。"
limits:
  - 依赖包的名称和数量随固件与插件版本变化，本页只举常见例子，完整清单以官方仓库的说明为准。
  - 本页没有核对任何具体路由器型号的兼容情况，闪存和内存是否够用需要你查自己设备的规格。
  - 本页只讲获取与安装前的准备，导入订阅和运行模式的步骤请看 OpenClash 使用教程。
sources:
  - title: OpenClash 官方仓库
    url: https://github.com/vernesong/OpenClash
client: openclash
rankBlock: clash
relatedTopics: [openclash-luyouqi, luyouqi, dianshi-tizi, clash-shi-shenme, juyuwang-gongxiang]
faqs:
  - q: OpenClash 能装在普通家用路由器上吗？
    a: 不能直接装。它是 OpenWrt 的插件，只能运行在已经刷成 OpenWrt 或其衍生固件的设备上，原厂固件的路由器没有对应的包管理环境。是否能刷机、刷机的风险和保修影响，请先查你的路由器型号在 OpenWrt 官方设备页的支持情况，再决定要不要动手。
  - q: ipk 和 apk 两种安装包该选哪个？
    a: 看路由器固件用的包管理器。较早的 OpenWrt 使用 opkg，对应 ipk 包；较新的版本改用 apk 包管理器，对应 apk 包。在路由器终端分别输入 opkg 和 apk，能正常响应的那个就是你该选的格式。具体哪个版本开始切换，以固件自己的文档为准。
  - q: OpenClash 要付费吗？
    a: 不需要。它是开源软件，从官方仓库发布页下载使用不收费，开源协议见页面顶部的数据卡。插件本身不带节点，需要你另外准备机场订阅，花钱的是订阅。任何要求付费下载或卖授权码的页面，都不是官方渠道。
  - q: 装好后内核是自带的吗？
    a: 插件包本身通常不包含内核，内核需要在插件界面里更新下载，或者手动放到指定目录，具体做法以官方仓库的说明为准。路由器无法联网下载时，可以在电脑上从官方渠道取得对应架构的内核，再上传到路由器。
  - q: 配置出错导致全家断网怎么办？
    a: 这是路由器里使用代理插件的主要风险。动手前先在固件管理页导出一份备份，并准备好用网线直连路由器管理地址的方式。出问题时先停止并禁用插件，网络多半能恢复；仍不行就恢复备份。排查思路可以参考站内梯子连不上的排查页。
---

OpenClash 不是装在电脑上的软件，而是装在 OpenWrt 路由器里的插件，所以 OpenClash 下载比电脑端多一步功课：先弄清你的路由器固件是什么、处理器架构是什么。官方渠道只有 GitHub 上 vernesong 名下的 OpenClash 仓库，版本号、发布日期和开源协议见页面顶部的数据卡。下面讲清它是什么、谁该用、怎么挑包、装之前要防什么。

## OpenClash 是什么：跑在 OpenWrt 里的 Clash 插件

它是一个带 LuCI 网页界面的 OpenWrt 插件，使用 mihomo 内核。你在路由器的管理页面里就能导入订阅、选择节点和运行模式，之后连到这台路由器的手机、电脑、电视和游戏机都能走代理，不必每台设备各装一个客户端。内核的变迁见 [Clash 是什么](/zhinan/clash-shi-shenme/)。

这也带来两个前提：

- 路由器要先运行 OpenWrt 或它的衍生固件，原厂固件无法安装。
- 配置在路由器上，出错影响的是整个家庭网络，而不是一台电脑。

路由器上有哪些梯子插件可选，对照见 [路由器梯子下载](/xiazai/luyouqi/) 页。

## 适合谁，不适合谁

**适合：**

- 已经在用 OpenWrt 路由器，想让全家设备共用一个代理出口的人。
- 家里有电视、游戏机这类装不了客户端的设备，想用 [电视怎么用梯子](/jiaocheng/dianshi-tizi/) 里的路由器方案的人。
- 不怕命令行，愿意自己查日志、改配置的人。

**不适合：**

- 没有刷过机、也没有备用路由器的新手。出错的代价是全家断网。
- 只在一台电脑上用梯子的人。桌面客户端更简单，比如 [Clash Verge Rev 下载](/xiazai/clash-verge-rev/) 页介绍的那款。
- 路由器闪存或内存很小的人。内核和规则文件都要占空间，设备规格不够时会装不下或运行吃力。

## OpenClash 安装前：先查固件、架构和包管理器

动手下载之前，用路由器的 SSH 终端查三样东西：

```
cat /etc/openwrt_release
uname -m
opkg --version
```

第一条的输出里有固件名称、版本和处理器架构；第二条显示内核看到的架构；第三条用来判断包管理器，较新的固件可能没有 opkg，这时改试 apk。查完对照下表：

| 你要确认的项目 | 去哪里看 | 为什么重要 |
| --- | --- | --- |
| 固件类型与版本 | openwrt_release 文件 | 决定依赖包和包管理器 |
| 处理器架构 | 同一文件或 uname 输出 | 决定内核该选哪个架构的文件 |
| 包管理器 | opkg 或 apk 哪个能运行 | 决定下载 ipk 还是 apk |
| 剩余存储与内存 | LuCI 的系统状态页 | 空间不够会装失败或运行卡顿 |
| 防火墙与 DNS 组件 | 固件说明和已装软件列表 | 部分依赖需要替换默认组件 |

## OpenClash 下载：官方发布页上怎么挑 ipk 或 apk

官方发布页是 [github.com/vernesong/OpenClash/releases](https://github.com/vernesong/OpenClash/releases)。按下面的顺序：

1. 确认页面顶部的条目标着 Latest，而不是 Pre-release。
2. 在 Assets 里找到插件包，格式按上一节查到的包管理器选择：opkg 对应 ipk，apk 对应 apk。
3. 插件包本身与处理器架构无关，但内核文件与架构有关，下载内核时必须与 openwrt_release 里的架构一致。
4. 阅读仓库首页的安装说明，里面会列出需要先装好的依赖，例如替换默认 DNS 组件为完整版之类的要求，以官方说明为准。
5. 用 `scp` 或 LuCI 的软件包上传功能，把包传到路由器再安装。

内核的获取方式也要看官方说明：它通常不在插件包里，需要在插件界面里更新，或者手动放到指定目录。

## 装之前的安全清单

- 在 LuCI 的备份页面导出一份当前配置。
- 记下路由器的管理地址，确认可以用网线直连访问。
- 确认闪存、内存足够，别让安装过程把系统挤满。
- 保留一台装了桌面客户端的电脑，作为出问题时的退路。
- 先在非高峰时段操作，避免影响家人使用网络。

出现问题时，先停止并禁用插件，网络多半会恢复。恢复不了的排查顺序，见 [梯子连不上怎么办](/paicha/tizi-lianbushang/)。

## 第一次打开要做的三件事

1. **看运行状态和内核。** 进入插件页面，确认内核已经就位、服务可以启动；内核缺失时先按官方说明补上。
2. **添加订阅。** 在配置订阅或配置文件管理页面，填入机场的 Clash 订阅地址并更新。完整步骤见 [OpenClash 使用教程](/jiaocheng/openclash-luyouqi/)。
3. **用一台设备验证。** 启动之后，只用一台手机或电脑测试国内和国外网站，没问题再让其他设备跟着用。

## 和电脑客户端、mihomo 内核的区别

| 对比项 | OpenClash | 电脑端 Clash Verge Rev | mihomo 内核 |
| --- | --- | --- | --- |
| 运行位置 | OpenWrt 路由器 | Windows、macOS、Linux 电脑 | 命令行，适合 Linux 机器 |
| 谁在用代理 | 连到路由器的全部设备 | 仅本机 | 取决于你怎么部署 |
| 界面 | LuCI 网页 | 桌面图形界面 | 无界面 |
| 上手难度 | 高 | 低到中 | 高 |
| 出错影响 | 整个家庭网络 | 一台电脑 | 取决于部署位置 |

OpenClash 使用的就是 mihomo 内核，只是由插件替你管理了启动、配置和界面。想了解内核本身，见 [Mihomo 内核下载](/xiazai/mihomo/) 页。

## 下一步

- 刚做完 OpenClash 下载：先备份配置，再按安全清单走完，最后读 [OpenClash 使用教程](/jiaocheng/openclash-luyouqi/)。
- 路由器还没刷 OpenWrt：不要急着装插件，先评估要不要承担刷机的风险，也可以先用电脑客户端过渡。
- 还没有订阅：到 [梯子推荐](/tuijian/) 看榜单数据，确认套餐提供 Clash 订阅，格式判断见 [Clash 机场](/zhinan/clash-jichang/)。
