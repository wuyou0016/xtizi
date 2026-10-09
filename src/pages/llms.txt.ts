import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';
import { getBoard } from '../data/utils/board';
import { CLIENTS, MONITOR, RELEASES_CHECKED_AT } from '../data/utils/live';

// llms.txt：给大模型和检索类产品读的站点导览。只写站点是什么、数据怎么来、有哪些栏目，不夹带任何营销话术。
export const GET: APIRoute = async () => {
  const board = await getBoard();
  const base = siteConfig.url;
  const body = `# ${siteConfig.brandName}（xtizi.com）

> 梯子选购指南站：整理 ${board.rows.length} 家机场的价格、流量、线路、协议、节点地区资料并逐项标注来源，提供 ${CLIENTS.length} 款梯子客户端的官方下载地址与版本核验，按使用场景讲清怎么选、怎么用、出问题怎么查。

## 数据与规则
- 没有自己测过的指标（速度、延迟、解锁）不写数字，页面标注“实时检测中”。
- 榜单名次不是测速名次；价格与套餐资料没核实到的品牌排在最后，标为“资料待核实”。
- 客户端版本来自 GitHub 官方接口（最近核验 ${RELEASES_CHECKED_AT.slice(0, 10)}）；机场官网可访问性由脚本定时检测（最近检测 ${MONITOR.checkedAt.slice(0, 10)}），只说明检测点能否打开官网入口。
- 排名与核验方法：${base}/fangfa/　更正记录：${base}/gengzheng/

## 主要栏目
- [机场推荐榜](${base}/tuijian/)：${board.rows.length} 家机场分档对照，另有性价比、便宜、专线、月付、大流量、稳定六张专项表
- [机场大全](${base}/jichang/)：每家机场一页资料
- [梯子下载](${base}/xiazai/)：客户端官方地址、最新版本与核验时间
- [使用场景](${base}/changjing/)：ChatGPT、Claude、奈飞、Telegram、YouTube 等服务对梯子的要求
- [选购指南](${base}/zhinan/)：梯子是什么、机场怎么选、梯子多少钱、线路与协议
- [使用教程](${base}/jiaocheng/)：订阅导入、系统代理、TUN、分流与各客户端教程
- [故障排查](${base}/paicha/)：连不上、速度慢、订阅更新失败等按现象排查
- [避坑指南](${base}/bikeng/)：跑路前兆、永久套餐、假官网、订阅泄露
- [机场官网检测](${base}/jiance/)：逐家官网可访问性记录
- [机场对比](${base}/duibi/)　[机场优惠码](${base}/youhuima/)　[梯子导航](${base}/daohang/)　[术语库](${base}/cidian/)　[常见问题](${base}/faq/)　[工具箱](${base}/gongju/)
- 全站内容索引：${base}/sitemap-index.xml
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
