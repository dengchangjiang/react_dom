import React from "react";
import { withRouter } from "react-router";
class Login extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return <div onClick={(e)=>this.login()}>这是登录</div>;
  }
  login(){
    this.props.history.push('/home')
  }
}
export default withRouter(Login);
