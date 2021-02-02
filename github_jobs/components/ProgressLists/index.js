import React from "react";
import { Container, Buttons } from "./styles/progress";

export default function ProgressLists({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ProgressLists.Buttons = function ProgressListsButton({ children, ...restProps }) {
    return <Buttons {...restProps}>{children}</Buttons>;
  }
