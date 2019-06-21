import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import wrapWithLoadData from './wrapWithLoadData';
class CommentApp extends Component {
  static propTypes = {
    data:PropTypes.any,
    saveData:PropTypes.func.isRequired

  }
  constructor (props) {
    console.log ('constructor');
    super (props);
    this.state = {
      comments: props.data
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
    // this._saveComments (comments);
    this.props.saveData(comments) //hoc 使用wrapWithLoadData 高阶函数
    console.log (comments);
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
CommentApp = wrapWithLoadData(CommentApp,'comments');

export default CommentApp;
