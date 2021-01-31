import React, { useContext } from "react";
import { FullTimeJobs } from "../components";
import { Container } from "../components/Full-time/styles/Full_time";
import { GlobalContexts } from "../globalContext";

export default function FullTimeJobsContainer() {
  const { handleCheckbox } = useContext(GlobalContexts);

  return (
    <Container>
        <FullTimeJobs.Input
          type="checkbox"
          name="fullTime"
          onChange={handleCheckbox}
        />
        Full time
    </Container>
  );
}
