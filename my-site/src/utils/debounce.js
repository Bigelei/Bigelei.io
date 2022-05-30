export default function(fn, duration = 100) {
    let timer = null;
    return (...agrs) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...agrs)
        }, duration)
    }
}