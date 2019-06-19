import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
class CommentApp extends Component {
  constructor () {
    console.log ('constructor');
    super ();
    this.state = {
      comments: [],
    };
  }
  componentWillMount () {
    console.log ('component will mount');
  }
  componentDidMount () {
    console.log ('component did mount');
  }
  // 加载LocalStorage 里面的评论
  _loadComments () {
    let comments = localStorage.getItem ('comments');
    if (comments) {
      comments = JSON.parse (comments);
      this.setState ({
        comments,
      });
    }
  }
  _saveComments (comments) {
    localStorage.setItem ('comments', JSON.stringify (comments));
  }
  handleSubmitComment (comment) {
    if (!comment) return;
    if (!comment.username) return alert ('请输入用户名');
    if (!comment.content) return alert ('请输入评论内容');
    const comments = this.state.comments;
    comments.push (comment);
    this.setState ({
      comments,
    });
    this._saveComments (comments);
    console.log (comment);
  }
  handleDeleteComment(index){
    console.log(index)
    const comments = this.state.comments
    comments.splice(index,1)
    this.setState({
      comments
    })
    this._saveComments();
  }

  render () {
    console.log ('render');
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind (this)} />
        <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)} />
      </div>
    );
  }
}

export default CommentApp;
