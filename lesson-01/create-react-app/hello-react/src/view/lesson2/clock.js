import React, {Component} from 'react';

class Clock extends Component{
  constructor(){
    super()
    this.state = {
      Date:new Date()
    }
  }
  componentWillMount(){
    this.timer = setInterval(()=>{
      this.setState({
        Date:new Date()
      })
    },1000)
  }
  render(){
    return (
      <div>
        <h1>
          <p>现在的时间是：</p>
          {
            this.state.Date.toLocaleTimeString()
          }
        </h1>
      </div>
    )
  }
}
export default Clock