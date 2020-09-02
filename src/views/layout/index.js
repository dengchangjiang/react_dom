import React from "react";
import Slider from "./slider.js";
import { Route, Switch ,Redirect} from "react-router-dom";
import routes from "../../router";
import "./scss/index.scss"

class Layout extends React.Component {
  render() {
    return (
      <div className="main">
        <Slider />
        <div className="container">
          <Switch>
            {routes.map((item) => {
              return (
                <Route path={item.path}  key={item.path} component={item.component}></Route>
              );
            })}
            <Redirect to="/home"/>
          </Switch>
        </div>
      </div>
    );
  }
}
export default Layout;
