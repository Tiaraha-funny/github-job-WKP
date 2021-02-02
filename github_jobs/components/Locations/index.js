import React from "react";
import { Form, Title, Input, Cover } from "../Locations/styles/location";

export default function Locations({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
}

Locations.Input = function LocationsInput({ children, ...restProps }) {
    return <Input {...restProps} />
  }

  Locations.Title = function LocationsTitle({children, ...restProps}) {
      return <Title {...restProps}>{children}</Title>
  }

  Locations.Cover = function LocationsCover({children, ...restProps}) {
    return <Cover {...restProps}>{children}</Cover>
}
  