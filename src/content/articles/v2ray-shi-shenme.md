---
type: zhinan
title: "V2Ray 是什么？与 Xray、VMess、VLESS 的关系"
description: "V2Ray 是什么？它是 Project V 下的代理平台和内核项目，现由 V2Fly 社区维护，Xray 是它的分支，VMess 与 VLESS 是协议。本文讲清这些名字的关系、V2Ray 与 Clash 的区别，以及怎么判断手里的订阅和客户端属于哪一类。"
category: 线路与协议
primaryKeyword: V2Ray 是什么
secondaryKeywords: [V2Ray, Xray, VMess]
difficulty: beginner
publishedAt: 2026-10-08
updatedAt: 2026-10-08
answer: "V2Ray 是 Project V 下的代理平台和内核项目，现由 V2Fly 社区维护；Xray 是它的分支内核；VMess、VLESS 是协议。日常里 V2Ray 常被泛指一类协议和客户端，它与 Clash 的内核和订阅格式不同，但许多机场两种都提供。"
limits:
  - 本文讲名称与关系，不比较协议的优劣，也不涉及任何机场的节点质量。
  - 协议细节、功能和命名随项目演进，请以 V2Fly 与 Xray 的官方文档为准。
  - 客户端支持哪些协议会随版本变化，具体以各客户端当前版本的说明为准。
sources:
  - title: V2Fly（V2Ray）文档
    url: https://www.v2fly.org/
  - title: Project X（Xray）文档
    url: https://xtls.github.io/
rankBlock: overall
relatedTopics: [v2ray-jichang, clash-shi-shenme, jichang-xieyi, vmess, vless, neihe]
faqs:
  - q: V2Ray 和 VMess 是同一个东西吗？
    a: 不是。V2Ray 是项目和内核，VMess 是这个项目里使用的一种协议。日常交流里人们常说 V2Ray 节点，指的往往就是 VMess 节点，但 V2Ray 内核同样支持 VLESS、Trojan、Shadowsocks 等其他协议，所以这两个词不能等同。
  - q: Xray 是 V2Ray 的升级版吗？
    a: 不能这样说。Xray 是从 V2Ray 分出去的分支，沿用相近的配置思路并加入自己的功能，两者由不同的社区维护。选哪个，更多取决于你使用的客户端支持哪个内核，而不是谁更新。具体功能差异以各自的官方文档为准。
  - q: V2Ray 还能用吗？
    a: 项目由社区持续维护，相关协议和客户端仍在使用。更实际的问题是你所在网络下节点能不能连、客户端是否支持节点用到的协议。这两点需要自己用短周期套餐测试，不能靠项目是否还在更新来判断。
  - q: V2Ray 订阅和 Clash 订阅能互相换着用吗？
    a: 不能直接互换，两种订阅的格式不同。通用订阅是节点链接的列表，Clash 订阅是完整的配置文件。许多机场两种格式都提供，选客户端对应的那一种即可。需要转换时存在泄露订阅的风险，要谨慎处理。
  - q: V2Ray 和 Clash 该学哪个？
    a: 看你的设备和习惯。Windows、安卓上都有两个家族的成熟客户端，iPhone 上则要看你愿意付费买哪款应用。入门可以先装一款能直接导入订阅的客户端，把订阅用起来，再根据需要学习规则分流和路由配置。
---

V2Ray 是什么？严格说，它是 Project V 下的一个代理平台和内核项目，现在由 V2Fly 社区维护；Xray 是从它分出去的分支内核，VMess 和 VLESS 则是其中用到的协议。但在日常交流里，“V2Ray”常被泛指一整类协议和客户端，所以同一个词可能说的是不同的东西。下面把这些名字的关系理顺，再说它和 Clash 的区别。

## V2Ray 是什么：一个代理平台，不是一款 App

V2Ray 的定位是**平台**，意思是它被设计成一套模块化的工具：一端接收流量（入站），一端把流量转发出去（出站），中间由路由规则决定每条连接怎么走。协议只是其中可替换的模块，所以 V2Ray 内核可以同时支持多种协议。

你平时看到的 V2Ray 系图形工具，如 v2rayN、v2rayNG，是**客户端**：它们把内核包装起来，用界面管理节点、订阅和路由。内核本身是命令行程序，配置是 JSON 格式的文件。

关于项目的起源、命名和演进细节，请以 [V2Fly 文档](https://www.v2fly.org/) 为准，本文不展开历史。需要记住的是：V2Ray 是**内核和平台**，不是一个要付费或登录的单独产品。

## V2Ray、Xray、VMess、VLESS 的关系

这几个名字经常一起出现，容易混成一团。先看分层：

| 名称 | 类别 | 一句话说明 | 常出现的位置 |
| --- | --- | --- | --- |
| V2Ray（Project V） | 代理平台，内核项目 | 模块化的代理工具集，现由 V2Fly 社区维护 | 教程、客户端名称 |
| V2Fly | 社区 | 维护 V2Ray 的社区，文档站点属于它 | 官方文档 |
| Xray（Project X） | 从 V2Ray 分出的分支内核 | 沿用相近的配置思路，加入自己的特性 | v2rayN、v2rayNG 使用的内核 |
| VMess | 协议 | V2Ray 项目里的协议，自带加密，对客户端与服务器的时间差比较敏感 | 节点列表里的 vmess 类型 |
| VLESS | 协议 | 更轻量，本身不负责加密，需要搭配 TLS 等传输层安全 | 节点列表里的 vless 类型 |
| Reality 等传输层特性 | 传输层技术 | 在 Xray 文档里描述的相关能力，具体写法以文档为准 | 节点参数 |

三点要点：

- **内核是内核，协议是协议。** V2Ray 和 Xray 是内核，VMess、VLESS 是协议。同一个内核能支持多个协议，同一个协议也可能被多个内核支持。
- **Xray 是分支，不是升级版。** 两个项目由不同社区维护，具体功能差异以[Xray 文档](https://xtls.github.io/)和 V2Fly 文档为准。
- **VMess 对时间敏感。** 如果你的设备时间和服务器差得太多，即使节点没问题也可能连不上。排查方法见[梯子提示证书错误](/paicha/zhengshu-shijian/)。

两种协议的更多设计思路，以及和 Trojan、Hysteria2、Shadowsocks 的对比，见[机场协议怎么选](/zhinan/jichang-xieyi/)。想看单个协议的词条，有[VMess](/cidian/vmess/)和[VLESS](/cidian/vless/)。

## “V2Ray”在日常里为什么被泛指

在聊天和教程里，“V2Ray”这个词有好几种常见用法，意思并不相同：

| 常见说法 | 实际可能指 | 怎么从语境判断 |
| --- | --- | --- |
| 我用的是 V2Ray | 内核项目，或某款 V2Ray 系客户端 | 看后面有没有提到具体客户端名称 |
| V2Ray 节点 | VMess、VLESS 等类型的节点 | 节点链接以 vmess:// 或 vless:// 开头 |
| V2Ray 订阅 | 通用订阅，即节点链接的列表 | 与 Clash 订阅对比，后者是完整配置文件 |
| V2Ray 客户端 | v2rayN、v2rayNG 这类工具 | 名字里常带 v2ray |
| V2Ray 机场 | 提供上述节点和订阅的机场 | 详见[V2Ray 机场怎么选](/zhinan/v2ray-jichang/) |

之所以会这样，是因为 V2Ray 出现得早，名气大，很多人就用它指代“这一类东西”。所以回答“V2Ray 是什么”之前，要先问自己：对方说的是内核、协议、客户端还是订阅？问清了，就不会被术语牵着走。

## V2Ray 和 Clash 是什么关系

两者是**并列的两个家族**，不是上下级关系。下面是对照：

| 对比项 | V2Ray / Xray 系 | Clash / Mihomo 系 |
| --- | --- | --- |
| 内核 | Xray 或 V2Ray 内核；部分客户端也可使用 sing-box | Mihomo |
| 配置格式 | JSON | YAML |
| 分流写法 | 路由规则 | 规则逐条匹配，加上内置的策略组 |
| 常见订阅格式 | 通用订阅，即 base64 编码的节点链接列表 | Clash 格式订阅，即完整的 YAML 配置 |
| 代表客户端 | v2rayN、v2rayNG | Clash Verge Rev、FlClash 等 |

对用户来说最直接的区别是**订阅格式**。通用订阅里只有节点，规则由客户端自己决定；Clash 订阅则自带规则和策略组。所以很多机场会提供两种订阅，你选与你客户端对应的那种即可。

还有第三条线值得知道：sing-box 系客户端（如 Hiddify、Karing）通常能识别多种订阅格式，具体支持范围以各客户端的说明为准。Clash 这条线的详细介绍，见[Clash 是什么](/zhinan/clash-shi-shenme/)。

## 常见客户端与内核怎么对应

下表以本站收录的客户端为准，平台和内核信息来自站内资料：

| 客户端 | 系统 | 内核 | 说明 |
| --- | --- | --- | --- |
| [v2rayN](/xiazai/v2rayn/) | Windows、macOS、Linux | Xray 或 sing-box | V2Ray 系的桌面图形客户端 |
| [v2rayNG](/xiazai/v2rayng/) | Android | Xray | 安卓上对应的客户端 |
| NekoBox for Android | Android | sing-box | sing-box 系的安卓客户端 |
| [sing-box](/xiazai/sing-box/) | Windows、macOS、Linux、Android、iPhone | sing-box | 通用代理内核与官方客户端 |
| Hiddify | Windows、macOS、Linux、Android、iPhone | sing-box | 多平台图形客户端 |
| Karing | Windows、macOS、Android、iPhone | sing-box | 多平台图形客户端 |
| Shadowrocket（小火箭） | iPhone | 自有 | App Store 付费应用，不在中国大陆区商店上架，需要其他地区的 Apple ID |

几点说明：

- v2rayN 的内核可以在 Xray 和 sing-box 之间选，具体怎么设置，以当前版本的界面和官方说明为准。
- iPhone 上选择有限，付费应用的价格以 App Store 页面为准。
- 一个客户端能不能用某种协议，取决于它当前版本的内核，不同版本会有变化。

## 怎么确认你手里的是哪一种

拿到订阅或节点后，不要凭名字猜，用下面的步骤自己核对：

1. **看节点链接的前缀。** 通用订阅里每个节点都是一条链接，不同协议的前缀不同，大致像这样：

```
vmess://……
vless://……
trojan://……
ss://……
```

2. **看机场后台。** 订阅页面通常会有“通用”“V2Ray”“Clash”之类的选项，名称各家不同，以后台实际显示为准。
3. **导入客户端看节点列表。** 导入后点开某个节点，查看它的协议类型字段。
4. **对比节点数量。** 导入后数量和官网说明差得多，可能是客户端不支持其中某些协议。
5. **查看客户端使用的内核。** 在设置里找内核或核心的选项，不同客户端的菜单名称不同，以当前界面为准。
6. **别把订阅内容贴到不明网站去解码。** 订阅里包含了你的节点信息，泄露后可能被滥用。

核对完这些，你就知道自己手里是通用订阅还是 Clash 订阅、用的是哪些协议、该选哪款客户端。

## 下一步：从认识名字到挑选机场

1. 如果你已经决定走 V2Ray 路线，读[V2Ray 机场怎么选](/zhinan/v2ray-jichang/)，看怎么确认机场给不给通用订阅。
2. 按系统选客户端：Windows 看[v2rayN 下载](/xiazai/v2rayn/)，安卓看[v2rayNG 下载](/xiazai/v2rayng/)。
3. 想先对比各种协议，读[机场协议怎么选](/zhinan/jichang-xieyi/)。
4. 想直接筛选候选机场，到[梯子推荐](/tuijian/)按价格、线路和流量几个榜单看。

不管最后选哪个家族，第一次都买最短周期，导入订阅试用一周，再决定要不要续费。
