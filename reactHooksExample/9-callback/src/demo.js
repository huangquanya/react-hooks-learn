import React,{useState, memo, useCallback} from 'react'

export const MyComponent = () =>{
    const [username, setUsername] = useState("John")
    const [lastname, setLastname] =useState("Do")

    const resetName = useCallback(() => setUsername(""),[]);

    return (
        <>
            <h3>
                {username}-{lastname}
            </h3>
            <input value={username} onChange={e=>setUsername(e.target.value)}  />
            <input value={lastname} onChange={e=>setLastname(e.target.value)}  />
            <ResetValue onRest={resetName} >重置姓名</ResetValue>
        </>
    )
}

const ResetValue = memo(props=>{
    console.log("应该只在第一次渲染时输出一次，如多次输出，检查是否成功缓存")
    return (
        <button onClick={props.onRest}>重置姓名</button>
    )
}) 
