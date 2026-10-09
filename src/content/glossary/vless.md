---
term: VLESS
definition: "VLESS 是 V2Ray 与 Xray 生态里的轻量代理协议，自身不负责加密，通常要搭配 TLS 或 Reality 等传输层安全方案使用。"
extendedExplanation: "VLESS 决定客户端与服务器之间怎样识别用户、封装数据，节点参数里会写明它。你会在机场的协议说明、节点详情和客户端的节点编辑页看到它；旧客户端可能不支持，要以客户端当前版本的说明为准。"
aliases: [VLESS 协议, XTLS]
relatedTerms: [vmess, trojan, neihe, shadowsocks]
relatedArticles: [jichang-xieyi, v2ray-shi-shenme]
updatedAt: 2026-10-08
---

## VLESS 在协议里扮演什么角色

VLESS 是 V2Ray 生态之后发展出来的一种代理协议，Xray 项目对它做了大量扩展。它的设计取向是“轻”：协议本身只负责用户识别和数据封装，把加密这件事交给下面的传输层，比如 TLS，或者 Xray 文档里介绍的 Reality 方案。因此，读到“VLESS 节点”时，真正决定安全性与外观的，往往是它搭配的那一层。

和它同出一脉的前辈是 [VMess](/cidian/vmess/)，后者自带加密和时间校验，设计更重。

## 在套餐页和客户端里的哪里会看到

套餐页的“支持协议”一栏、节点详情里的“协议类型”，客户端节点编辑页的“类型”下拉，都会出现它。节点参数里经常还带有传输方式、TLS 开关、流控等字段，这些是 VLESS 搭配的部分，字段名随客户端不同而不同。

能否使用，取决于你的[代理内核](/cidian/neihe/)是否支持。较新的 Xray、sing-box、mihomo 内核通常支持，但具体到某款客户端、某个版本，要以其官方说明为准。可以在[V2Ray 机场怎么选](/zhinan/v2ray-jichang/)里看协议与客户端的对照思路。

## 与其他协议放在一起看

| 协议 | 加密由谁负责 | 一般的定位 |
| --- | --- | --- |
| VLESS | 搭配的传输层 | 灵活、轻量、依赖配置 |
| [VMess](/cidian/vmess/) | 协议自带 | 兼容面广、较早的方案 |
| [Trojan](/cidian/trojan/) | TLS | 外观接近常见的 HTTPS |
| [Hysteria2](/cidian/hysteria2/) | QUIC 内置 | 基于 UDP，面向差网络 |

完整的选择思路在[机场协议怎么选](/zhinan/jichang-xieyi/)，这里不重复展开。

## 常见误解

- “VLESS 比 VMess 先进，所以必须换”。协议没有单一的高低，取决于服务端怎么部署，你的客户端是否支持。
- “看到 VLESS 就等于加密安全”。如果搭配的传输层没有开启安全方案，数据的保护程度就可能不够，这需要服务端配置正确。
- “能用 VLESS 就不会被识别”。能否被网络环境识别，取决于整个链路的配置，协议名称给不出这种承诺。

## 怎么自己判断适不适合你

第一，确认你的客户端和内核支持它；第二，查看节点参数里的传输与安全设置有没有被完整导入；第三，导入后在你自己的网络里试连几个时段。想了解 V2Ray 与 Xray 的整体关系，可以读[V2Ray 是什么](/zhinan/v2ray-shi-shenme/)；协议的权威说明以 [Project X（Xray）文档](https://xtls.github.io/) 为准。
