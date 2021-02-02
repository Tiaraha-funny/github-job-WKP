import React from "react";
import HomeStyles from "../components/Home";
import { Container } from "../components/Home/styles/home";
import CitiesSearchContainer from "../containers/citiesSearch";
import DisplayGithubJobsContainer from "../containers/displayGithubJobs";
import FullTimeJobsContainer from "../containers/fullTimeJobs";
import HeaderContainer from "../containers/header";
import LocationsContainer from "../containers/locations";

export default function Home() {
  return (
    <Container>
      <HeaderContainer />
      <HomeStyles.Content>
        <HomeStyles.Checkbox>
          <FullTimeJobsContainer />
          <LocationsContainer />
          <CitiesSearchContainer />
        </HomeStyles.Checkbox>
        <DisplayGithubJobsContainer />
      </HomeStyles.Content>
    </Container>
  );
}
