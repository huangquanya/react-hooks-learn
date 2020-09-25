const http = require('http')
const fs = require('fs')
const qs = require('querystring')

http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url==='/'){
        fs.createReadStream('./jsonp.html').pipe(res);
    }else if(req.url.includes('api')){
        // let callbackName = req.url.split('=');
        // let cb = callbackName[callbackName.length-1]
        let obj = qs.parse(req.url.split('?')[1])
        let cb = obj.callback
        res.end(`${cb}({code:1,msg:'success',url:'${obj.a}-${obj.b}'})`)
    }else {
        res.end('')
    }
})
.listen(8080,()=>{
    console.log(8080);
})


