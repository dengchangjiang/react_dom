import React from "react";
import Layout from "./views/layout/index";
import Login from "@/views/login/index.js";
import NotFound from "@/views/404/index"
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
import { getToken } from "@/utils/index";
function App() {
  return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
          <Route  path="/">
            {getToken() ? <Layout /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </HashRouter>
  );
}
export default App;
