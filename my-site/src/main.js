import Vue from "vue";
import App from "./App.vue";
import "./style/global.less";
import router from "./router";
import "./eventBus"


import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;

import "./mock"

import "./api/banner"

import store from "./store";
store.dispatch("setting/fetchSetting")

//注册全局指令
import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);

import vLazy from "./directives/lazy";
Vue.directive("lazy", vLazy)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')


//测试

/* import * as blogApi from "./api/blog"

blogApi.getBlogTypes().then((r) => {
    console.log("博客分类", r)
})

blogApi.getBlogs().then((r) => {
    console.log("博客", r)
}) */