import eventBus from "@/eventBus"
import { debounce } from "@/utils"
import defaultGif from "@/assets/datou.jpg"

let imgs = []

function setImage(img) {
    img.dom.src = defaultGif;
    const clientHeight = document.documentElement.clientHeight
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150
    if (rect.top >= -height && rect.top <= clientHeight) {
        img.dom.src = img.src;
        imgs = imgs.filter(i => i !== img)
    }
}


//希望，调用该函数，就可以设置那些合适的图片
function setImages() {
    for (const img of imgs) {
        //处理该图片 
        setImage(img)
    }
}


function handleScroll() {
    setImages()
}


eventBus.$on("mainScroll", debounce(handleScroll, 50))

export default {
    inserted(el, bindings) {
        const img = {
            dom: el,
            src: bindings.value,
        }
        imgs.push(img)
        setImage(img)
    },
    unbind(el) {
        imgs = imgs.filter((img) => img.dom !== el)
    }
}