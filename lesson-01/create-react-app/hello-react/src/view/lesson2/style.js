import React, {Component} from 'react';
// import Clock from './clock'
import AutoFocusInput from './autoFocusInput'
class Header extends Component {
  constructor () {
    super ();
    this.state = {
      Date:new Date()
    }
    console.log ('construct');
  }

  componentWillMount () {
    console.log ('component will mount');
    this.timer = setInterval(()=>{
      this.setState({
        Date:new Date()
      })
    },1000)
  }

  componentDidMount () {
    console.log ('component did mount');
  }
  componentWillUnmount(){
    console.log(this)
    console.log('component will unmount')
    clearInterval(this.timer)
  }

  render () {
    console.log ('render');
    return (
      <div>
      <h1>
        <p>现在的时间是：</p>
        {
          this.state.Date.toLocaleTimeString()
        }
      </h1>
    </div>
    );
  }
}
class Index extends Component {
  constructor () {
    super ();
    this.state = {
      isShowHeader: true,
    };
  }
  handleShowOrHide () {
    this.setState ({
      isShowHeader: !this.state.isShowHeader,
    });
  }

  render () {
    return (
      <div>
        {this.state.isShowHeader ? <Header /> : null}
        <button onClick={this.handleShowOrHide.bind (this)} >点击我</button>
        {/* <Clock></Clock> */}
        <AutoFocusInput/>
      </div>

    );
  }
}
export default Index;
