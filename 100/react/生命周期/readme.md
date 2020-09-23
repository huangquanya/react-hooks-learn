# 生命周期
mount   constructor   getDerivedStateFromProps(静态方法)  render  componentDIdMount

update                getDerivedStateFromProps(静态方法)  shouldComponentUpdate render getSnapshotBeforeUpdate componentDidUpdate

unmount     componentWillUnmount

# 为什么render之前的操作需要是纯净无副作用的
因为react16之后这个阶段是可能会被 React 暂停，中止或重新启动。

# 旧的omponentWillReceiveProps


# hook 新增的静态方法
静态方法的特点：
- 是一个纯净且不包含副作用的方法 无法获取组件的this 以及组件内部的方法
- 副作用： 请求 DOM 文件读写 IO 
- static getDerivedStateFromProps

- static getDerivedStateFromError error-boundary错误边界 捕获到错误返回一个对象作为状态 可以根据状态返回不同的值来控制错误出现时程序的显示和状态

# react ConcurentMode 16 提出 实验性
应用保持响应（用户的输入不卡顿，高优先级的任务，react优先处理他们
其他低优先级的延迟执行：http
ReacteDOM.createRoot(root).render(<App/>)
