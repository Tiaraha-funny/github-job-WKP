import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GithubJobApp from "./githubJobApp";
import { GithubJobsContextProvider } from "./globalContext";
import { GlobalStyles } from "./GlobalStyles";

ReactDOM.render(
  <GithubJobsContextProvider>
    <Router>
      <GlobalStyles />
      <GithubJobApp />
    </Router>
  </GithubJobsContextProvider>,
  document.getElementById("root")
);
