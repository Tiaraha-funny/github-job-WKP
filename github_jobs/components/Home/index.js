import React from "react";
import { Container, Content,Checkbox } from "./styles/home";

export default function HomeStyles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

HomeStyles.Content = function HomeStylesContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
}

HomeStyles.Checkbox = function HomeStylesCheckbox({ children, ...restProps }) {
  return <Checkbox {...restProps}>{children}</Checkbox>;
}
