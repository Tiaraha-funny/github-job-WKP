import React, { useContext, useState } from "react";
import { FullTimeJobs } from "../components";
import { Container } from "../components/Full-time/styles/Full_time";
import { GlobalContexts } from "../globalContext";

export default function FullTimeJobsContainer() {
  const { handleFullTimeJobs, city } = useContext(GlobalContexts);

  const [fullTime, setFullTime] = useState(false);

  function getFullTimeJobs() {
    setFullTime(!fullTime);
    if (fullTime) {
      handleFullTimeJobs(city);
    }
  }

  return (
    <Container>
      <FullTimeJobs.Input
        type="checkbox"
        name="fullTime"
        onChange={getFullTimeJobs}
      />
      Full time
    </Container>
  );
}
