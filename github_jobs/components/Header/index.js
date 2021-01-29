import React from "react";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Title = function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
  }