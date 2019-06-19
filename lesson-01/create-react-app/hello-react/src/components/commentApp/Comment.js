import React, {Component} from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number,
  };
  constructor () {
    super ();
    this.state = {
      timeStirng: '',
    };
  }
  componentWillMount () {
    this._updateTimeString ();
    this._timer = setInterval (this._updateTimeString.bind (this), 5000);
    console.log (this.state.timeStirng);
  }
  componentWillUnmount () {
    clearInterval (this._timer);
  }
  _updateTimeString () {
    const comment = this.props.comment;
    const duration = (+Date.now () - comment.createdTime) / 1000;
    console.log (duration);
    this.setState ({
      timeStirng: duration > 60
        ? `${Math.round (duration / 60)}分钟前`
        : `${Math.round (Math.max (duration, 1))}秒前`,
    });
  }
  _getProcessedContent (content) {
    return content
      .replace (/&/g, '&amp;')
      .replace (/</g, '&lt;')
      .replace (/>/g, '&gt;')
      .replace (/"/g, '&quot;')
      .replace (/'/g, '&#039;')
      .replace (/`([\S\s]+?)`/g, '<code>$1</code>');
  }
  handleDeleteComment () {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment (this.props.index);
    }
  }
  render () {
    return (
      <div className="comment">
        <div className="comment-user">
          <span>{this.props.comment.username}:</span>
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: this._getProcessedContent (this.props.comment.content),
          }}
        />
        <span className="comment-createtime">
          {this.state.timeStirng}
        </span>

        {/* 删除按钮 */}
        <span onClick={this.handleDeleteComment.bind (this)}>删除该评论</span>
      </div>
    );
  }
}
export default Comment;
