//const listeners = {}
import Vue from "vue"
const app = new Vue({})

//事件总线
/* export default {
    $on(eventName, handler) {
        if (!listeners[eventName]) {
            listeners[eventName] = new Set();
        }
        listeners[eventName].add(handler);
    },
    $off(eventName, handler) {
        if (!listeners[eventName]) {
            return;
        }
        listeners[eventName].delete(handler)
    },
    $emit(eventName, ...agrs) {
        if (!listeners[eventName]) {
            return
        }
        for (const handler of listeners[eventName]) {
            handler(...agrs)
        }
    }
}; */
Vue.prototype.$bus = app

export default app