import React from "react";
import {Container, Headings, SmallHeading} from "./styles/AppStyle";

export default function AppStyles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

AppStyles.Headings = function AppStylesHeadings({ children, ...restProps }) {
    return <Headings {...restProps}>{children}</Headings>;
  }

  AppStyles.SmallHeading = function AppStylesSmallHeading({ children, ...restProps }) {
    return <SmallHeading {...restProps}>{children}</SmallHeading>;
  }