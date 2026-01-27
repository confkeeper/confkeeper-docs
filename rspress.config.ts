import { defineConfig } from '@rspress/core';
import { pluginSitemap } from "@rspress/plugin-sitemap";
import mermaid from 'rspress-plugin-mermaid';

const domain: string = 'https://confkeeper.tteam.icu';

export default defineConfig({
  plugins: [pluginSitemap({siteUrl: domain}), mermaid()],
  lang: 'zh',
  root: 'docs',
  title: 'confkeeper文档',
  icon: '/confkeeper.png',
  outDir: 'dist',
  LlmsUI: true,
  search: {
    codeBlocks: true,
  },
  markdown: {
    showLineNumbers: true,
  },
  route: {
    cleanUrls: true,
  },
  ssg: {
    experimentalWorker: true,
  },
  llms: true,
  themeConfig: {
    fallbackHeadingTitle: false,
    prevPageText: '上一页',
    nextPageText: '下一页',
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/confkeeper/confkeeper' },
    ],
    footer: {
      message: 'Apache-2.0 license<br />Copyright © 2025 <a href="https://github.com/buyfakett" target="_blank" style="color: skyblue">buyfakett</a>',
    }
  }
});
