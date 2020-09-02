import React from "react";
export default class Home extends React.Component {
  constructor(props){
     super(props);
     this.bindThis= this.bindThis.bind(this,'在constructor绑定this')
  }
  render(){
          return(
                <div>
                   <button onClick={(e)=>{this.arrows('箭头函数')}}>箭头函数</button>
                   <button onClick={this.fn.bind(this,'bind')}>bind绑定this</button>
                   <button onClick={this.bindThis}>在constructor绑定this</button>
                </div>
          )
  }
  arrows(name){
    console.log(name)
  }
  fn(name){
    console.log(name)
  }
  bindThis(name){
    console.log(name)
  }
}
