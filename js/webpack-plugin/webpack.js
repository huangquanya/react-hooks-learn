const {SyncHook,AsyncSeriesHook} = require('tapable')
const Plugin = require('./plugin.js')
const CommentClearPlugin = require('./CommentClear.js')

class Webpack{
    constructor(){
        this.hooks = {
            emit:new AsyncSeriesHook(),
            done:new SyncHook()
        }
    }
    run(){
        setTimeout(()=>{
            this.hooks.emit.promise();
        },1000);
        setTimeout(()=>{
            this.hooks.done.call();
        },2000)
    }
}

let options = {
    plugins:[new CommentClearPlugin(),new Plugin()]
}
let complier = new Webpack();
for(let p of options.plugins){
    p.apply(complier)
}
complier.run()