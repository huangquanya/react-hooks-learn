import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import route from '../route'
// import Header from '../../common/Header/Header'


function App(){
    return (
        <BrowserRouter>
            {renderRoutes(route)}
        </BrowserRouter>
    )
}
// root节点 下面已经有东西
// 客户端不需要再构造DOM节点，只需要完成服务器无法完成的构造节点上的事件

ReactDOM.hydrate(<App />,
    document.getElementById('root'));