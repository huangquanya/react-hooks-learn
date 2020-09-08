import React from 'react'
import PlayGround from './PlayGround'

export default (props) => {
    const {setV} = props
    return(
        <div>
            <PlayGround />
            <h2 onClick={()=>setV()} className="backHome">回到首页</h2>
        </div>
        
    )
}
