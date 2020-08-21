const Koa = require('koa');
const KoaViews = require('koa-views')
const Router = require('koa-router')
const path = require('path')
const app = new Koa();

app.use(KoaViews(path.resolve(__dirname,'./views'),{
    extension:'ejs'
}))
const router = Router();
let dataFromDB = '<iframe src="http://www.baidu.com"></iframe>';
let map = {
    '<':'&lt',
    '>':'&gt'
}
function html_encode(s){
    s = s.replace(/\</g,'&lt')
    s = s.replace(/\>/g,'&gt')
    return s;
}

router.get('/',async (ctx)=>{
    const { xss='' } = ctx.query
    await ctx.render('index',{
        username:'lihua',
        xss:xss,
        dataFromDB:html_encode(dataFromDB)
    })
})

app
.use(router.routes())
.use(router.allowedMethods())

app.listen(9090,()=>{
    console.log('localhost:9090')
})