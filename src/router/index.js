import Bundle from "../assets/js/bundle.js";
import React from "react";
export default [
  {
    path: "/home",
    meta: {
      title: "首页",
    },
    component(props) {
      // 这里的 component 函数也是一个高阶组件
      return (
        <Bundle {...props} load={() => import("@/views/home/index.js")} />
      );
    },
  },
  {
    path: "/my",
    meta: {
      title: "我的",
    },
    component(props) {
      return <Bundle {...props} load={() => import("@/views/my/index.js")} />;
    },
  },
  {
    path: "/study",
    meta: {
      title: "学习",
    },
    component(props) {
      return (
        <Bundle {...props} load={() => import("@/views/study/index.js")} />
      );
    },
  },
];
