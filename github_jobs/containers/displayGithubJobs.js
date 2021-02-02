import React, { useContext, useState } from "react";
import { DisplayJobs } from "../components";
import { Container } from "../components/displayGithubJobs/styles/displayGithubJobs";
import { GlobalContexts } from "../globalContext";
import ProgressListsContainer from "./ProgressLists";

import clock from "../icons/clock.svg"; 
import pub from "../icons/public_in-input.svg";

export default function DisplayGithubJobsContainer() {
  const { state, loading } = useContext(GlobalContexts);
  const { jobs } = state;
  console.log("display jobs", jobs);

  const [currentButton, setCurrentButton] = useState(1);
  const [switchButtons, setSwitchButtons] = useState(3);

  function handleButtonClicks(e) {
    setCurrentButton(e.target.id);
  }

  const indexOfLastJobs = currentButton * switchButtons;
  const indexOfFirstJobs = indexOfLastJobs - switchButtons;
  const currentJobs = jobs.slice(indexOfFirstJobs, indexOfLastJobs);

  const buttonNumbers = [];
  for (let i = 1; i <= Math.ceil(jobs.length / switchButtons); i++) {
    buttonNumbers.push(i);
  }

  return (
    <div>
      <DisplayJobs.Loading>
        {jobs.length === 0 && <h1>Loading...</h1>}
      </DisplayJobs.Loading>
      {currentJobs.map((job, index) => {
        let time = new Date().getTime() - new Date(job.created_at).getTime();
        let getTime = Math.round(Math.floor(time) / (1000 * 60 * 60 * 24));
        return (
          <Container key={index}>
            <DisplayJobs.LinkDetails to={`/details/${job.id}`} >
              <DisplayJobs.Image src={job.company_logo} />
              <DisplayJobs.Cover>
                <div>
                  <DisplayJobs.Text>{job.company}</DisplayJobs.Text>
                  <DisplayJobs.Text>{job.title}</DisplayJobs.Text>
                  <DisplayJobs.FullTimeBtn>{job.type}</DisplayJobs.FullTimeBtn>
                </div>

                <DisplayJobs.LocationsAndDates>
                  <DisplayJobs.Text>
                    <img src={pub} />
                    {job.location}</DisplayJobs.Text>
                  <DisplayJobs.Text>
                    <img src={clock} />
                    {getTime} hours</DisplayJobs.Text>
                </DisplayJobs.LocationsAndDates>
              </DisplayJobs.Cover>
              </DisplayJobs.LinkDetails>
          </Container>
        );
      })}
      <ProgressListsContainer
        handleButtonClicks={handleButtonClicks}
        buttonNumbers={buttonNumbers}
      />
    </div>
  );
}
