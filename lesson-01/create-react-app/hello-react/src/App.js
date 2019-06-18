import React, {Component} from 'react'
// import ReactDOM from 'react-dom'
import './App.css';
class Header extends Component{
  render(){
    return (
      <div>
        <h1>我在学习react 小书</h1>
      </div>
    )
  }
}
class LikeButton extends Component {
  constructor(){
    super()
    this.state = {isLiked:false}

  }
  handleClickOnLikeButton(){
    this.setState({isLiked:!this.state.isLiked})
  }
  render(){
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>{this.state.isLiked?'取消':'点赞'}👍</button>
    )
  }
}
class Main extends Component {
  handleClick(e){
    console.log(this)
    console.log(e.target.innerHTML)
  }
  render(){
    return (
      <div>
        <h1 onClick={this.handleClick.bind(this)}>点击我试试</h1>
        <LikeButton></LikeButton>
      </div>  

    )
  }
}

class App extends Component {
  render(){
    return (
      <div className="container">
        <Header/>
        <Main/>
        我是哈哈哈
      </div>
      )
  }
}

export default App;
