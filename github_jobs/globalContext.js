import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContexts = createContext();

const CORS_API = "https://cors-anywhere.herokuapp.com/";
const GITHUBJOBS_API = "https://jobs.github.com/positions.json?";
const MARKDOWN_API = "&markdown=true";
const FULL_TIME_API = "description=python&full_time=true&location=sf";
const LONDON_API = "description=python&location=london";
const SANFRANSISCO_API = "description=python&location=san_francisco";
const AMSTERDAM_API = "description=python&location=amsterdam";
const NEW_YORK_API = "description=python&location=new+york";
const BERLIN_API = "description=python&location=berlin";

export default function GithubJobsContextProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLocation, setSearchLocation] = useState("");

  const DEFAULT_API = CORS_API + GITHUBJOBS_API;

  async function fetchGithubJobsFromAPI() {
    const responde = await fetch(DEFAULT_API + MARKDOWN_API);
    const result = await responde.json();
    setJobs(result);
    setLoading(false);
  }

  useEffect(() => {
    fetchGithubJobsFromAPI();
    handleCheckbox();
    handleSearchLocation();
  }, [location]);

  async function handleCheckbox(e) {
    console.log("target event", e?.target);
    const fullTimeJobsForm = e?.target;
    if (fullTimeJobsForm?.checked) {
      const response = await fetch(DEFAULT_API + FULL_TIME_API + MARKDOWN_API);
      const fullTimeResult = await response.json();
      setJobs(fullTimeResult);
    } else {
      return jobs;
    }
  }
  async function handleCheckBerlin(e) {
    console.log("target event", e?.target);
    const fullTimeJobsForm = e?.target;
    if (fullTimeJobsForm?.checked) {
      const response = await fetch(DEFAULT_API + BERLIN_API + MARKDOWN_API);
      const fullTimeResult = await response.json();
      setJobs(fullTimeResult);
    } else {
      return jobs;
    }
  }
  async function handleCheckNewYork(e) {
    console.log("target event", e?.target);
    const fullTimeJobsForm = e?.target;
    if (fullTimeJobsForm?.checked) {
      const response = await fetch(DEFAULT_API + NEW_YORK_API + MARKDOWN_API);
      const fullTimeResult = await response.json();
      setJobs(fullTimeResult);
    } else {
      return jobs;
    }
  }

  async function handleCheckLondon(e) {
    console.log("target event", e?.target);
    const fullTimeJobsForm = e?.target;
    if (fullTimeJobsForm?.checked) {
      const response = await fetch(DEFAULT_API + LONDON_API + MARKDOWN_API);
      const fullTimeResult = await response.json();
      setJobs(fullTimeResult);
    } else {
      return jobs;
    }
  }

  async function handleCheckSanFrancisco(e) {
    console.log("target event", e?.target);
    const fullTimeJobsForm = e?.target;
    if (fullTimeJobsForm?.checked) {
      const response = await fetch(
        DEFAULT_API + SANFRANSISCO_API + MARKDOWN_API
      );
      const fullTimeResult = await response.json();
      setJobs(fullTimeResult);
    } else {
      return jobs;
    }
  }

  function handleSearchLocation(e) {
    const filterLocationNamesFromJobs = jobs.filter((job) => {
      job.location.toLowerCase();
    });
    console.log("filter", filterLocationNamesFromJobs);
    setJobs(filterLocationNamesFromJobs);
  }

  return (
    <GlobalContexts.Provider
      value={{
        jobs,
        loading,
        handleCheckbox,
        handleSearchLocation,
        searchLocation,
        setSearchLocation,
        handleCheckSanFrancisco,
        handleCheckNewYork,
        handleCheckLondon,
        handleCheckBerlin,
      }}
    >
      {children}
    </GlobalContexts.Provider>
  );
}

export { GithubJobsContextProvider, GlobalContexts };

//
// const searchLocationEvent = jobs.length === 0 && e?.target.location
// if(searchLocationEvent) {
// setSearchLocation(e?.target.location)
// console.log("location search",  searchLocation);
// }
