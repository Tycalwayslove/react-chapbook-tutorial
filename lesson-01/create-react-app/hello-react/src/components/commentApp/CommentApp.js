import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
class CommentApp extends Component {
  handleSubmitComment(comment){
    console.log(comment)
  }
  handleContentValue(value){
    console.log(value)
  }
  render () {
    return (
      <div className='wrapper'>
        <CommentInput getContent={this.handleContentValue.bind(this)} onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList />
      </div>
    );
  }
}

export default CommentApp;
