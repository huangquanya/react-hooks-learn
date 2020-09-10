## PureComponent
### 原理
当组件更新时，如果组件的props和state都没发生改变，render方法就不会触发，省去Virtual DOM的生成和比对的过程，达到提升性能的目的。
```js
    if(this._compositeType === CompositeType.pureClass){
        shouldUpdata = !shallowEqual(prevProps,nextProps)||!shallowEqual(inst.state,nextState);
    }
```
而 shallowEqual 又做了什么呢？会比较 Object.keys(state | props) 的长度是否一致，每一个 key 是否两者都有，并且是否是一个引用，也就是只比较了第一层的值，确实很浅，所以深层的嵌套数据是对比不出来的。