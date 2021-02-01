import React from "react";
import CitiesSearchContainer from "../containers/citiesSearch";
import DisplayGithubJobsContainer from "../containers/displayGithubJobs";
import FullTimeJobsContainer from "../containers/fullTimeJobs";
import HeaderContainer from "../containers/header";
import LocationsContainer from "../containers/locations";

export default function Home() {
  return (
    <div>
      <HeaderContainer />
      <FullTimeJobsContainer />
      <LocationsContainer />
      <CitiesSearchContainer />
      <DisplayGithubJobsContainer />
    </div>
  );
}
