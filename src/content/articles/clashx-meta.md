---
type: xiazai
title: ClashX Meta 下载：Mac 版官方地址与最新版本
description: "ClashX Meta 下载的官方渠道是 GitHub 上 MetaCubeX 组织的 ClashX.Meta 仓库发布页。本页说明这款 Mac 菜单栏 Clash 客户端适合谁、安装包怎么挑、首次打开如何放行，以及它和 Clash Verge Rev 的取舍。"
category: 客户端下载
primaryKeyword: ClashX Meta 下载
secondaryKeywords: [ClashX Meta, ClashX 下载, Clash Mac 下载]
difficulty: beginner
publishedAt: 2026-10-08
updatedAt: 2026-10-08
answer: "ClashX Meta 是只支持 macOS 的菜单栏 Clash 客户端，使用 mihomo 内核，沿用 ClashX 的操作习惯。安装包只从 GitHub 上 MetaCubeX 组织 ClashX.Meta 仓库的发布页下载，按本机是 Apple 芯片还是 Intel 选对文件。"
limits:
  - 安装包文件名、菜单项的叫法随版本调整，本页只描述功能和常见叫法，以官方发布页与当前版本界面为准。
  - 本页没有核对每个版本对 macOS 系统版本的要求，较旧的系统能否运行请看发布页的说明。
  - 本页不比较各客户端的连接速度，同内核的客户端在同一订阅下的差异需要你自己验证。
sources:
  - title: ClashX Meta 官方仓库
    url: https://github.com/MetaCubeX/ClashX.Meta
client: clashx-meta
rankBlock: clash
relatedTopics: [mac, clash-verge-rev, clash-verge-rev-mac, clash-shi-shenme, xitong-daili]
faqs:
  - q: ClashX Meta 和原来的 ClashX 是同一个软件吗？
    a: 不是同一个。ClashX Meta 沿用了 ClashX 的菜单栏操作方式，但内核换成了 mihomo，由 MetaCubeX 组织维护。原版 Clash 内核已在 2023 年底停更，依赖它的老客户端不再有后续支持，所以现在要装的是 Meta 这一支，下载时认准 ClashX.Meta 仓库。
  - q: ClashX Meta 有 Windows 版或手机版吗？
    a: 没有。它只面向 macOS，本站收录的支持系统只有 Mac。Windows 和 Linux 上可以看 Clash Verge Rev、Clash Party 等桌面客户端，安卓上可以看 FlClash 或 Clash Meta for Android。应用商店里自称同名手机版的应用不是这个项目发布的。
  - q: 下载后提示无法打开或来自未知开发者怎么办？
    a: 先回头核对来源：地址是否为 github.com/MetaCubeX/ClashX.Meta 下的发布页，文件是否完整。来源无误的话，到系统设置的隐私与安全性页面找到被拦截的应用，选择仍要打开即可。提示文字随 macOS 版本略有不同，以你系统上的实际提示为准。
  - q: 导入订阅后为什么没有节点？
    a: 先确认复制的是 Clash 格式的订阅链接，并且订阅未过期、流量未用尽。ClashX Meta 里添加的是托管配置或远程配置地址，添加后还要选中它并手动更新一次。仍然为空时，把订阅链接放进浏览器看是否能返回内容，再按订阅更新失败的排查步骤逐项看。
  - q: ClashX Meta 要付费吗？
    a: 不需要。它是开源软件，从官方仓库发布页下载使用不收费，开源协议见页面顶部的数据卡。软件本身不带节点，花钱的是机场订阅。任何要求付费下载、购买激活码或授权码的页面，都不是官方渠道。
---

在 Mac 上找 Clash，很多人搜到的是 ClashX，但真正该装的是它的 Meta 分支。ClashX Meta 下载只认 GitHub 上 MetaCubeX 组织的 ClashX.Meta 仓库，它是只面向 macOS 的菜单栏客户端，使用 mihomo 内核，操作习惯和老 ClashX 基本一脉相承。版本号、发布日期和开源协议见页面顶部的数据卡，这里讲数据卡之外的事：它是什么、谁该用、文件怎么选、第一次打开怎么放行。

## ClashX Meta 是什么：菜单栏里的 mihomo 客户端

先理清名字。老 ClashX 依赖的是原版 Clash 内核，而原版 Clash 内核与相关仓库在 2023 年底已删除停更，整个生态随后转向 mihomo（也叫 Clash Meta）内核。ClashX Meta 就是把 ClashX 的外壳接到 mihomo 内核上的延续版本。背景可以看 [Clash 是什么](/zhinan/clash-shi-shenme/)。

它的形态很固定：没有主窗口式的复杂界面，常驻在 Mac 菜单栏，点开图标就能完成多数日常操作。

| 你看到的说法 | 指什么 | 要不要装 |
| --- | --- | --- |
| ClashX | 依赖原版内核的老客户端 | 不建议，上游内核已停更 |
| ClashX Meta | 接入 mihomo 内核的延续版本 | 本页要讲的这个 |
| mihomo / Clash Meta | 内核本身，没有图形界面 | 客户端已内置，通常不用单独装 |

## 适合谁，不适合谁

**适合：**

- 只用 Mac，想要一个常驻菜单栏、点一下就切换模式的轻量客户端的人。
- 以前用过 ClashX，希望保留熟悉的操作方式，同时换到仍在维护的内核上的人。
- 机场提供 Clash 订阅，不需要在图形界面里折腾复杂覆写的人。

**不适合：**

- 需要 Windows、Linux 或手机版本的人。它只支持 macOS。
- 想在图形界面里逐项编辑配置、使用覆写和脚本功能的人。这类需求看 [Clash Verge Rev 下载](/xiazai/clash-verge-rev/) 更合适。
- 用的是只能读通用订阅格式的机场套餐，参见 [Clash 机场](/zhinan/clash-jichang/) 判断格式。

## ClashX Meta 下载：在发布页上怎么选文件

官方发布页是 [github.com/MetaCubeX/ClashX.Meta/releases](https://github.com/MetaCubeX/ClashX.Meta/releases)。选文件的思路只有一条：先搞清你的 Mac 是哪种芯片和多旧的系统，再去找对得上的那个。

1. 点左上角苹果菜单，进入“关于本机”，看“芯片”一栏写的是 Apple 的 M 系列，还是“处理器”一栏写着 Intel。
2. 回到发布页，确认最上面的条目标着 Latest。带 Pre-release 标记的是预发布，适合愿意尝鲜的人。
3. 在 Assets 里找到适合你芯片的文件。发布页有时会按芯片架构或系统版本分别提供构建，文件名里会有标注；是否区分以发布页当前文件为准。
4. 系统版本较旧的 Mac，留意发布说明里对最低系统的要求，以及是否另有兼容构建。
5. 下载完成后，把应用拖进“应用程序”文件夹再启动，不要直接在压缩包或磁盘映像里运行。

Mac 上各类客户端的整体对照，见 [Mac 梯子下载](/xiazai/mac/) 页。

## 首次打开：怎么放行，要授权什么

从 GitHub 下载的应用不一定带有苹果的签名公证，第一次打开被拦是常见情况。按顺序处理：

- **被系统拦截时。** 到系统设置的“隐私与安全性”页面，在安全性区域找到被拦截的应用，选择“仍要打开”。具体文字随 macOS 版本略有差异。
- **要求输入密码时。** 首次启用系统代理，或需要安装辅助组件时，系统可能弹出管理员授权框。这是修改网络设置的正常授权，看清弹窗里写的是 ClashX Meta 再输入。
- **提示已损坏时。** 先怀疑下载不完整或来源不对，回发布页重新下载，不要用来历不明的“修复脚本”。

## 菜单栏里最常用的几项

不同版本的菜单文字会变，下面按功能和常见叫法对照：

| 功能 | 常见叫法 | 什么时候用 |
| --- | --- | --- |
| 开关系统代理 | 设置为系统代理 | 想让浏览器等应用走代理时勾选 |
| 切换出站模式 | 规则、全局、直连 | 日常用规则，排查问题时临时切换，区别见 [规则、全局、直连怎么选](/jiaocheng/guize-quanju-zhilian/) |
| 添加订阅 | 配置、托管配置、远程配置 | 首次使用时粘贴机场的 Clash 订阅链接 |
| 更新订阅 | 更新、立即更新 | 节点变化或订阅换了地址之后 |
| 选节点 | 策略组名称下的子菜单 | 手动指定某个节点时 |
| 开机启动 | 登录时启动 | 想让它跟着系统启动时 |

是否提供类似虚拟网卡的增强接管方式、叫什么名字，以当前版本为准；想弄清它和系统代理的区别，看 [TUN 模式是什么](/jiaocheng/tun-moshi/)。

## 怎么确认设置真的生效了

装好导入订阅之后，别只看菜单里勾没勾，用下面三步核对：

1. **看系统里的代理配置。** 打开“终端”，输入 `scutil --proxy`，输出里应当能看到 HTTP、HTTPS 或 SOCKS 代理已启用，地址是本机，端口与 ClashX Meta 显示的一致。
2. **看浏览器的两种结果。** 访问一个国内网站和一个需要代理的网站，两个都能打开才算分流正常。
3. **关掉再测一次。** 取消勾选系统代理后，需要代理的网站应当打不开，国内网站仍然正常；如果关掉之后整个网络都不通，说明有代理残留，见 [关掉梯子后上不了网](/paicha/guan-tizi-meiwang/)。

## Clash Mac 下载，选 ClashX Meta 还是 Clash Verge Rev

两款都使用 mihomo 内核，同一份订阅放进去，节点和规则的行为一致。差异在使用方式：

| 对比项 | ClashX Meta | Clash Verge Rev |
| --- | --- | --- |
| 支持系统 | 仅 macOS | Windows、macOS、Linux |
| 形态 | 菜单栏常驻，点选为主 | 有主窗口，可图形化调整更多设置 |
| 上手难度 | 低，适合只想快点用起来的人 | 中，设置项更多 |
| 进阶功能 | 以菜单里提供的为主 | 覆写、脚本、服务模式等 |
| 更适合谁 | 只用 Mac、偏好轻量的人 | 想在多系统间用同一款的人 |

如果你想看 Clash Verge Rev 在 Mac 上的完整安装和授权过程，直接看 [Clash Verge Rev Mac 教程](/jiaocheng/clash-verge-rev-mac/)。

## 下一步

- 已经完成 ClashX Meta 下载：按上面“怎么确认设置真的生效了”核对一遍，再用 [规则、全局、直连怎么选](/jiaocheng/guize-quanju-zhilian/) 理解模式。
- 还没有订阅：先去 [梯子推荐](/tuijian/) 看榜单数据，确认套餐提供 Clash 订阅。
- 觉得菜单栏客户端功能不够：换到 Clash Verge Rev，订阅不用重新买，复制同一个链接即可。
