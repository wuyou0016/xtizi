import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

// robots.txt 只负责 crawl policy，不负责 indexability（是否收录由各页面的 meta robots 决定）。
export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${siteConfig.url}/sitemap-index.xml
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
