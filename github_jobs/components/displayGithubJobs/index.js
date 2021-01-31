import React from "react";

import {Container, Image, Cover, LocationsAndDates } from "./styles/displayGithubJobs";

export default function DisplayJobs({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

DisplayJobs.Image = function DisplayJobsImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>
  }

  DisplayJobs.Cover = function DisplayJobsCover({  children, ...restProps }) {
    return <Cover {...restProps}>{children}</Cover>
  }
  

  DisplayJobs.LocationsAndDates = function DisplayJobsLocationsAndDates({ children, ...restProps }) {
    return <LocationsAndDates {...restProps}>{children}</LocationsAndDates>
  }
    