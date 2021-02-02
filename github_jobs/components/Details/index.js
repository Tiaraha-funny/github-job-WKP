import React from "react";

export default function Details({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Details.Title = function DetailsTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
  }

  Details.Goback = function DetailsGoback({ children, ...restProps }) {
    return <Goback {...restProps}>{children}</Goback>;
  }