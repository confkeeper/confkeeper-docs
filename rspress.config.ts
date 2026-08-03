import { defineConfig } from '@rspress/core';
import { pluginSitemap } from "@rspress/plugin-sitemap";
import mermaid from 'rspress-plugin-mermaid';
import { pluginGiscus } from 'rspress-plugin-giscus';

const domain: string = 'https://confkeeper.tteam.icu';

export default defineConfig({
  plugins: [
    pluginGiscus({
            id:"comments",
            repo:"confkeeper/comments",
            repoId:"R_kgDOROqXug",
            category:"Announcements",
            categoryId:"DIC_kwDOROqXus4C2SVT"
        }),
    pluginSitemap({siteUrl: domain}), 
    mermaid()
  ],
  lang: 'en',
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'confkeeper Docs',
      description: 'Your configuration center',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: 'confkeeper文档',
      description: '您的配置文件中心',
    },
  ],
  root: 'docs',
  title: 'confkeeper Docs',
  description: 'Your configuration center',
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
    localeRedirect: 'never',
  },
  llms: true,
  ssg: true,
  themeConfig: {
    fallbackHeadingTitle: false,
    socialLinks: [
      { icon: 'github', mode: 'github-stars', content: 'https://github.com/confkeeper/confkeeper' },
    ],
    footer: {
      message: 'Apache-2.0 license<br />Copyright © 2025 <a href="https://github.com/buyfakett" target="_blank" style="color: skyblue">buyfakett</a>',
    }
  }
});
