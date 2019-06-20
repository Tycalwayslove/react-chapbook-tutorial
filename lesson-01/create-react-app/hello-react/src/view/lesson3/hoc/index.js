
/**
 *这个组件主要学习react 装饰器模式的运用-- 高阶函数
 * HOC( higher-order Component ) 包括两种模式
 * 1. 属性代理  包裹组件 增强组件， 将原有的组件 props 和现有的组件 props 进行融合
 * 2. 反向继承 React 组件继承了被传入的组件，所以它能访问到的区域，权限更多。相比属性代理方式，它更像打入组织内部，对其进行修改。
 *
 * @class HocIndex
 * @extends {Component}
 */
import React,{Component } from 'react'
import TypeProxy from './type-proxy'
class HocIndex extends Component {
  render () {
    return <TypeProxy/>
  }
}
export default HocIndex;
