import React, { Component } from 'react';

export default (Components)=>{
  //定义 包装组件
    class IronManComponent extends Component {
      constructor(props){
        super(props)
      }
    render() {
      return (
        <div>
          <Components {...this.props}></Components>
          <p>现在我是钢铁侠，我要打败灭霸</p>
        </div>
      );
    }
  }
  return IronManComponent
  
}