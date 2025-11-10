import { defineConfig } from '@rspress/core';
import { pluginLlms } from '@rspress/plugin-llms';

export default defineConfig({
  plugins: [pluginLlms()],
  lang: 'zh',
  root: 'docs',
  title: 'confkeeper文档',
  icon: '/confkeeper.png',
  outDir: 'dist',
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/confkeeper/confkeeper-docs' },
    ],
    footer: {
      message: 'Apache-2.0 license<br />Copyright © 2025 <a href="https://github.com/buyfakett" target="_blank" style="color: skyblue">buyfakett</a>',
    }
  },
  markdown: {
    showLineNumbers: true,
  }
});
