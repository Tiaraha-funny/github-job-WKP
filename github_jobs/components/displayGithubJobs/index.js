import React from "react";
import { Link as ReachRouterLink } from "react-router-dom";

import {Container, Image, Cover, LocationsAndDates, Text, FullTimeBtn, Loading, LinkDetails } from "./styles/displayGithubJobs";

export default function DisplayJobs({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

DisplayJobs.LinkDetails = function DisplayJobsLinkDetails({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to} >
      <LinkDetails {...restProps} />
    </ReachRouterLink>
  );
}

DisplayJobs.Image = function DisplayJobsImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>
  }

  DisplayJobs.FullTimeBtn = function DisplayJobsFullTimeBtn({ children, ...restProps }) {
    return <FullTimeBtn {...restProps}>{children}</FullTimeBtn>
  }

  DisplayJobs.Cover = function DisplayJobsCover({  children, ...restProps }) {
    return <Cover {...restProps}>{children}</Cover>
  }
  
  DisplayJobs.Text = function DisplayJobsText({  children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
  }

  DisplayJobs.Loading = function DisplayJobsLoading({  children, ...restProps }) {
    return <Loading {...restProps}>{children}</Loading>
  }

  DisplayJobs.LocationsAndDates = function DisplayJobsLocationsAndDates({ children, ...restProps }) {
    return <LocationsAndDates {...restProps}>{children}</LocationsAndDates>
  }
    