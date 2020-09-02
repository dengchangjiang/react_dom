import React from "react";
import routes from "../../router/index";
import { Link, withRouter } from "react-router-dom";
import "./scss/slider.scss"
class Slider extends React.Component {
  render() {
    return (
      <div className="slider">
        <div className="slide_menu">
          {routes.map((item) => {
            return <Link to={item.path} key={item.path} className={this.props.location.pathname === item.path ? 'active' : ''}>
                {item.meta.title}  
            </Link>;
          })}
        </div>
      </div>
    );
  }
}
export default withRouter(Slider)
