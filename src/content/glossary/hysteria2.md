---
term: Hysteria2
definition: "Hysteria2 是基于 QUIC、走 UDP 的代理协议，自带加密与拥塞控制，面向高延迟、丢包较多的网络环境设计。"
extendedExplanation: "Hysteria2 的流量是 UDP 而不是常见的 TCP，所以对网络环境更挑：有些网络会限制 UDP。你会在机场的协议说明和节点类型里看到它，通常需要 mihomo 或 sing-box 等较新内核支持，具体以客户端当前版本为准。"
aliases: [Hy2, Hysteria 2]
relatedTerms: [vless, trojan, shadowsocks, neihe]
relatedArticles: [jichang-xieyi, clash-jichang]
updatedAt: 2026-10-08
---

## 它和前面几种协议最大的不同

[Shadowsocks](/cidian/shadowsocks/)、[Trojan](/cidian/trojan/) 等常见协议大多走 TCP，而 Hysteria2 建立在 QUIC 之上，数据通过 UDP 传输。QUIC 本身内置了 TLS 加密，也是 HTTP/3 使用的传输方式，所以 Hysteria2 的外观在设计上接近 HTTP/3 流量。官方文档把它描述为面向高延迟和丢包环境、追求较高吞吐的协议，详细内容见 [Hysteria 2 官方文档](https://v2.hysteria.network/)。

## 为什么说它更挑网络环境

UDP 流量在一些网络里会被限制、限速，或者受运营商的 QoS 策略影响。如果你所在的网络对 UDP 不友好，Hysteria2 节点就可能连不上或表现不佳，这时问题出在网络环境而不是机场。

另外，它的拥塞控制方式相对激进，官方文档里也提到了可以配置带宽参数。对服务商来说，这意味着需要更细致的带宽管理；对用户来说，就是节点表现可能与其他协议明显不同，需要在自己的网络里实际比较。

## 在哪里会遇到

- 机场的协议说明里，常作为“较新的可选协议”出现。
- 节点详情的“类型”里，写作 hysteria2 或 hy2。
- 订阅里以 `hysteria2://` 或 `hy2://` 开头的链接。

能否使用，取决于[代理内核](/cidian/neihe/)。较新的 mihomo、sing-box 内核通常支持，但旧版内核和部分客户端不支持，所以要先在 [Clash 机场怎么选](/zhinan/clash-jichang/) 里确认订阅格式与内核兼容性。

## 常见误解

1. “Hysteria2 就是更快”。它只是在特定网络条件下有设计上的优势，是否真的有利，要看你的线路实际状况，不能由协议名推断。
2. “能连上就说明一切正常”。UDP 受限的网络里，有时能握手但传输不稳定，要多观察。
3. “所有客户端都能用”。支持情况因客户端和版本而异，需要核对。

## 怎么自己判断

准备两条同一地区的节点，一条用 Hysteria2，一条用其他协议，在你常用的网络、不同时段里各试一次看看实际感受。如果 Hysteria2 的节点连不上，先排查网络是否限制 UDP，再看客户端内核是否支持。协议整体的对照可以回到[机场协议怎么选](/zhinan/jichang-xieyi/)。
