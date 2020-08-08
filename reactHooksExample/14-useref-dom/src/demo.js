import React,{ useState, useRef } from 'react'

export const MyComponent = () =>{
    const [message, setMessage] = useState(
        "点击按钮得到父节点container的宽度"
    )
    const containerElement = useRef(null)
    const caculate = () =>{
        setMessage(`Container的宽度${containerElement.current.clientWidth}px`)
    }
    return (
        <div className="container" ref={containerElement} >
            <h2>{message}</h2>
            <button onClick={caculate} >
                计算container宽度
            </button>
        </div>
    )
}