// 手写promisefy

function promsiefy1(fn){
    return (...args)=>{
        return new Promise((resolve,reject)=>{
            fn(...args,(err,content)=>{
                if(!err)resolve(content);
            })
        })
    }
}