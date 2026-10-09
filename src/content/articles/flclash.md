---
type: xiazai
title: FlClash 下载：官方地址、最新版本与多平台支持
description: "FlClash 下载的官方渠道是作者 chen08209 的 GitHub 仓库发布页，安卓、Windows、macOS、Linux 四个平台的安装包都在那里。本页说明 FlClash 适合谁，FlClash 安卓版与 FlClash 电脑版各选哪个文件，怎么确认是官方构建，以及和同类客户端的区别。"
category: 客户端下载
primaryKeyword: FlClash 下载
secondaryKeywords: [FlClash, FlClash 安卓, FlClash 电脑版]
difficulty: beginner
publishedAt: 2026-10-08
updatedAt: 2026-10-08
answer: "FlClash 是用 Flutter 编写、使用 mihomo 内核的 Clash 系客户端，安卓和 Windows、macOS、Linux 共用同一套界面，适合想在手机和电脑上用同一款客户端的人。安装包只从 GitHub 上 chen08209/FlClash 仓库的发布页下载。"
limits:
  - 各平台安装包的具体文件名和提供的架构会随版本变化，本页只描述特征，以官方发布页为准。
  - FlClash 是否上架某个应用商店、数据同步等功能是否可用，本页没有逐项核对，请以官方仓库说明和当前版本为准。
  - 本页没有任何耗电或速度对比数据，连接效果取决于订阅和线路，需要你自己在设备上验证。
sources:
  - title: FlClash 官方仓库
    url: https://github.com/chen08209/FlClash
client: flclash
rankBlock: clash
relatedTopics: [flclash-android, android, clash-meta-for-android, clash-shi-shenme, clash-verge-rev]
faqs:
  - q: FlClash 有 iPhone 版吗？
    a: 没有。FlClash 支持的是安卓、Windows、macOS 和 Linux，不提供 iOS 版本。App Store 或其他地方出现的同名应用不是这个项目发布的。iPhone 上需要通过外区 Apple ID 在 App Store 获取其他客户端，例如兼容 Clash 配置的 Stash。
  - q: FlClash 安卓版在应用商店里能下载吗？
    a: 官方渠道是 GitHub 上 chen08209/FlClash 仓库的发布页。它是否上架了某个应用商店，以官方仓库的说明为准。国内应用市场和下载站里的同名安装包来源无法核对，可能被重新打包过，之后也无法用官方安装包直接覆盖升级，不建议使用。
  - q: FlClash 电脑版和安卓版的订阅可以通用吗？
    a: 可以。两端使用的是同一个 mihomo 内核，同一条 Clash 订阅链接在手机和电脑上分别导入即可，节点和规则的行为一致。需要留意的是机场对同时在线设备数的限制，多台设备同时使用前先看套餐说明。
  - q: FlClash 能导入通用订阅吗？
    a: FlClash 面向的是 Clash 格式的订阅。机场后台通常会同时提供 Clash 订阅和通用订阅两种链接，导入时选 Clash 那一种。如果机场只提供通用订阅，可以先问客服有没有 Clash 格式，或者改用面向通用订阅的 v2rayNG。
  - q: FlClash 和 Clash Meta for Android 应该选哪个？
    a: 两款使用同一个内核，同一份订阅的连接效果没有区别，差别在界面和定位。FlClash 界面简洁，并且手机和电脑是同一套操作方式；Clash Meta for Android 只做安卓，设置项更贴近内核。第一次用或者多台设备都要装，可以先试 FlClash。
---

FlClash 下载之前先想清楚装在哪台设备上：它同时有安卓版和电脑版，电脑版覆盖 Windows、macOS、Linux，四个平台的安装包都放在作者 chen08209 的 GitHub 仓库发布页里。版本号、发布日期和开源协议见页面顶部的数据卡。这一页讲数据卡之外的内容：它的定位、适合谁、各平台选哪个文件、装好之后的头三步，以及和另外几款 Clash 系客户端怎么取舍。

## FlClash 是什么：一套界面跑四个平台

FlClash 是一款 Clash 系图形客户端，用 Flutter 编写，使用 mihomo 内核。Flutter 是一种跨平台的界面框架，同一套代码可以生成手机和电脑上的应用，所以 FlClash 在安卓、Windows、macOS、Linux 上的界面布局和操作方式基本一致。

这带来两个直接的结果：

- 在手机上学会了怎么导入订阅、切换节点，换到电脑上不用重新适应。
- 界面是为多种屏幕尺寸统一设计的，整体偏简洁，没有把内核的全部选项都摆出来。

它本身开源免费，不带节点，需要导入机场的 Clash 订阅。Clash 系客户端共同的概念，例如规则分流和策略组，见 [Clash 是什么](/zhinan/clash-shi-shenme/)。

## 适合谁，不适合谁

**适合：**

- 手机是安卓、电脑也想用同一款客户端的人。
- 第一次接触 Clash 系客户端，希望界面简单、选项不多的人。
- 机场提供 Clash 订阅的人。
- 家里长辈或同事需要你帮忙装，你希望两种设备上教一遍就够的情况。

**不适合：**

- iPhone 用户。它没有 iOS 版本。
- 需要在桌面端做大量自定义的人，例如复杂的覆写和脚本。桌面专用的客户端在这方面的入口更完整。
- 机场只给通用订阅的人。安卓上这种情况看 v2rayNG。
- 想把所有内核参数都摆在界面上逐项调整的人。安卓上可以看 Clash Meta for Android。

## FlClash 下载：安卓版与电脑版分别选哪个文件

官方发布页是 [github.com/chen08209/FlClash/releases](https://github.com/chen08209/FlClash/releases)。四个平台的文件放在同一个列表里，先按平台找，再按架构挑。

| 你的设备 | 该找的文件特征 | 说明 |
| --- | --- | --- |
| 安卓手机，近些年的机型 | 文件名含 android 与 arm64-v8a 的 .apk | FlClash 安卓版的首选 |
| 较老的安卓手机 | 文件名含 armeabi-v7a 的 .apk | 仅 32 位机型 |
| 安卓模拟器 | 文件名含 x86_64 的 .apk | 一般用不到 |
| Windows 电脑 | 文件名含 windows 的安装程序或压缩包 | 架构字样与处理器一致，多数为 amd64 |
| Mac | 文件名含 macos 的 .dmg | Apple 芯片选 arm64，Intel 选 amd64 |
| Linux | .deb、.rpm 或 .AppImage | 按发行版和架构选择 |

上表描述的是文件名里常见的字样，实际提供哪些文件以当前发布页为准。下载时按这个顺序：

1. 确认这个版本是正式版，而不是标着 Pre-release 的测试版。
2. 找到平台和架构都对得上的那一个文件，其余的不用管。
3. 文件名里的版本号与页面顶部数据卡一致。

FlClash 电脑版在 Windows 和 macOS 上安装时遇到系统拦截，判断方法分别在对应的平台下载页里。安卓上 APK 架构怎么认、安装时的各种提示怎么理解，见 [安卓梯子下载](/xiazai/android/) 页。

## 怎么确认装的是官方构建

- **地址**。发布页地址里的用户名是 chen08209，仓库名是 FlClash，与数据卡给出的官方仓库一致。名字相近的仓库和“FlClash 官网”式的下载站都不算。
- **校验值**。发布说明提供校验值时，下载后计算并比对。
- **安卓上用覆盖安装验证**。下次更新时直接安装官方发布页的新 APK，能顺利覆盖，说明前后两版签名一致。提示签名冲突，说明之前装的那版不是同一个来源。
- **电脑上看版本信息**。在应用的关于页面里核对版本号，与你下载的一致。
- **看权限**。安卓版需要的是建立 VPN 连接和发送通知等与代理相关的权限。向你索要通讯录、短信的，不是官方构建。

## 第一次打开要做的三件事

**在安卓手机上：**

1. **导入订阅。** 到配置页面，新建一份配置，粘贴机场后台复制的 Clash 订阅链接，或用扫码方式添加，然后选中它。
2. **点启动并同意连接请求。** 回到主页面点启动按钮，系统会询问是否允许建立 VPN 连接，同意后状态栏出现钥匙图标。
3. **防止后台被清理。** 把 FlClash 的电池策略设为不限制，并在最近任务里锁定。否则锁屏一段时间后连接可能中断。

**在电脑上：** 第一步相同。第二步换成打开系统代理开关。第三步换成用浏览器分别打开一个国内网站和一个需要代理的网站，确认分流正常。

两端更细的设置，例如分应用代理和模式切换，见 [FlClash 教程](/jiaocheng/flclash-android/)。

## FlClash 和 Clash Meta for Android、Clash Verge Rev 的区别

| 对比项 | FlClash | Clash Meta for Android | Clash Verge Rev |
| --- | --- | --- | --- |
| 支持系统 | 安卓、Windows、macOS、Linux | 仅安卓 | Windows、macOS、Linux |
| 内核 | Mihomo | Mihomo | Mihomo |
| 界面取向 | 简洁，各平台统一 | 设置项多，贴近内核 | 桌面端功能较全 |
| 手机电脑能否用同一款 | 能 | 不能，只有安卓 | 不能，只有桌面 |
| 上手难度 | 低 | 中 | 低到中 |
| 更适合谁 | 多设备、想省事的人 | 只用安卓、想细调的人 | 只用电脑、要完整桌面功能的人 |

三款的内核相同，订阅可以互相搬。换句话说，选错了也没有成本：把订阅链接复制到另一款里重新导入就行。想看另一款安卓客户端的细节，去 [Clash Meta for Android 下载](/xiazai/clash-meta-for-android/) 页；想看桌面端的另一种选择，去 [Clash Verge Rev 下载](/xiazai/clash-verge-rev/) 页。

## 下一步

- 完成 FlClash 下载并装好：按 FlClash 教程导入订阅，先在一台设备上跑通，再装第二台。
- 准备多台设备一起用：先看套餐对同时在线设备数的规定，说明见 [梯子设备数](/zhinan/duo-shebei/)。
- 还没有订阅：到 [梯子推荐](/tuijian/) 看榜单数据，确认套餐提供 Clash 订阅。
- 导入时提示格式错误：多半是复制了通用订阅，回机场后台换成 Clash 订阅链接，通用做法见 [订阅链接怎么用](/jiaocheng/dingyue-daoru/)。
