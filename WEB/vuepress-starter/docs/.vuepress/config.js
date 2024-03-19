// import { defaultTheme } from "vuepress";
const { defaultTheme } = require("vuepress");

module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  // theme: defaultTheme({}),
  themeConfig: {
    search: true,
    lastUpdated: "Last Updated",
    searchMaxSuggestions: 10,
    // nav: [
    //   { text: "Home", link: "/" },
    //   { text: "Guide", link: "/packages.html" },
    //   { text: "External", link: "/@utilslib/dom" },
    // ],
    displayAllHeaders: true,
    // sidebar: ["/", "/packages.html"],
    sidebar: [
      {
        title: "Group 1", // 必要的
        path: "/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          {
            title: "Child 1",
            path: "/",
          },
        ],
      },
      {
        title: "Group 2",
        children: [
          /* ... */
        ],
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
      },
    ],
  },
  plugins: [
    [
      "vuepress-plugin-typedoc",
      // {
      //   entryPoints: ["../src/common.ts"],
      //   tsconfig: "../tsconfig.json",
      // },
    ],
  ],
};
