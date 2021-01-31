import React from "react";
import {Container, Input, Label } from "./styles/citiesSearch";

export default function CitiesSearch({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

CitiesSearch.Input = function CitiesSearchInput({ children, ...restProps }) {
    return <Input {...restProps} />
  }

  CitiesSearch.Label = function CitiesSearchLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>;
  }