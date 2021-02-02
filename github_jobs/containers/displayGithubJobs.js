import React, { useContext } from "react";
import { DisplayJobs } from "../components";
import { Container } from "../components/displayGithubJobs/styles/displayGithubJobs";
import { GlobalContexts } from "../globalContext";

export default function DisplayGithubJobsContainer() {
  const { state, loading } = useContext(GlobalContexts);
  const { jobs } = state;
  console.log("display jobs", jobs);

  return (
    <div>
      <DisplayJobs.Loading>{jobs.length === 0 && <h1>Loading...</h1>}</DisplayJobs.Loading>
      {jobs.map((job) => {
        let time = new Date().getTime() - new Date(job.created_at).getTime();
        let getTime = Math.round(Math.floor(time) / (1000 * 60 * 60 * 24));
        return (
          <Container key={job.id} href={`/details/${job.id}`}>
            <DisplayJobs.Image src={job.company_logo} />
            <DisplayJobs.Cover>
              <div>
                <DisplayJobs.Text>{job.company}</DisplayJobs.Text>
                <DisplayJobs.Text>{job.title}</DisplayJobs.Text>
                <DisplayJobs.FullTimeBtn>{job.type}</DisplayJobs.FullTimeBtn>
              </div>

              <DisplayJobs.LocationsAndDates>
                <DisplayJobs.Text>{job.location}</DisplayJobs.Text>
                <DisplayJobs.Text>{getTime} hours</DisplayJobs.Text>
              </DisplayJobs.LocationsAndDates>
            </DisplayJobs.Cover>
          </Container>
        );
      })}
    </div>
  );
}
