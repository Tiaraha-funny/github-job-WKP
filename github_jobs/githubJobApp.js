import React from "react";
import { Route, Switch } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

export default function GithubJobApp() {
  return (
    <div>
      <h1>Github <span>Jobs</span></h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/:Id">
          <Details />
        </Route>
      </Switch>
    </div>
  );
}
