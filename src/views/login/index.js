import React,{useEffect,useState} from "react";
import { withRouter } from "react-router";
function Login() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title = `你点击了${count}次`
  })
  return(
  <div onClick={()=>setCount(count+1)}>这是登录{count}</div>
  )
}
export default withRouter(Login);
// class Login extends React.Component {
//  constructor(props){
//    super(props)
//     this.state={
//       count:0
//     }
//  }
//   render() {
//   return <div onClick={()=>{this.setState({count:this.state.count+=1})}}>这是登录{this.state.count}</div>;
//   }
//   login(){
//     // this.props.history.push('/home')
//     let count = this.state.count;
//     this.setState({
//       count:count+=1
//     })
//    console.log(this.state.count)
//   }
// }
// export default withRouter(Login);
