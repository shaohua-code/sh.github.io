import { defineConfig } from "vitepress";
export default defineConfig({
  lang: "zh-CN",
  title: "VitePress",
  base: "./",
  description: "VitePress - The Vite-powered Static Site Generator",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
      },
    ],
  },
});
