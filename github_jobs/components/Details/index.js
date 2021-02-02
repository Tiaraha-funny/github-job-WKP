import React from "react";
import { Goback, Title, Container, Group } from "./styles/details";

export default function Details({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Details.Title = function DetailsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Details.Goback = function DetailsGoback({ children, ...restProps }) {
  return <Goback {...restProps}>{children}</Goback>;
};

Details.Group = function DetailsGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};