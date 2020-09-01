import React from 'react'
import Detail from './pages/Detail/Detail'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import App from './App'

export default [
    {
        path:'/',
        component: App,
        routes: [
            {
                path: '/',
                exact:true,
                component:Home
            },
            {
                path: '/login',
                component:Login
            },
            {
                path: '/detail',
                component:Detail
            }
        ]
    }
]