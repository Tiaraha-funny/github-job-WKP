import React from "react";
import { Route, Switch } from "react-router-dom";
import AppStyles from "./components/App";
import { Container } from "./components/App/styles/AppStyle";
import DetailsContainer from "./pages/Details";
import Home from "./pages/Home";

export default function GithubJobApp() {
  return (
    <Container>
      <AppStyles.Headings>
        Github <AppStyles.SmallHeading>Jobs</AppStyles.SmallHeading>
      </AppStyles.Headings>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/:Id">
          <DetailsContainer />
        </Route>
      </Switch>
    </Container>
  );
}
