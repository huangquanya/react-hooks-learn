let action1 = {
    type:'INCREMENT'
}
let action2 = {
    type: 'DECREMENT'
}

function reducer(state=1,action){
    if(action.type === 'INCREMENT'){
        return state+1
    }else if(action.type === 'DECREMENT'){
        return state - 1;
    }else{
        return state
    }
}
let store = createStore(reducer)
store.dispatch(action1)
console.log(store.getState())
store.dispatch(action1)
console.log(store.getState())
store.dispatch(action2)

function createStore(reducer){
    let state = undefined;  //默认值 null为合法值，undefined才是未定义
    function dispatch(action){
        state = reducer(state,action);
    }
    dispatch({type:''}) //在不进行dispatch的时候也能够取到默认值；对state进行初始化
    function getState(){
        return state;
    }
    return {
        dispatch,getState
    }
}