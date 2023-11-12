module.exports = {
  title: "xihe's Blog",
  description: "翕熇的博客",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "翕熇的博客",
        items: [],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false, // 不折叠
        children: [{ title: "学前必读", path: "/" }],
      },
      {
        title: "React",
        path: "/guide/React",
        collapsable: true, // 不折叠
        children: [
          { title: "条件类型", path: "/handbook/ConditionalTypes" },
          { title: "泛型", path: "/handbook/Generics" },
        ],
      },
    ],
  },
};
