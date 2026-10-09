---
type: changjing
title: "GitHub 打开慢用什么梯子？开发者的代理配置思路"
description: "GitHub 梯子不只是让网页打开：git clone、SSH、Release 下载和容器镜像走的是不同通道。本文讲每条通道怎么接入 GitHub 代理，哪些做法能给 GitHub 加速，以及用哪几条命令自己验证是否生效。"
category: 工作与学习
primaryKeyword: GitHub 梯子
secondaryKeywords: [GitHub 加速, GitHub 代理, 开发者梯子]
difficulty: intermediate
publishedAt: 2026-10-08
updatedAt: 2026-10-08
answer: "GitHub 打开慢，先分清慢在哪条通道：网页、HTTPS 克隆、SSH、Release 下载和容器镜像各自用不同的代理设置。浏览器能开不代表终端也走了代理，需要给 git 和 SSH 单独配置，再用命令验证。"
limits:
  - 本文不提供任何节点访问 GitHub 的测速结果，克隆耗时需要你在自己的网络下对比。
  - 命令与配置示例以常见系统为准，端口、路径请按你的客户端和系统自行调整。
  - 公司账号、私有仓库的访问策略由所在组织决定，本文不覆盖。
sources:
  - title: GitHub 文档
    url: https://docs.github.com/en
rankBlock: overall
relatedTopics: [zhongduan-daili, ai-biancheng, fenliu-guize, tizi-liuliang, jiedian-cesu, liuliang-beilv]
faqs:
  - q: GitHub 网页能打开，但 git clone 很慢或直接失败，是线路问题吗？
    a: "不一定。网页走浏览器或系统代理，git clone 走的是 git 自己的网络设置，两者可以一个走了代理、一个没走。先看终端里有没有给 git 或环境变量配置代理，再用 git ls-remote 测一下连接。只有网页和命令行都慢时，才值得怀疑线路本身。"
  - q: git 需要单独设置代理吗？设置错了怎么取消？
    a: "只开系统代理时，git 通常不会自动跟随，需要单独设置。推荐只对 github.com 设置，避免公司内部仓库也走代理。取消时用 git config 的 unset 参数删除对应配置项即可。关掉梯子后 git 报连接被拒绝，多半就是这条配置还留着。"
  - q: 用 SSH 方式克隆一直超时怎么办？
    a: "SSH 不读取 HTTP 代理，网络受限时常见 22 端口不通。可以改用 HTTPS 地址克隆，或者按 GitHub 文档把 SSH 改走 443 端口，再配合代理命令或 TUN 模式。配置后用 ssh -T git@github.com 测一次，看到认证成功的提示就说明通道已经通了。"
  - q: 下载 GitHub Release 很耗流量吗？
    a: "耗多少取决于你下载的文件大小，机场按节点倍率折算后扣减。一个大安装包加几次重试，就可能比一天的网页浏览更耗流量。下载前看清文件大小，优先选自己架构对应的那一个包，中途失败时用支持断点续传的工具，避免整包重下。"
  - q: 用第三方的 GitHub 加速镜像站安全吗？
    a: "不建议把它当日常方案。镜像站能看到你请求了什么，下载的二进制也可能被替换，在上面输入账号或访问令牌更危险。更稳妥的做法是通过自己的梯子访问官方地址，只让 GitHub 相关域名走代理，并核对发布页提供的校验信息。"
---

GitHub 梯子的难点不在网页，而在开发者每天都要用的那几条通道：浏览器看仓库页面、git clone 拉代码、SSH 推送、从 Release 下载安装包、docker 拉镜像。它们各走各的路，浏览器打得开并不代表终端也走了代理。先把通道分清，再逐条接入，比盲目换线路有用得多。

## GitHub 慢在哪一条通道？先把五种访问方式分开

| 通道 | 常见操作 | 默认读取谁的代理设置 | 常见症状 |
| --- | --- | --- | --- |
| 网页与静态资源 | 浏览仓库、Issues、Pull Request | 浏览器或系统代理 | 页面很久才出来，头像或样式缺失 |
| HTTPS 克隆与拉取 | git clone https 地址、git pull | git 自己的配置或终端环境变量 | 卡在克隆过程，或报连接超时、连接被重置 |
| SSH 通道 | git@github.com 形式的克隆与推送 | 不读取 HTTP 代理，要单独配置 | 连接超时，或 22 端口不通 |
| Release 与附件下载 | 下载安装包、源码压缩包 | 浏览器或下载工具 | 速度忽快忽慢，中途断开 |
| 容器镜像与依赖包 | docker 拉取镜像、包管理器安装依赖 | docker 守护进程、包管理器各自的设置 | 拉取超时 |

症状一列只是常见表现，不是诊断结论。同一个现象可能有不同原因，所以后面每一节都会给出自己验证的办法。

这张表的用处是缩小范围。网页能刷出来、git clone 却卡住，问题多半出在 git 自己的代理设置上，换十个节点也解决不了；反过来，网页和命令行都慢，才轮到怀疑线路本身。HTTPS 与 SSH 两种远程地址的区别，GitHub 在[关于远程仓库的文档](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories)里有说明，不熟悉的话先读一遍。

## GitHub 梯子的接入层：系统代理、TUN 还是终端代理

梯子客户端把流量接进来的方式有三层，管的范围不同。

| 接入层 | 能管到什么 | 管不到什么 | 适合谁 |
| --- | --- | --- | --- |
| 系统代理 | 浏览器和遵循系统代理的程序 | 多数命令行工具、SSH、部分编辑器内置的 git | 只浏览网页、下载安装包 |
| TUN 模式 | 几乎所有出站流量，包括 SSH | 需要权限；和公司 VPN 并存时可能互相干扰 | 想一次配好、终端和编辑器都要用 |
| git、SSH 自己的配置 | 指定的那条命令 | 其他程序 | 想精确控制，只让 GitHub 走代理 |

只看网页、偶尔下载安装包，系统代理加分流规则就够，设置方法见[系统代理怎么设置](/jiaocheng/xitong-daili/)。终端、编辑器、容器都要用时，优先考虑 TUN，概念和开关位置在[TUN 模式](/jiaocheng/tun-moshi/)里。想让只有 git 走代理，就用下面两节的 git 和 SSH 配置。

不管选哪一层，规则里都要让 GitHub 相关域名走代理。除了 github.com，通常还有 githubusercontent.com、githubassets.com 这类静态资源和文件分发域名。规则模式下，只要有一个域名没被规则覆盖，它的请求就会直连，表现为页面能出来、头像和样式却加载不全。主流规则集一般已包含这些域名，自己写规则时的写法见[分流规则怎么写](/jiaocheng/fenliu-guize/)。

## GitHub 代理怎么配给 git：只对 github.com 生效

git 不会自动读取系统代理。常见做法是在 git 配置里指定代理，并且只作用于 GitHub，这样公司内部的代码仓库不会被误送进代理。

1. 在梯子客户端里找到本地代理端口，具体数字以客户端显示为准。
2. 执行下面的命令，把端口号换成你自己的：

   ```
   git config --global http.https://github.com.proxy http://127.0.0.1:端口号
   ```

3. 如果客户端给出的本地端口是 SOCKS5 类型，把地址开头换成 `socks5h://`。多出来的 h 表示域名交给代理一侧解析。
4. 想取消时，删除这条配置：

   ```
   git config --global --unset http.https://github.com.proxy
   ```

5. 随时可以列出当前所有和代理相关的配置，检查有没有残留：

   ```
   git config --global --get-regexp proxy
   ```

还有一种做法是设置 HTTPS_PROXY 之类的环境变量，它对整个终端会话生效，不止 git。两种做法的区别，以及 npm、Docker 的写法，见[终端怎么走代理](/jiaocheng/zhongduan-daili/)。用 AI 编程工具的人要留意，编辑器里的补全服务有自己的网络设置，和终端是两套，细节在[AI 编程工具用什么梯子](/changjing/ai-biancheng/)。

## SSH 克隆为什么不吃 HTTP 代理：三种办法

形如 git@github.com 开头的地址走 SSH。它既不读系统代理，也不读 git 的 http.proxy 设置，所以网络受限时常见连接超时。可以按下面的顺序选办法。

- **改用 HTTPS 地址克隆。** 最省事，配好上一节的 git 代理即可。推送时需要的凭据类型以 GitHub 当前的认证要求为准。
- **让 SSH 走 443 端口。** GitHub 文档提供了[通过 HTTPS 端口使用 SSH](https://docs.github.com/en/authentication/troubleshooting-ssh/using-ssh-over-the-https-port)的做法。在用户目录下的 SSH 配置文件里加入：

  ```
  Host github.com
    HostName ssh.github.com
    Port 443
    User git
  ```

- **再给 SSH 加一层代理命令。** 在上面这段配置末尾补一行，让它经本地 SOCKS5 端口出去。这个写法适用于 macOS 和多数 Linux，Windows 上的写法不同，建议直接用 TUN：

  ```
    ProxyCommand nc -X 5 -x 127.0.0.1:端口号 %h %p
  ```

- **开 TUN 模式。** 让 SSH 的流量被客户端自然接管，不需要再改任何 SSH 配置，但要处理好权限和与其他 VPN 的冲突。

没有把握时，从第一种开始。大多数日常开发用 HTTPS 地址就能走通，只有需要 SSH 密钥认证的流程才值得折腾后面几种。

## 大仓库克隆和 Release 下载：流量与稳定性怎么算

克隆消耗的流量，约等于你真正下载下来的内容量，而一个仓库的全部历史可能比当前代码大得多。只想看最新代码、不需要完整历史时，用浅克隆：

```
git clone --depth 1 https://github.com/用户名/仓库名.git
```

之后需要完整历史，再用 `git fetch --unshallow` 补齐。仓库使用了 Git LFS 时，大文件是另外的请求，会再单独消耗一份流量。

Release 里的安装包通常由文件分发域名提供，浏览器下载时遇到中断，应该用支持断点续传的下载工具，别每次整包重来。重试越多，消耗越大。

机场的流量按节点倍率折算。举例：假设套餐 A 的某个节点倍率是 2，你下载了 1 GB 的安装包，后台可能记 2 GB。倍率的含义见[流量倍率](/zhinan/liuliang-beilv/)，想估算整月用量可以用[流量计算器](/gongju/liuliang-jisuanqi/)。经常拉大仓库、大镜像的人，选套餐时要把流量放在比价格更靠前的位置。

## 镜像站和第三方加速：能不用就不用

搜索 GitHub 加速，会看到很多镜像站、加速链接和公共代理。它们的共同问题是你看不到背后是谁。

- 你请求了什么仓库、下载了什么文件，运营者都看得到。
- 下载回来的可执行文件可能被替换过，而你很难发现。
- 需要登录或输入访问令牌的页面，绝不能在第三方站点操作。
- 稳定性没人负责，今天能用不代表明天还能用。

更稳妥的路径是：把自己的 GitHub 梯子用在官方地址上，只让 GitHub 相关域名走代理，下载后核对发布页提供的校验信息（如果有的话）。免费资源的共性风险可以看[免费节点有什么风险](/bikeng/mianfei-jiedian-fengxian/)。

## 自己验证：几条命令判断每条通道通不通

按通道逐个测，比凭感觉判断可靠。

1. **网页通道。** 浏览器里开关梯子各访问一次 github.com，并打开一个仓库页面，看头像和样式是否完整。
2. **终端能否连上。** 执行 `curl -I https://github.com`，返回一个 HTTP 状态行说明终端能连上；长时间无响应或报错，说明终端没走代理。
3. **git 通道。** 执行 `git ls-remote https://github.com/用户名/仓库名.git HEAD`，它只测连接，不下载代码。
4. **SSH 通道。** 执行 `ssh -T git@github.com`，返回认证成功但不提供终端访问的提示，就说明通了。
5. **查残留。** 用上一节的 `git config --global --get-regexp proxy` 和环境变量检查，确认没有过期的代理设置。关掉梯子后 git 仍然报连接被拒绝，几乎都是这里残留的配置，修法见[关掉梯子后上不了网](/paicha/guan-tizi-meiwang/)。
6. **对比节点。** 对同一个小仓库做浅克隆，用 `time` 命令（Windows PowerShell 里用 Measure-Command）记录耗时，换节点再做，同一节点测三次以上。耗时受时段影响很大，不要凭一次结果下结论。

节点延迟数字怎么读，见[节点测速](/jiaocheng/jiedian-cesu/)。选梯子没有任何节点访问 GitHub 的测速数据，这一步只能由你自己完成。

## 下一步：先把通道配通，再决定要不要加钱

- **偶尔看代码、下载安装包：** 一个能稳定连接的普通套餐加系统代理就够，不必专门去买一条贵的 GitHub 梯子。
- **每天克隆、拉镜像：** 先配 git 和 SSH，再看流量是否吃紧。流量大户可以从[大流量套餐推荐](/tuijian/daliuliang/)里筛。
- **编辑器和命令行都要用：** 开 TUN 模式，或读[终端怎么走代理](/jiaocheng/zhongduan-daili/)把工具逐个配好。
- **还没有机场：** 从[机场推荐](/tuijian/)开始，买之前先按上面的验证步骤试用几天。

页面下方的数据块列出了资料里的机场信息，价格与流量规则下单前以官方结算页为准，也不代表这些线路访问 GitHub 的表现。
