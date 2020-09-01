## SPA
vue/react -> webpack -> html/css/js

html -> <div id="root"></div>
等js把所有的内容渲染到root里面去
用户不能第一时间看到有价值的内容（白屏时间过长）
## SSR
vue/react -> webpack -> 后端（node）
用户第一次访问html<div id="root" >网页内容</div>

### 第一步 同构组件
1. 服务端bundle.js是一个node项目
2. 客户端index.js 就是一个静态资源
3. node服务让react组件通过renderToString 渲染成html字符串
4. node返回的东西就是带有内容的字符串（缩短首屏白屏时间）
5. node返回html结构，也把客户端的index.js返回给浏览器，让react组件客户端也会渲染一次，绑定服务端无法处理的，与浏览器相关的处理（事件）

### 第二部 同构路由
1. 目的 需要根据当前的Url渲染页面
2. 客户端 BrowserRouter
3. 服务端 手动传req.url 告诉 StaticRouter
4. 两端 都知道用户在访问的URL 两端渲染页面都能保持一致
5. ？？鼠标点击Link刷新 和 输入地址栏 页面由谁构造出来

## MPA

