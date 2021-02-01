import React, { createContext, useEffect, useReducer, useState } from "react";

const CORS_API = "https://cors-anywhere.herokuapp.com/";
const LOCATION_API = "https://jobs.github.com/positions.json?location=";
const FULL_TIME =
  "https://jobs.github.com/positions.json?&full time=true&location=";

  const MARKDOWN_API = "&markdown=true";

const GlobalContexts = createContext();

function GithubJobsContextProvider({ children }) {

  const [city, setCity] = useState(location);
  
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "LOAD_DATA": {
          return { ...state, loading: false, jobs: action.data };
        }
        case "FULL_TIME": {
          return {
            ...state,
            loading: false,
            jobs: action.data,
          };
        }
        case "FILTER_BY_CITY": {
          return {
            ...state,
            loading: false,
            jobs: action.data,
            location: action.location,
          };
        }

        case "SEARCH": {
          return {
            ...state,
            loading: false,
            jobs: action.filterValueFromInput
          }
        }

        default:
          "No data";
          break;
      }
    },
    {
      loading: true,
      jobs: [],
      location: "london",
    }
  );

  useEffect(async () => {
    const data = await fetch(`${CORS_API}${LOCATION_API}${state.location}${MARKDOWN_API}`);
    const response = await data.json();
    setTimeout(() => {
      dispatch({ type: "LOAD_DATA", data: response });
    }, 1000);
  }, []);

  async function handleFullTimeJobs(city) {
    const data = await fetch(`${CORS_API}${FULL_TIME}${city}${MARKDOWN_API}`);
    const response = await data.json();
    dispatch({ type: "FULL_TIME", data: response });
  }

  async function handleCheckboxFilterLocation(city) {
    const data = await fetch(`${CORS_API}${LOCATION_API}${city}${MARKDOWN_API}`);
    const response = await data.json();
    console.log(data);
    dispatch({ type: "FILTER_BY_CITY", data: response, location: city });
  }
  
  return (
    <GlobalContexts.Provider
      value={{
        state,
        dispatch,
        city,
        setCity,
        handleFullTimeJobs,
        handleCheckboxFilterLocation,
      }}
    >
      {children}
    </GlobalContexts.Provider>
  );
}

export { GithubJobsContextProvider, GlobalContexts };
