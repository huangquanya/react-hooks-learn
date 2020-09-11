// commonJS require module.exports 的原理
(function(obj) {
    let module = {};
    let cache= {};
    function __webpack__require(params){
        if(cache[params])return cache[params];
        obj[params](module,__webpack__require)
        return module.exports
    }
    obj['./index.js'](module,__webpack__require)
})({
    './index.js':function (module,__webpack__require){ 
        // 从math.js引入
        // import xx from ''
        const sum = __webpack__require('./math.js')
        console.log(sum(10,20))
    },
    // export xxx => module.exports
    './math.js':function(module={},require){
        module.exports=(a,b)=>(a+b) //在module上加一个名为exports的方法
        }
})