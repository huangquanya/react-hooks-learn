function createStore(reducer) {
    let state;  // 1
    function dispatch(action) {
      state = reducer(state, action);
    }
    dispatch({type: ''});   // state 为 reducer 那里的 默认值
    function getState() {
      return state;
    }
    return {
      dispatch, getState
    }
  }

  let reducer = function(state=1,action){
      return state
  }

  const store = createStore(reducer)

//   react-redux 把这流程给 react 用
    // react-redux 把 redux内部的状态转换成 react state
    // 把redux内部的dispatch 交给 connect 的 mapDispatchToProps
    // 这样我们在组件里面就可以拿到dispatch 用dispatch修改状态
    // 

//   wxapp-redux 把这个流程给小程序用