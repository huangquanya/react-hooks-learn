import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home/Home';
import Game from './pages/game/Game'
import './index.css'


function App() {
    const [showHome, setShowHome] = useState(true)
    const setVisible = ()=>{
        console.log('change showHome')
        setShowHome(!showHome)
    }
  return (
      <>
      {showHome&&<Home setV={()=>setVisible()} />}
      {!showHome&&<Game setV={()=>setVisible()} />}
      </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
