import React from "react";
import { Input, Container,Label } from "./styles/Full_time";

export default function FullTimeJobs({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

FullTimeJobs.Input = function FullTimeJobsInput({ ...restProps }) {
    return <Input {...restProps} />
}

FullTimeJobs.Label = function FullTimeJobsLabel({ ...restProps }) {
    return <Label {...restProps}></Label>
}
