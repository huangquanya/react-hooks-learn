import React from 'react'
import ReactDom from 'react-dom'
import {MyComponent} from "./demo.js"

function App(){
    return(
        <MyComponent  />
    )
}
const rootElement = document.getElementById('root')
ReactDom.render(<App />,rootElement)
