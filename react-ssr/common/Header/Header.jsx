import React from 'react';
import {Link} from 'react-router-dom'


export default function Header(){
    const handleClick =()=>{
        console.log(123)
    }
    return (
        <div>
            <button onClick={handleClick}>按钮</button>
            <Link to='/login'>login</Link>
            <br/>
            <Link to='/detail'>detail</Link>
        </div>
    )
}