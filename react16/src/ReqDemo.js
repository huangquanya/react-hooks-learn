import React from 'react'

let p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('res')
    }, 3000);
})
let status = 'pending'
let res;
function req(){
    // try{
        p.then((r)=>{
            status = 'success'
            res = r;
        },()=>{})
        if(status === 'pending'){
            // 这里throw出来的被suspence捕获
            // 不论嵌套多深，suspense都能捕获到throw
            throw p;
        }else if(status==='success'){
            return res;
        }
    // }catch{

    // }
}

export default function Demo(){
    const res = req()
    return (
        <h2>
            {res}
        </h2>
    )
}