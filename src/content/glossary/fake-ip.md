---
term: Fake-IP
definition: "Fake-IP 是 Clash 系内核的一种 DNS 工作模式：应用查询域名时，先返回一个虚拟 IP，真正的解析推迟到节点一侧完成。"
extendedExplanation: "Fake-IP 能减少一次本地解析，也有助于避免 DNS 泄漏，但个别程序拿到虚拟 IP 可能出现异常。你会在 Clash 系客户端的 DNS 设置里看到它，与 redir-host 并列，以内核文档为准。"
aliases: [fake-ip 模式, 虚拟 IP 模式]
relatedTerms: [dns-xielou, tun, fenliu, neihe]
relatedArticles: [clash-dns, guonei-wangzhan-man]
updatedAt: 2026-10-08
---

## 它是怎么工作的

正常情况下，应用要访问一个域名，得先问 DNS 要真实 IP，再连过去。启用 Fake-IP 后，客户端的内核会截获这个查询，立刻回复一个“假的” IP，这个 IP 取自内核预留的一段地址，一般落在保留的内网地址范围内，具体范围以[内核文档](https://wiki.metacubex.one/)为准。内核同时记下“这个假 IP 对应哪个域名”。

之后应用向这个假 IP 发起连接，内核根据记录还原出域名，再按[分流](/cidian/fenliu/)规则决定走节点还是直连，需要代理时，把域名交给节点那边去解析。

## 对照 redir-host

| 对比项 | Fake-IP | redir-host |
| --- | --- | --- |
| 应用拿到的 IP | 内核分配的虚拟 IP | 真实解析出来的 IP |
| 是否要先在本地完成解析 | 一般不需要 | 需要 |
| 与 [DNS 泄漏](/cidian/dns-xielou/)的关系 | 减少本地解析，降低泄漏的机会 | 取决于 DNS 配置 |
| 兼容性 | 个别依赖真实 IP 的程序可能出问题 | 一般更接近原样 |

两种模式各有取舍，没有统一的答案，选择思路见[Clash DNS 怎么设置](/jiaocheng/clash-dns/)。

## 在哪里会看到

- Clash 系客户端或配置文件里的 DNS 部分，有一个增强模式的选项，可选 Fake-IP 或 redir-host。
- 还有一份“过滤名单”，列出不使用 Fake-IP 的域名，让它们返回真实 IP。
- 遇到网络异常时，抓包或诊断工具里看到的目标地址若落在奇怪的保留段，多半就是它。

## 它可能带来的问题

- 需要真实 IP 的程序，比如局域网内的设备发现、对时服务、部分联机游戏和语音软件，可能无法正常工作。
- 使用 Fake-IP 时，国内网站如果没有被正确放进直连规则，或者过滤名单配置不当，可能变慢，排查见[开了梯子国内网站变慢](/paicha/guonei-wangzhan-man/)。
- 在配合[TUN 模式](/cidian/tun/)使用时，如果 DNS 设置有冲突，也会表现为部分网站打不开。

## 怎么自己判断要不要用

如果你日常主要是浏览器和常见软件，默认的 Fake-IP 设置多半没有问题。出现“个别程序打不开或不稳定”时，先把它们的域名加进过滤名单试一试，再决定是否切换到 redir-host。每改一次，用一两个目标逐一验证，避免同时改动多处导致无法定位。
