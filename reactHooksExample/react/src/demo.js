import React, { useRef, useState } from "react"

export const MyComponent = () =>{
    const containerElementRef = useRef();
    const [message,setMessage] = useState(
        "点击按钮得到父组件container的宽度"
    );

    const caculateContainerWidth = () =>{
        setMessage(`Container 宽度:${containerElementRef.current.clientWidth}px`)
    }
    return (
        <div className="container" ref={containerElementRef} >
            <h2>{message}</h2>
            <button onClick={caculateContainerWidth}>
                计算 container 宽度
            </button>
        </div>
    )
}