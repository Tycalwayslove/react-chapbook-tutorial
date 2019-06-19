import React, {Component} from 'react';
import AutoFocusInput from './autoFocusInput'
import Card from './card'
class Header extends Component {
  constructor () {
    super ();
    this.state = {
      Date:new Date(),
      htmlContent:"<h1>我是一只鱼</h1>"
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
    console.log(this)

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
      <h1 style={{color:'red'}}>
        <p>现在的时间是：</p>
        <p dangerouslySetInnerHTML={{__html:this.state.htmlContent}}></p>
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
        <Card>
          <h2>I am Tang Youchao</h2>
          <div>hello world</div>
        </Card>
      </div>

    );
  }
}
export default Index;
