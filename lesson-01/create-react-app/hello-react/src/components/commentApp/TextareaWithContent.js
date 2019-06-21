import React, { Component } from 'react';
import wrapwithLoadData from './wrapWithLoadData'
class TextareaWithContent extends Component {
  render() {
    return (
      <textarea value= {this.props.data}></textarea>
        
    );
  }
}

TextareaWithContent = wrapwithLoadData(TextareaWithContent,'content')
export default TextareaWithContent;