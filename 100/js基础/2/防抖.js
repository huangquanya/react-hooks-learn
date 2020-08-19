function debounce(fn,time){
    let timer = null;
    return ()=>{
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(this,arguments)
        },time)
    }
}
document.addEventListener('mousemove',)