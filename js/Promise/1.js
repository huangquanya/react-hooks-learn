const fs = require('fs')
const { promisify } = require('util')

// fs.readFile('./1.js',(err, content)=>{
//     if(!err){
//         // console.log(content)
//         fs.stat('./1.js',(err,stat)=>{
//             console.log(stat)
//         })
//     }
// })

let promisefyReadFile = (path) =>{
    return new Promise((resolve,reject)=>{
        fs.readFile(path,(err,content)=>{
            if(!err){
                resolve(content)
            }
        })
    })
}
promisefyReadFile('./1.js')
.then(console.log)

let readFilePromise = promisify(fs.readFile)
readFilePromise('./1.js')
.then(console.log)
