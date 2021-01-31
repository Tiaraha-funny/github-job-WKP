import React from "react";
import CitiesSearchContainer from "./containers/citiesSearch";
import DisplayGithubJobsContainer from "./containers/displayGithubJobs";
import FullTimeJobsContainer from "./containers/fullTimeJobs";
import HeaderContainer from "./containers/header";
import LocationsContainer from "./containers/locations";
import GithubJobsContextProvider from "./globalContext";

export default function GithubJobApp() {
  return (
    <GithubJobsContextProvider>
      <h1>
        Github <small>Jobs</small>
      </h1>
      <HeaderContainer />
      <FullTimeJobsContainer />
      <LocationsContainer />
      <CitiesSearchContainer />
      <DisplayGithubJobsContainer />
    </GithubJobsContextProvider>
  );
}
