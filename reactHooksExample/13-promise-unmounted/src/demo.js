import React,{useState, useEffect, useRef} from 'react';

export const MyComponent = () =>{
    const [visible, setVisible] = useState(false);

    return(
        <>
            {visible&&<MyChildComponent />}
            <button onClick={()=>setVisible(!visible)}>
                控制子组件是否渲染的按钮
            </button>
        </>
    )
}

export const MyChildComponent =() =>{
    const [filter, setFiler] = useState("")
    const [userCollection, setUserCollection] = useState([])

    const moutedRef = useRef(false)

    const setSafeUserCollection = (userCollection) =>{
        moutedRef.current&&setUserCollection(userCollection)
    }

    useEffect(()=>{
        moutedRef.current = true;
        return ()=>{
            moutedRef.current =false
        }
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
            .then(response =>response.json())
            .then(json => setSafeUserCollection(json))
        },2000)
    },[filter])

    return (
        <div>
            <input value={filter} onChange={e => setFiler(e.target.value)} />
            <ul>
                {
                    userCollection.map((user, index)=>
                        (<li key={index} >{user.name}</li>)
                    )
                }
            </ul>
        </div>
    )
}
