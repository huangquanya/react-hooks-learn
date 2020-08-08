大家好，我是mango，
本次要讲解的是hooks中使用useRef方法得到dom节点的操作，
useRef的作用是返回一个可变的ref对象，它有一个current属性，可以得到当前对象的值。
React提供的这个ref属性，表示为对组件真正实例的引用，其实就是ReactDOM.render()返回的组件实例；
ReactDOM.render()渲染组件时返回的是组件实例；
渲染dom元素时，返回是具体的dom节点。
ref可以挂载到组件上也可以是dom元素上；

可以在dom节点上使用