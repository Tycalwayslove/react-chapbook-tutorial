import React, { Component } from 'react';
import wrapWithLoadData from './wrapWithLoadData';

class InputWithUserName extends Component {
  render() {
    return (
      <input value={this.props.data}>
        
      </input>
    );
  }
}
// hoc
InputWithUserName = wrapWithLoadData(InputWithUserName,'USERNAME')

export default InputWithUserName;