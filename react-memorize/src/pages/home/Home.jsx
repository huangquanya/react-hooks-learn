import React from 'react';

export default function Home(props){
    const {setV} = props
    return (
        <div>
          <h2 className="homeTitle">Memorize</h2>
          <h3 className="newGame" onClick={()=>setV()}>开始游戏</h3>
        </div>
    )
}