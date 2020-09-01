import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import route from '../route'
import { renderRoutes } from 'react-router-config';
// import Header from '../../common/Header/Header.jsx';

const app = express();
// const Header = renderToString(Header)
// 有事件 addEventListener(浏览器专用的api)
// 在服务器端无法绑上，需要再浏览器端再绑定
app.use(express.static('public'))

app.get('*', (req, res) => {
    // const root = <Header/>
    const root = (
        <StaticRouter location={req.url} >
            {renderRoutes(route)}
        </StaticRouter>
    )
    const htmlStr = renderToString(root)
    console.log(htmlStr)
    res.end(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root">${htmlStr}</div>
    <script src="/index.js"></script>
</body>
</html>
    `)
})
app.listen(3000, () => {
    console.log('server is running 3000');
})