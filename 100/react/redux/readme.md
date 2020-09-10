# redux核心逻辑
1. createStore方法接受reducer作为参数
2. createStore执行逻辑
    - 定义一个state作为状态存放的地方
    - 定义dispath方法接受action，在内部调用reducer(state,action),再把返回值交给state
    - 定义一个getState方法 返回state
    - 返回{dispatch,getState}方法，使外部能够调用到