---
type: zhinan
title: "机场协议怎么选？VLESS、Trojan、Hysteria2、SS 对照"
description: "机场协议怎么选？把 Shadowsocks、VMess、VLESS、Trojan、Hysteria2 放进同一张对照表，讲各自的设计思路、客户端内核支持面和适合的网络环境，并说明协议对体感的影响为什么通常小于线路，以及怎么自己核对节点用的是哪种协议。"
category: 线路与协议
primaryKeyword: 机场协议
secondaryKeywords: [VLESS, Trojan, Hysteria2]
difficulty: intermediate
publishedAt: 2026-10-08
updatedAt: 2026-10-08
answer: "机场协议由机场决定，多数用户不需要自己挑，关键是你的客户端内核认得它。五种常见协议里，Shadowsocks 兼容面很广，VLESS 与 Trojan 依赖 TLS 一类安全层，Hysteria2 走 UDP。协议对体感的影响通常小于线路。"
limits:
  - 本文不提供任何测速结果，协议之间的实际表现差异需要你在自己网络下对比验证。
  - 各协议的参数细节和客户端支持范围会随版本变化，具体以官方文档和客户端当前版本为准。
  - 本文只讲协议原理和判断方法，不教配置自建服务端，也不评价任何具体机场。
sources:
  - title: Shadowsocks 官网
    url: https://shadowsocks.org/
  - title: V2Fly（V2Ray）文档
    url: https://www.v2fly.org/
  - title: Project X（Xray）文档
    url: https://xtls.github.io/
  - title: Trojan 项目文档
    url: https://trojan-gfw.github.io/trojan/
  - title: Hysteria 2 官方文档
    url: https://v2.hysteria.network/
  - title: Mihomo（Clash Meta）文档
    url: https://wiki.metacubex.one/
rankBlock: overall
relatedTopics: [v2ray-jichang, clash-jichang, vless, trojan, hysteria2, shadowsocks]
faqs:
  - q: 机场用哪种协议更好？
    a: 没有固定答案。协议决定数据怎么封装和伪装，不决定线路质量，普通用户的体感通常更多取决于线路、节点负载和你所在的网络。机场给什么协议就用什么，前提是你的客户端内核支持它。需要比较时，在同一时段对同一地区的不同协议节点反复对照。
  - q: VLESS 和 VMess 有什么区别？
    a: VMess 是 V2Ray 最初的协议，自带加密并依赖时间校验；VLESS 更轻量，自身不负责加密，通常要搭配 TLS 或 REALITY 这类安全层使用。两者都由 Xray、sing-box、mihomo 等内核实现，机场用哪种以节点信息为准，客户端支持即可。
  - q: Hysteria2 一定比 Trojan 快吗？
    a: 不一定。Hysteria2 基于 QUIC 和 UDP，设计目标是在丢包较多的链路上保持吞吐，但有的网络会限制或降低 UDP 的优先级，这时它反而可能不如基于 TCP 的协议。快慢取决于你的网络环境，需要自己换网络对比，不能靠协议名下结论。
  - q: 客户端不支持某个协议怎么办？
    a: 先检查客户端是否为最新版，再确认它的内核是否包含该协议。内核不支持时，要么换一款内核更新的客户端，要么请机场提供别的协议的节点。不建议因为一个协议去换机场，先换客户端的成本更低。客户端对照见客户端选择器。
  - q: 节点详情里的协议在哪里看？
    a: 多数客户端的节点详情或编辑页里都有类型或协议一栏，会直接写明是 Shadowsocks、VMess、VLESS、Trojan 或 Hysteria2。如果节点列表只有名称，可以点开单个节点查看，或在导入后观察客户端对节点类型的图标和标注。
---

先说结论：机场协议对普通用户体感的影响，通常小于线路。用哪种协议是机场定的，你要做的不是替机场挑协议，而是确认自己的客户端内核认得它。下面把 Shadowsocks、VMess、VLESS、Trojan、Hysteria2 的设计思路、客户端支持面和适合的网络环境，放进同一套对照里。

## 机场协议、传输方式和线路是三层不同的事

很多人把“协议”当成节点好坏的总开关。先拆开看，这个误会会少一半。

| 层次 | 回答什么问题 | 常见例子 | 对体感的影响 |
| --- | --- | --- | --- |
| 代理协议 | 客户端和服务器之间的数据怎么封装、认证、加密 | Shadowsocks、VMess、VLESS、Trojan、Hysteria2 | 通常较小，主要影响兼容性与抗识别特征 |
| 传输与安全层 | 数据放在什么载体里发送，用什么保护 | TCP、WebSocket、gRPC、TLS、REALITY | 影响连接稳定性与伪装方式 |
| 线路 | 数据实际走哪条物理路径到达服务器 | 直连、中转、专线 | 通常较大，高峰时段尤其明显 |

机场协议这个说法，只指第一层。同一种协议可以跑在很好的线路上，也可以跑在拥挤的线路上，体感差别主要来自后者。线路这一层的区别，见[中转机场](/zhinan/zhongzhuan-jichang/)。

还有一个常见混淆：协议并不等于客户端。Clash、V2Ray 这些名字指的是客户端或内核家族，不是协议。它们各自能支持哪些协议，是另一张表，后面会讲。需要先补背景的话，可以读[Clash 是什么](/zhinan/clash-shi-shenme/)和[V2Ray 是什么](/zhinan/v2ray-shi-shenme/)。

## 五种协议各自在解决什么问题

### Shadowsocks：简单、轻、兼容面广

[Shadowsocks](https://shadowsocks.org/) 的思路是做一条尽量精简的加密通道，客户端与服务器共享密码和加密方式。它没有复杂的握手，实现简单，几乎所有主流客户端都内置了支持。

需要留意两点。一是加密方式要选较新的类型，较老的一些加密方式因为已知的安全缺陷，被越来越多的客户端拒绝。二是它的流量不伪装成任何常见协议，特征相对直接，在不同网络环境下的可用性无法一概而论。

### VMess：V2Ray 最初的协议

VMess 来自 V2Ray 项目，文档在 [V2Fly](https://www.v2fly.org/)。它用用户 ID 认证，自带加密，可以和 WebSocket、TLS 等传输方式组合。

它依赖时间校验，客户端与服务器的时间差过大，就会连不上。这是手机或电脑系统时间不准时，VMess 节点“全部超时”的一个常见原因。时间问题的排查思路见[证书与系统时间](/paicha/zhengshu-shijian/)。

### VLESS：把加密交给外层

VLESS 可以看作 VMess 的精简版：协议本身不负责加密，认证也更简单，加密和伪装交给外层的 TLS 或 REALITY 等安全层。Xray 项目的文档对它有详细说明，见 [Project X](https://xtls.github.io/)。

这个设计带来一个实用的判断点：VLESS 节点必须带着一个安全层才算完整。如果你在节点详情里看到安全层一栏是空的或写着 none，值得向机场问一句。

### Trojan：看起来像普通 HTTPS

[Trojan](https://trojan-gfw.github.io/trojan/) 的思路是让代理流量在外观上与普通 HTTPS 访问一致：服务器用真实域名和证书，用密码认证，非 Trojan 的请求还会被转交给一个真实网站。

因此它依赖有效的域名和证书。证书过期、域名解析被干扰，都会让节点整体失效，这类问题在节点列表里表现为同一机场的 Trojan 节点同时不可用。

### Hysteria2：基于 QUIC 的 UDP 协议

[Hysteria2](https://v2.hysteria.network/) 与前四种不同，它建立在 QUIC 之上，走的是 UDP，外观上模仿 HTTP/3 流量，并采用自己的拥塞控制策略，设计目标是在丢包较多的链路上保持吞吐。

代价同样来自 UDP。有的网络会限制 UDP，或者对它降低优先级；较激进的发送方式也可能被运营商察觉并限制。所以它在什么网络下表现如何，不能凭协议名下结论，需要你在自己的家庭宽带和手机网络下各试一次。

## 一张表对照五种协议

| 协议 | 底层传输 | 加密与伪装 | 对客户端的要求 | 值得留意的点 |
| --- | --- | --- | --- | --- |
| Shadowsocks | TCP 与 UDP | 自带加密，不伪装 | 几乎所有客户端都支持 | 加密方式要选较新的类型 |
| VMess | TCP，可叠加其他传输 | 自带加密 | 主流内核均支持 | 对系统时间有要求 |
| VLESS | TCP，可叠加其他传输 | 依赖外层 TLS 或 REALITY | Xray、sing-box、mihomo 等较新内核 | 缺少安全层的节点要向机场确认 |
| Trojan | TCP，基于 TLS | 外观为 HTTPS | 主流内核均支持 | 依赖域名与证书有效 |
| Hysteria2 | QUIC（UDP） | QUIC 自带加密，外观为 HTTP/3 | mihomo、sing-box 等较新内核 | UDP 在部分网络受限 |

表里的“均支持”是一般情况，版本较旧的客户端可能缺项，以客户端当前版本为准。

## 你的客户端内核认不认得

对读者来说，比“哪个协议更好”更有价值的问题是：这个节点我的客户端能不能连。答案取决于客户端用的是哪个内核。

| 内核家族 | 本站收录的代表客户端 | 五种协议的一般情况 |
| --- | --- | --- |
| Mihomo | Clash Verge Rev、Clash Party、FlClash、Clash Meta for Android、ClashX Meta、Clash Nyanpasu、OpenClash | 一般都支持 |
| Xray | v2rayN、v2rayNG | Shadowsocks、VMess、VLESS、Trojan 一般支持；Hysteria2 看当前版本 |
| sing-box | sing-box、NekoBox for Android、Hiddify、Karing | 一般都支持 |
| 自有内核 | Shadowrocket、Stash | 常见协议一般支持，具体以应用内说明为准 |

v2rayN 可以切换 Xray 与 sing-box 两种内核，所以同一个客户端在不同内核设置下的支持面会有差别。各内核的功能细节，可以查 [Mihomo 文档](https://wiki.metacubex.one/)和 [Xray 文档](https://xtls.github.io/)。

更省事的做法是用[客户端选择器](/gongju/kehuduan-xuanze/)，按你的系统直接给出可选的客户端，再回头确认订阅格式兼容。订阅格式与内核兼容性的具体展开，在 [Clash 机场](/zhinan/clash-jichang/)和 [V2Ray 机场](/zhinan/v2ray-jichang/)两篇里。

## 协议对体感到底影响多大

先分清“协议能改变什么”和“协议改变不了什么”。

协议能改变的有三类。第一是兼容性，客户端不认就连不上。第二是对网络环境的适应，例如 UDP 类协议在限制 UDP 的网络里会遇到阻碍。第三是连接建立的方式，有的协议需要完整的 TLS 握手，有的几乎没有握手。

协议改变不了的同样有三类。第一是物理距离和线路拥堵，它们决定了绝大部分时间的体验。第二是节点的负载和机场的超售程度，见[超售与限速](/bikeng/chaoshou-xiansu/)。第三是出口 IP 的属性，它影响的是服务能不能用，而不是速度。

所以遇到“晚上变慢”这类问题，换协议很少是正确答案，应该先看[晚高峰](/paicha/wan-gaofeng-ka/)的成因。把协议当成调速旋钮，是最常见的误区。

## 怎么确认节点在用什么协议，怎么自己对比

这一节教你自己核对，不依赖任何人的结论。

1. **查看节点类型。** 在客户端里点开单个节点的详情，找到类型或协议一栏，记下它是五种中的哪一种。
2. **查看安全层。** 对 VLESS 和 Trojan，确认有 TLS 或 REALITY 一类设置。完全没有的，向机场确认。
3. **确认客户端是否把它识别出来。** 如果导入订阅后，某一类节点整体消失，多半是内核不支持这种协议，更新客户端再导入一次。
4. **做一次小对照。** 挑同一机场、同一地区的两个不同协议的节点，在同一时段交替使用，每个重复几次，用下面的表记录。

| 记录项 | 节点 A（协议甲） | 节点 B（协议乙） |
| --- | --- | --- |
| 时段与网络 | 填写 | 填写 |
| 连接建立是否顺畅 | 填写 | 填写 |
| 看视频或下载时是否稳定 | 填写 | 填写 |
| 异常现象 | 填写 | 填写 |

一两次的结果没有说服力，因为同一节点本身也会随时间波动。多试几个不同时段，再用另一种网络重复一遍，结论才站得住。读延迟测试的数字时要克制，它们的含义见[节点测速](/jiaocheng/jiedian-cesu/)。

## 不同情况下怎么处理

- **机场只给一种协议**：直接用，不需要纠结。确认客户端支持即可。
- **机场提供多种协议的节点**：先用客户端兼容性最好的那一种，出现连不上或不稳定时，再换另一种做对照。
- **只有 UDP 类协议的节点不稳定**：换到另一种网络（比如从手机流量换到家庭宽带）再试一次，判断是协议问题还是网络对 UDP 的策略。
- **某类节点在你的客户端里消失**：更新客户端，仍然不行，就换内核更新的客户端。
- **订阅格式读不了**：先让机场提供通用订阅，再考虑[订阅转换](/jiaocheng/dingyue-zhuanhuan/)。

在术语层面想快速查概念，可以看词典里的 [VLESS](/cidian/vless/)、[Trojan](/cidian/trojan/)、[Hysteria2](/cidian/hysteria2/) 和 [Shadowsocks](/cidian/shadowsocks/)。

## 现在可以做的三步

1. **先看自己的客户端。** 用[客户端选择器](/gongju/kehuduan-xuanze/)确认你的系统上有哪些客户端，再看它们的内核。
2. **把协议写进下单清单。** 选机场时，把“提供哪些协议、订阅格式是什么”加进核对项，逐项方法见[机场怎么选](/zhinan/jichang-zenme-xuan/)。
3. **把注意力放回线路。** 协议确认可用之后，剩下的预算和精力应该花在线路、地区和流量上。可以从[选梯子向导](/gongju/xuan-tizi-xiangdao/)开始缩小范围，或到[机场列表](/jichang/)看各家公开的协议与客户端支持。

协议值得了解，但不值得焦虑。能连上、稳定、客户端支持，就已经是够用的协议选择了。
