import React, { useState, useCallback, memo } from 'react'

export const MyComponent = () =>{
    const [username, setUsername] = useState('John')
    const [lastname, setLastname] = useState('Doe');

    const resetNameCallbak = useCallback(()=>setUsername(''),[])

    return (
        <>
            <h3>
                {username}{lastname}
            </h3>
            <input value={username} onChange={e=>setUsername(e.target.value)}  />
            <input value={lastname} onChange={e=>setLastname(e.target.value)}  />
            <ResetValue onReset={resetNameCallbak}>重置姓名</ResetValue>
        </>
    )
};

const ResetValue = memo(props =>{
    console.log("应该只在第一次渲染时渲染，检查memo+callback")
    return (
        <button onClick={props.onReset}>重置值</button>
    )
});
