function throtte(fn,time){
    let activeTime = 0;
    return ()=>{
        const now = Date.now();
        if(now - activeTime > time){
            fn.apply(this,arguments)
            activeTime = Date.now();
        }
    }
}