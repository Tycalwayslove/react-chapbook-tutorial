import React, {Component} from 'react';
import Stark from './Stark';
class TypeProxy extends Component {
  render () {
    return (
      <div>
        <p>以下是HOC 属性代理</p>
        <Stark />
      </div>
    );
  }
}

// TypeProxy = IronMan(Stark)

export default TypeProxy;
