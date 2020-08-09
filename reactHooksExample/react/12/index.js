import React from 'react'
import ReactDom from 'react-dom'
import {MyComponent} from "./demo.js"

function App(){
    return(
        <MyComponent/>
    )
}
ReactDom.render(<App />,document.getElementById('root'))
