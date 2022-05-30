/*  import Home from "@/views/Home";
 import About from "@/views/About";
 import Blog from "@/views/Blog";
 import Project from "@/views/Project";
 import Message from "@/views/Message";
 import BlogDetail from "@/views/Blog/Detail"; */

import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";

configure({
    trickleSpeed: 20,
    showSpinner: false,
});

function delay(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

function getPageComponent(pageCompResolver) {
    return async() => {
        start();
        if (process.env.NODE_ENV === "development") {
            await delay(2000);
        }
        const comp = await pageCompResolver();
        done();
        return comp;
    };
}

export default [{
        name: "Home",
        path: "/",
        component: getPageComponent(() =>
            import ( /* webpackChunkName: "home" */ "@/views/Home")
        ),
        meta: {
            title: "首页"
        }
    },
    {
        name: "About",
        path: "/about",
        component: getPageComponent(() =>
            import ( /* webpackChunkName:"about" */ "@/views/About")
        ),
        meta: {
            title: "关于我"
        }
    },
    {
        name: "Blog",
        path: "/article",
        component: getPageComponent(() =>
            import ( /* webpackChunkName:"Blog" */ "@/views/Blog")
        ),
        meta: {
            title: "文章"
        }
    },
    {
        name: "CategoryBlog",
        path: "/article/cate/:categoryId",
        component: getPageComponent(() =>
            import ( /* webpackChunkName:"Blog" */ "@/views/Blog")
        ),
        meta: {
            title: "文章"
        }
    },
    {
        name: "BlogDetail",
        path: "/article/:id",
        component: getPageComponent(() =>
            import ( /* webpackChunkName:"BlogDetail" */ "@/views/Blog/Detail")
        ),
        meta: {
            title: "文章详情"
        }
    },
    {
        name: "Project",
        path: "/project",
        component: getPageComponent(() =>
            import ( /* webpackChunkName:"Project" */ "@/views/Project")
        ),
        meta: {
            title: "项目&效果"
        }
    },
    {
        name: "Message",
        path: "/message",
        component: getPageComponent(() =>
            import ( /* webpackChunkName:"Message" */ "@/views/Message")
        ),
        meta: {
            title: "留言板"
        }
    },
];