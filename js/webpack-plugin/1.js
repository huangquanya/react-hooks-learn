const {SyncHook, AsyncSeriesHook} = require('tapable');
const hook = new SyncHook()
const asyncHooks = new AsyncSeriesHook()

// on
hook.tap('hook1',()=>{
    console.log(1)
})
// emit
hook.call()

asyncHooks.tapPromise('xxx',()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },3000)
    })
})
asyncHooks.tapPromise('xxx',()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },3000)
    })
})

asyncHooks.promise().then(()=>{
    console.log('async complete')
});
console.time('a')
asyncHooks.tapAsync('callback',(cb)=>{
    setTimeout(()=>{
        cb();
    },3000)
})
asyncHooks.callAsync(()=>{
    console.timeEnd('a')
    console.log('结束了')
})
console.log('end')