import React from 'react';

export default function Home(props){
    const {setV} = props
    return (
        <div>
          <h2>Memorize</h2>
          <h3 id="newGame" onClick={()=>setV()}>开始游戏</h3>
        </div>
    )
}