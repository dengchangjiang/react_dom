import React from "react";
import { withRouter } from "react-router";
import './scss/index.scss'
 class NotFound extends React.Component {
  render() {
    return(
      <div  className="not_found">
        <img src={require('../../assets/img/notfound.jpg')} alt="" />
      </div>
    )
  }
}
export default withRouter(NotFound);
