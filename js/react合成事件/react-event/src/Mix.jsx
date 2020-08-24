import React from 'react';
class Mix extends React.Component {
  state = {
    visiable: false
  }
  handleToogle = (e) => {
      console.log(1)
    this.setState({
      visiable: !this.state.visiable
    })
    // e.stopPropagation();
    // 
    // 所有的事件都放到了document上
    // 所有的事件统一采用的事件监听为
    // document.addEventListener('click',()=>{})
    // 事件监听器 内部维护了 元素和事件处理函数 的关系
    // e.stopPropagation();也是react自己内部实现的阻止冒泡
    // 仅限于都用react的事件才生效

  }
  componentDidMount() {
      console.log(2)
      document.body.addEventListener('click', () => {
      this.setState({
        visiable: false
      })
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleToogle}> toogle </button>
        <div style={{ display: this.state.visiable ? 'block' : 'none'}}>
          内容
        </div>
      </div>
    )
  }
}

export default Mix;
