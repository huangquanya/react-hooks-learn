import React from 'react'

export default (props) => {
    const {setV} = props
    return(
        <div>
            <div >游戏页面</div>
            <h2 onClick={()=>setV()}>回到首页</h2>
        </div>
        
    )
}
