---
type: xiazai
title: iPhone 梯子下载：iOS 梯子 App 对照与外区下载方法
description: "iPhone 梯子下载只能通过 App Store，而这类应用不在中国大陆区商店上架，前提是准备外区 Apple ID。本页对照 Shadowrocket、Stash 等 iPhone 梯子 App 的付费与免费选择，给出外区下载的五个步骤，并说明共享账号和 TestFlight 版本的风险。"
category: 按系统下载
primaryKeyword: iPhone 梯子下载
secondaryKeywords: [iOS 梯子下载, 苹果梯子下载, iPhone 梯子 App]
difficulty: beginner
publishedAt: 2026-10-08
updatedAt: 2026-10-08
answer: "iPhone 上没有安装包可下，正规入口只有 App Store，而这类 App 不在中国大陆区上架。先准备一个自己的外区 Apple ID，只在 App Store 里登录它，再从页面顶部数据表给出的商店地址下载；不要使用来路不明的共享账号。"
limits:
  - 本页不提供外区 Apple ID 的注册细节，也不提供任何共享账号，账号准备请看对应教程和 Apple 官方说明。
  - App 的价格、是否支持 iPad 或 Mac、在哪些地区上架都会变化，本页不写具体数字，请以 App Store 页面为准。
  - 免费客户端的上架状态与 TestFlight 测试名额没有逐项核对，获取方式以各项目官方仓库或官方文档为准。
sources:
  - title: Apple 支持：更改 Apple 账户的国家或地区
    url: https://support.apple.com/en-us/118283
  - title: Apple App Store：Shadowrocket
    url: https://apps.apple.com/us/app/shadowrocket/id932747118
  - title: Apple App Store：Stash
    url: https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349
platform: iphone
rankBlock: overall
relatedTopics: [shadowrocket, stash, waiqu-apple-id, shadowrocket-iphone, iphone-tizi]
faqs:
  - q: 为什么在 App Store 里搜不到小火箭？
    a: 因为你登录的是中国大陆区的 Apple ID。Shadowrocket、Stash 这类代理客户端不在中国大陆区商店上架，搜索只会出现名字相近的其他应用。需要在 App Store 里换成其他国家或地区的 Apple ID 登录，再通过官方商店地址打开应用页面。
  - q: iPhone 梯子 App 一定要花钱买吗？
    a: 不一定。Shadowrocket 和 Stash 是付费应用，价格以 App Store 页面为准，买一次后绑定在购买它的 Apple ID 上。sing-box 官方客户端、Hiddify、Karing 属于开源项目，是否在商店上架、如何获取，以各项目官方仓库或文档的说明为准。无论哪种，都需要外区 Apple ID 才能在商店里看到。
  - q: 用别人给的共享 Apple ID 下载可以吗？
    a: 不建议。来路不明的共享账号随时可能被改密码或被停用，届时应用无法更新；账号本身的来源也说不清。尤其不要在系统设置顶部的 iCloud 位置登录别人的账号，那样设备有被远程锁定的风险。自己准备一个外区账号、自己购买，才是长期可用的做法。
  - q: 下载完之后要一直登录外区账号吗？
    a: 不需要。应用装好后，可以把 App Store 换回你原来的账号，已经安装的应用照常使用。需要更新这款应用时，再到 App Store 里切换到当初下载它的那个外区账号。整个过程只涉及 App Store 的登录状态，不需要改动 iCloud。
  - q: iPhone 上的梯子 App 能在 iPad 上用吗？
    a: 取决于应用本身。每款应用的 App Store 页面都会标注兼容的设备类型，标明支持 iPad 的，用同一个 Apple ID 登录 App Store 后通常可以直接下载，不需要再买一次。具体以商店页面当前的标注为准，本页不替任何一款应用做承诺。
---

iPhone 梯子下载和安卓、电脑都不一样：没有安装包可下，正规入口只有 App Store，而这类应用不在中国大陆区商店上架。所以真正的第一步不是挑 App，而是准备一个外区 Apple ID。页面顶部的数据表列出了本站收录的 iOS 客户端和它们的官方商店或仓库地址，下面讲清为什么搜不到、付费和免费怎么选、外区下载分几步，以及哪些省事的做法不能碰。

## 为什么中国区 App Store 搜不到 iOS 梯子 App

原因只有一个：这类应用没有在中国大陆区的 App Store 上架。你用大陆区 Apple ID 搜索它们的名字，出来的要么是无关应用，要么是名字相近的“加速器”。

iPhone 在绝大多数地区也不能像安卓那样，直接安装从网页下载的安装包。于是网上出现了各种“免外区账号安装”的办法：网页一键安装、安装描述文件、企业签名版。它们的共同点是绕开了 App Store 的审核与分发，装上的是谁打包的、里面有什么，你无从核对；这类安装方式失效后，应用还会打不开。本站只把 App Store 和项目官方说明里写明的渠道算作官方渠道。

所以苹果梯子下载的路径是固定的：外区 Apple ID → App Store → 官方应用页面。

## iPhone 梯子 App 对照：付费的和免费的怎么选

| 客户端 | 费用 | 内核 | 对应的订阅格式 | 上手难度 | 适合谁 |
| --- | --- | --- | --- | --- | --- |
| Shadowrocket（小火箭） | 付费，价格以 App Store 页面为准 | 自有 | 能导入的订阅与链接类型较宽 | 低 | 想照着机场的 iOS 教程一步步做的人 |
| Stash | 付费，价格以 App Store 页面为准 | 兼容 Clash 配置 | Clash 订阅 | 中 | 电脑上已经在用 Clash、想沿用规则和策略组的人 |
| Hiddify | 以商店页面与官方仓库说明为准 | sing-box | 多种格式，以官方说明为准 | 低 | 想导入后少做设置的人 |
| Karing | 以官方仓库说明为准 | sing-box | 兼容 Clash 与 sing-box 等格式 | 低到中 | 手里有多种格式订阅的人 |
| sing-box（官方客户端） | 以官方文档为准 | sing-box | sing-box 配置（JSON） | 高 | 会自己写配置文件的人 |

付费与免费之间怎么取舍：

- **付费应用买的是省心**。[Shadowrocket 下载](/xiazai/shadowrocket/) 和 [Stash 下载](/xiazai/stash/) 两页分别讲了购买须知。它们是一次购买、绑定在购买账号上的应用，换手机后用同一个账号可以重新下载。
- **免费的开源客户端要多看一眼上架状态**。这类应用在不同地区的商店里上架、下架的变动相对频繁，获取方式以各项目官方仓库或文档为准。能在你的外区商店里搜到，就可以直接用。
- **先看机场支持什么**。如果你的机场只提供某一种订阅格式，客户端要跟着订阅走。小火箭能接受的格式比较宽，这也是 [小火箭机场](/zhinan/xiaohuojian-jichang/) 一文里说它适配面广的原因。

## 外区下载方法：五步走完

iPhone 梯子下载的实际操作可以拆成五步，只有第一步需要提前准备，后面四步几分钟就能做完。

1. **准备一个自己的外区 Apple ID。** 做法见 [外区 Apple ID](/jiaocheng/waiqu-apple-id/) 教程。Apple 官方也提供了更改账户国家或地区的说明，见 [Apple 支持：更改 Apple 账户的国家或地区](https://support.apple.com/en-us/118283)，更改前有若干前提条件，以官方页面为准。多数人会选择另外准备一个账号，而不是改动自己日常使用的主账号。
2. **只在 App Store 里登录它。** 打开 App Store，点右上角头像，退出当前账号后登录外区账号。系统设置顶部的 iCloud 账号保持不动，照片、通讯录、备份都不受影响。
3. **通过官方地址打开应用页面。** 用数据表里的商店地址进入，例如 [Apple App Store：Shadowrocket](https://apps.apple.com/us/app/shadowrocket/id932747118) 与 [Apple App Store：Stash](https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349)。直接搜索名字时，注意核对开发者。
4. **购买或获取。** 付费应用需要该地区可用的付款方式或账户余额，充值请走 Apple 官方或其授权渠道。价格以页面显示为准。
5. **安装后按需换回原账号。** 已安装的应用不会因为切换账号而消失；以后更新这款应用时，再切回当初下载它的账号。

整个过程里，你要输入密码的地方只有系统自己的 App Store 登录界面。任何网页要求你填写 Apple ID 密码，都应当直接关掉。

## 别用来路不明的共享账号

搜索“小火箭 共享账号”能找到大量公开的 Apple ID。它们看上去省掉了注册和付费两步，代价是这几项：

| 风险 | 具体会发生什么 |
| --- | --- |
| 设备被锁 | 如果把共享账号登录到了系统设置顶部的 iCloud 位置，账号的实际控制者可以通过“查找”功能远程锁定或抹掉你的设备 |
| 应用无法更新 | 账号密码被改、账号被停用后，用它下载的应用就停在旧版本，系统升级后可能无法使用 |
| 来源不明 | 这些账号是谁注册、用什么方式付的款，你不知道；账号被平台处理时，受影响的是所有用过它的人 |
| 钓鱼 | 一些提供共享账号的页面会顺带引导你输入自己的 Apple ID 或安装描述文件 |

如果你此前已经用过共享账号，现在该做的是：确认它没有登录在 iCloud 位置；在 App Store 里退出它；准备好自己的账号后，删除旧应用并用自己的账号重新获取。删除前先在应用里记下订阅链接。

## TestFlight 版本为什么不能当主力

TestFlight 是 Apple 官方提供给开发者的测试分发渠道。有的客户端会开放公开测试，让用户不经过商店正式版就能安装。它是正规渠道，但有三个不确定性：

- **名额有上限。** 测试名额满了就加不进去，链接随时可能失效。
- **版本有有效期。** 测试版到期后必须更新到新的测试版才能继续用，开发者没有及时发新版时，应用会停止工作。
- **开发者可以随时结束测试。** 测试版也可能带有尚未修好的问题。

所以 TestFlight 适合尝鲜，不适合作为你唯一的上网手段。兜售“TestFlight 名额”的页面同样不属于官方渠道。

## 装之前和装之后各核对什么

**装之前，在应用页面上核对四项：**

1. 页面地址与数据表里的商店地址一致，域名是 apps.apple.com。
2. 应用名称和开发者名称没有多字、少字或替换字符。
3. 价格与“App 内购买”项目是否符合你的预期，价格以页面为准。
4. 兼容性一栏标注的系统版本要求，以及是否支持 iPad、Mac。

**装之后，核对三项：**

1. 第一次连接时，系统会询问是否允许添加 VPN 配置，同意后需要验证锁屏密码。这是 iOS 给代理类应用的标准流程。
2. 在系统设置的 VPN 一栏里，能看到以这款应用命名的配置。iOS 同一时间只启用一个 VPN 配置，装了两款客户端时，后连接的会顶掉先连接的。
3. 应用自身的设置页里显示的版本，与商店页面上的当前版本一致。

如果第 1 步弹出的不是系统样式的窗口，而是应用内自己画的界面，并向你索要 Apple ID 密码，那不是正常流程。

## 下一步：从账号到订阅

- **还没有外区账号**：先看外区 Apple ID 教程，这是 iPhone 梯子下载绕不开的前提。
- **账号有了，决定买小火箭**：装好后按 [小火箭教程](/jiaocheng/shadowrocket-iphone/) 添加订阅。
- **想沿用 Clash 配置**：装 Stash，然后看 [Stash 教程](/jiaocheng/stash-iphone/)。
- **还没有订阅**：到 [梯子推荐](/tuijian/) 看榜单数据，注意套餐页有没有写明支持 iOS 客户端。
- **想先把三道门槛想清楚**：读 [iPhone 梯子](/zhinan/iphone-tizi/)。iOS 梯子下载之外，账号和订阅各有各的坑，那篇讲得更细。
