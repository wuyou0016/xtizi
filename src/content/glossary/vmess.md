---
term: VMess
definition: "VMess 是 V2Ray 项目最早推出的代理协议，自带加密和基于时间的身份校验，兼容面很广。"
extendedExplanation: "VMess 要求客户端和服务器的系统时间不能相差太大，否则会连不上。你会在机场协议说明、节点详情和订阅链接里看到它；几乎所有 V2Ray 系和 Clash 系客户端都能识别，但新部署更多见 VLESS 等方案。"
aliases: [VMess 协议, V2Ray 协议]
relatedTerms: [vless, shadowsocks, trojan, neihe]
relatedArticles: [v2ray-shi-shenme, jichang-xieyi]
updatedAt: 2026-10-08
---

## 它从哪里来，做了什么

VMess 是 V2Ray 项目为自己设计的原生协议。和 [Shadowsocks](/cidian/shadowsocks/) 的“约定算法加密码”相比，它多了一层用户标识和基于时间的校验：服务器依据客户端发来的标识与时间信息，判断请求是否合法，数据本身也带有加密。V2Ray 的原理和文档在 [V2Fly 文档](https://www.v2fly.org/) 里有说明；它与 Xray、VLESS 的关系，请读[V2Ray 是什么](/zhinan/v2ray-shi-shenme/)。

## 为什么对系统时间敏感

因为校验里用到了时间，客户端和服务器的时钟如果偏差过大，服务器就会认为请求不合法，表现就是节点全部超时或连接被拒。一般来说，把设备的时间同步到网络时间，这类问题就消失了。如果你在电脑上突然所有 VMess 节点都不通，可以先看系统时间有没有走偏，相关排查参考[梯子提示证书错误](/paicha/zhengshu-shijian/)里关于系统时间的部分。

## 节点参数和使用位置

典型的 VMess 节点参数包括：服务器地址、端口、用户 ID、加密方式和传输方式（比如 TCP、WebSocket、gRPC 等），传输层往往还搭配 TLS。不同客户端的字段名略有不同。

在[机场](/cidian/jichang/)的套餐页，它多出现在“支持协议”的列表中，订阅里则以 `vmess://` 开头的链接居多。因为兼容性好，很多老订阅都以它作为默认类型。

## 在协议谱系里的位置

| 协议 | 与 VMess 的关系 |
| --- | --- |
| [VLESS](/cidian/vless/) | 同一生态的后续协议，设计更轻，把加密交给传输层 |
| [Shadowsocks](/cidian/shadowsocks/) | 更简单的约定式加密，无时间校验 |
| [Trojan](/cidian/trojan/) | 依赖 TLS 与密码，不同的设计路线 |

具体取舍可以在[机场协议怎么选](/zhinan/jichang-xieyi/)中对照。

## 常见误解

- “VMess 已经被淘汰”。它仍被广泛支持，只是在新部署中不再是唯一选择。
- “VMess 就是 V2Ray”。V2Ray 是项目和内核，VMess 只是它的一种协议。
- “时间同步只影响证书”。对 VMess 来说，时间同步还直接影响能否通过校验。

## 怎么自己判断

如果你的节点是 VMess，连不上的第一反应之一就是核对设备时间与时区，其次才是看节点本身和网络环境。在选择客户端时，确认它所依赖的[内核](/cidian/neihe/)支持你节点用到的传输方式，也很有必要。
