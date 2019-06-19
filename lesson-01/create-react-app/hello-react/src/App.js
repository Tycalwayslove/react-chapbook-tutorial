import React, {Component} from 'react';
// import ReactDOM from 'react-dom'
import './App.css';
class Header extends Component {
  render () {
    return (
      <div>
        <h1>我在学习react 小书</h1>
      </div>
    );
  }
}
class LikeButton extends Component {
  constructor () {
    super ();
    this.state = {isLiked: false, count: null};
  }
  handleClickOnLikeButton () {
    this.setState ({isLiked: !this.state.isLiked});
  }
  render () {
    // const likeText = this.props.likeText || '取消'
    // const unLikedText  = this.props.unLikedText || '点赞'
    const objProps = this.props.wordings || {
      likeText: '点赞',
      unLikedText: '不点赞',
    };

    return (
      <button onClick={this.handleClickOnLikeButton.bind (this)}>
        {this.state.isLiked ? objProps.likeText : objProps.unLikedText}👍
      </button>
    );
  }
}
const users = [
  {username: 'Jerry', age: 21, gender: 'male'},
  {username: 'Tomy', age: 22, gender: 'male'},
  {username: 'Lily', age: 19, gender: 'female'},
  {username: 'Lucy', age: 20, gender: 'female'},
];

class User extends Component {
  render () {
    const {user} = this.props;
    return (
        <div>
          <div>姓名：{user.username}</div>
          <div>年龄：{user.age}</div>
          <div>性别：{user.gender}</div>
        </div>
    );
  }
}
class UserList extends Component{
  render(){
    return (
      <div>
        {users.map((user,index)=> <User user={user} key={index}></User>)}
      </div>
    )
  }
}
class Main extends Component {
  handleClick (e) {
    console.log (this);
    console.log (e.target.innerHTML);
  }
  render () {
    return (
      <div>
        <h1 onClick={this.handleClick.bind (this)}>点击我试试</h1>
        {/* <LikeButton likeText="我喜欢" unLikedText='我不喜欢'></LikeButton> */}

        <UserList />
        <LikeButton wordings={{likeText: '多个喜欢', unLikedText: '多个不喜欢'}} />
      </div>
    );
  }
}

class App extends Component {
  render () {
    return (
      <div className="container">
        <Header />
        <Main />
        我是哈哈哈
      </div>
    );
  }
}

export default App;
