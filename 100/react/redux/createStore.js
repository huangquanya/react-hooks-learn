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