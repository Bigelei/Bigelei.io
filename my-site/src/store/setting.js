import { getSetting } from "@/api/setting"
import { titleController } from "@/utils";

export default {
    namespaced: true,
    state: {
        loading: true,
        data: null,
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        async fetchSetting(ctx) {
            ctx.commit("setLoading", true);
            const resp = await getSetting();
            ctx.commit("setData", resp)
            ctx.commit("setLoading", false)
            if (resp.favicon) {
                let link = document.querySelector("link[ref='shortcut icon]");
                if (link) {
                    return;
                }
                link = document.createElement("link");
                /*  link.rel = "shortcut icon"; */
                link.type = "image/x-icon";
                link.href = resp.favicon;
                document.querySelector("head").appendChild(link);
            }
            if (resp.siteTitle) {
                titleController.setSiteTitle(resp.siteTitle)
            }
        }
    }
}