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
    this.state = {isLiked:false,count:null}

  }
  handleClickOnLikeButton(){
    // console.log(this.state.isLiked)
    // this.setState({isLiked:!this.state.isLiked})
    console.log(this.state.count)
    // this.setState({count:this.state.count+1})
    this.setState((prevState) => {
      return { count: 0 }
    })
    this.setState((prevState) => {
      return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
    })
    console.log(this.state.count)
    this.setState((prevState) => {
      console.log(prevState);
      return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
    })
    console.log(this.state.count)

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
