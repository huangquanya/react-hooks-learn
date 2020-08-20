## cookie
name
value
Domain: cookie生效的域名 baidu.com map.baidu.com(主域生效，子域也生效)
path:   /a/b  /c   /a  / 域名下所有站点都生效  生效的路径
expires:过期时间 默认session级别（当前会话之后生效）
httpOnly: cookie只在http传输， js无法操作的（cookie 可以有后端的set-cookie 响应头设置，也可以有前端 js document.cookie='' 设置）
secure： 只在https的环境下生效
cookie只要符合domain + path 的生效范围 就会随着 http请求发送 
CSRF攻击
SameSite：lax strict none
        lax:    某些get请求再zhaomeng.com 发出也能带cookie
        strict:（cookie只在同域生效）
        none: localhost的get请求不管再什么域发出都会携带cookie
2. csrf_token:
用户登录完服务器，给你一个token abc。。。
前端存起来
之后的请求都要携带这个token
这样对于别的页面是没有这个token 它发出去没有携带 token

3. 浏览器会给每个请求一个reffer字段 ，表明这个请求的来源
服务端检测来源
