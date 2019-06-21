import React, { Component } from 'react';
// Context 的学习
import PropTypes from 'prop-types'
class Header extends Component {
  render() {
    return (
      <div>
       <h2>This is Header</h2>
       <Title></Title>
      </div>
    );
  }
}
class Main extends Component {
  render() {
    return (
      <div>
       <h2>This is content</h2>
       <Content></Content>
      </div>
    );
  }
}
class Title extends Component {
  static contextTypes = {
    themeColor:PropTypes.string
  }
  render() {
    return (
      <div>
       <h2 style={{color:this.context.themeColor}}>React 小书</h2>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div>
       <h2>React小书内容</h2>
      </div>
    );
  }
}
class Index extends Component {
  // 往context 里面放一个themeColor
  static childContextTypes = {
    themeColor:PropTypes.string
  }
  constructor(){
    super()
    this.state = {themeColor:'red'}
  }
  getChildContext(){
    return {themeColor:this.state.themeColor}
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
      </div>
    );
  }
}

export default Index;