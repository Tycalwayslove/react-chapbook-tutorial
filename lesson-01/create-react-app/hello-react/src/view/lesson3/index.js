import React, {Component} from 'react';
import HocIndex from './hoc/index'
// import wrapWithLoadData from './wrapWithLoadData';
import wrapWithLoadData from './wrapWithLoadData'
class InputWithLoadData extends Component{
  render(){
    return <input value={this.props.data}></input>
  }
}
class Index extends Component {
  render () {
    return (
      <HocIndex></HocIndex>
    )
  }
}

export default Index