import React,{useState} from 'react'
import PlayGround from './PlayGround'

export default (props) => {
    const [end,setEnd] = useState(false)
    const {setV} = props
    return(
        <div style={{'marginTop':'.5rem'}}>
            <PlayGround setEnd={(e)=>setEnd(e)}/>
            {end&&<h3>恭喜你，挑战成功</h3>}
            <h2 onClick={()=>setV()} className="backHome">回到首页</h2>
        </div>
        
    )
}
