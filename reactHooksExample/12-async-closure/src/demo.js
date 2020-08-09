import React, {useState,useEffect,useRef} from 'react'

export const MyComponent = () =>{
    const [message,setMessage] = useState("初始的message")
    const [seconds, setSeconds] = useState(0)

    const secondsRef = useRef(seconds) 

    useEffect(()=>{
        setTimeout(()=>{
            console.log(seconds)
            setSeconds(1)
            secondsRef.current = 1;
        }, 1000)
        setTimeout(()=>{
            setMessage(`seconds的值:${secondsRef.current}`)
        },3000)
    },[])
    return(
        <>
            <h3>{message}</h3>
            <h4> seconds:{seconds} </h4>
        </>
    )
}

