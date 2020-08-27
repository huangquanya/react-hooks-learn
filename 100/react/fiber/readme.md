## React
JSX = createElement => 虚拟DOM(react element) -> 对应平台的渲染器 reactDDM/react-native渲染

setState -> 生成另外一个虚拟DOM -> dom diff(reconcilers) -> 找出哪些地方需要更新 -> 应用更新

## 生命周期中两个阶段
### render阶段：
算出哪些需要更新


### commit阶段：
之前Render阶段已经花费了很多时间，为了让用户尽快看到页面， 所以这个会一气呵成，更新页面


## stack reconciler
DOM+diff：我们递归的遍历所有的节点，js是单线程整个流程执行的时间是很长的，会导致页面绘制出现卡顿  
原因浏览器的一次event-loop：
- task
- microtask
- requestAnimation
- render
- requestIdleCallback 当这一帧有空闲时间的时候

js想执行多久就可以执行多久
fiber中js主动让步，自己放在requestIdleCallback里，js和浏览器统一站在用户体验的角度，合作调度

## Fiber reconciler(纤程/协程)
- “fiber” reconciler 是一个新尝试，致力于解决 stack reconciler 中固有的问题，同时解决一些历史遗留问题。
Fiber 从 React 16 开始变成了默认的 reconciler。

它的主要目标是：
1) 能够把可中断的任务切片处理。
2) 能够调整优先级，重置并复用任务。
3) 能够在父元素与子元素之间交错处理，以支持 React 中的布局。
4) 能够在 render() 中返回多个元素。
5) 更好地支持错误边界。

generate yield

## fiber
是一个数据结构，支持写出可中止暂停重新启动的代码
```js
fiber:{
    child: 第一个子节点
    sibling: 下一个兄弟
    return: 父节点
}

```
fiber以单链表的形式表达一棵树