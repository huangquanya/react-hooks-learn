import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//react 链表
//preact 数组

let hooks = []//当前组件用到的所有的hook闭包里面的变量
let currentIndex = 0;
const useState = (function(){
  return function(initValue){
    // currentIndex 组件里面hook 调用的顺序
    if(!hooks[currentIndex])hooks[currentIndex]=[];
    let hookState = hooks[currentIndex];
    hooks[currentIndex][0] = hookState[0] || initValue;
    function setState(newState){
      hookState[0] = newState;
      render()
    }
    hookState[1] = setState;
    currentIndex++;
    return hookState
  }
})()

// const useState = (function(){
//   let _state;
//   return function (initValue){
//     _state = _state||initValue
//     function setState(newState){
//       _state = newState
//       ReactDOM.render();
//     }
//     return [_state, setState]
//   }
// })()


function App(){
  const [count,setCount] = useState(0)  //可以记住上一次的count
  let c = 0;
  
  return(
    <div>
      { count }--{c}
      <button onClick={()=>{setCount(count+1)}} >+1</button>
    </div>
  )
}
render()
function render(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}



