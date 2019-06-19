import React, {Component} from 'react';
import Comment from './Comment';
import './CommentList.css'
class CommentList extends Component {
  static defaultProps = {
    comments:[]
  }
  render () {
    // const comments = [
    //   {username: 'Jerry', content: 'Hello'},
    //   {username: 'Tom', content: 'I am Tyc'},
    //   {username: 'Jack', content: ' Nice to meet you'},
    // ];
    return (
      <div>
        {this.props.comments.map ((comment, i) => {
          return <Comment comment={comment} key={i} />;
        })}
      </div>
    );
  }
}
export default CommentList;
