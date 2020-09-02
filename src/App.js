import React from 'react';
import { Route,Switch,HashRouter,Redirect } from "react-router-dom";
import Layout from "./views/layout/index";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
            <Route path="/">
              {
                 true ? <Layout/> :  <Redirect to="/login"/>
              }
            </Route>
            <Route path="/404"/>
            <Route path="login"/>
        </Switch>
      </HashRouter>
    </div>
  );
}
export default App;
