# 选梯子（xziti.com）

梯子选购指南站：机场推荐榜、机场资料库、梯子下载（客户端官方地址与版本核验）、使用场景、选购指南、教程、故障排查、避坑指南、机场官网检测、对比、优惠码与在线工具。

- 框架：Astro（纯静态输出），部署到 Cloudflare Workers Static Assets（`wrangler.toml`）
- Node：22（见 `.nvmrc`）

## 常用命令

```bash
npm install
npm run dev            # 本地开发
npm run build          # 构建到 dist/（含外链 rel 后处理）
node scripts/audit-dist.mjs      # 构建后全站审计：标题/描述/H1/canonical/JSON-LD/死链/页脚与外链规则




node scripts/fetch-releases.mjs  # 读取客户端最新版本（GitHub 官方接口）
node scripts/monitor.mjs         # 检测机场官网可访问性
node scripts/indexnow.mjs        # 向 IndexNow 提交 sitemap 里的全部 URL
```

## 目录

- `src/data/providers/providers.json`：机场资料（价格、线路、协议、节点地区、来源）
- `src/data/board/board.json`：推荐榜（推荐档定义、名次、一句话理由）
- `src/data/live/`：自动采集的数据（客户端列表与版本、官网检测）
- `src/data/sources.json`：允许引用的官方来源白名单
- `src/content/articles/`：文章（选购指南 / 使用场景 / 梯子下载 / 使用教程 / 故障排查 / 避坑指南）
- `src/content/glossary/`：术语
- `src/data/seo/`：问答、关键词专题与机场资料页问答
- `src/data/copy/`：专项榜单页面文案

## 数据原则

没有自己测过的指标（速度、延迟、解锁）不写数字，页面显示“实时检测中”；价格、线路等资料逐项标注来源；客户端版本与官网可访问性由脚本定时采集并公开核验时间（`.github/workflows/refresh-data.yml`）。
