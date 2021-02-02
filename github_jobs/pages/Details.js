import React, { useContext, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useHistory, useParams } from "react-router-dom";
import Details from "../components/Details";
import { Container } from "../components/Details/styles/details";
import { GlobalContexts } from "../globalContext";

function DetailsContainer() {
  const { state } = useContext(GlobalContexts);
  const { jobs } = state;

  const history = useHistory();

  // To push the history back to home page

  function GoBackHome() {
    history.push("/");
  }

  // To find the id in the useParams and compare it with the existing in the Api link

  let { Id } = useParams();

  const findDetailedJobById = jobs.find((detail) => detail?.id === Id);

  function ShowDetails() {
    if (findDetailedJobById) {
      return (
        <div>
          <div>
            <p>
              Email your resume and cover letter to
              <Details.Goback href={findDetailedJobById?.company_url}>
                {" "}
                {findDetailedJobById?.company_url}{" "}
              </Details.Goback>
              Looking forward to hearing from your
            </p>
          </div>
          <div>
            <h1> {findDetailedJobById?.title}</h1>
            <button>
              {" "}
              {findDetailedJobById?.type}{" "}
            </button>
            <div>{findDetailedJobById?.created_at}</div>
            <div>
              {findDetailedJobById?.company_logo}
              <div>
                {findDetailedJobById?.company}
                <div>
                  {findDetailedJobById?.location}
                </div>
              </div>
            </div>
            <div>
              <p>Who we are </p>
              {findDetailedJobById?.description}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <Container>
        <Details.Group>
          <Details.Goback
            onClick={GoBackHome}
            className=" backHome details-sidebare__back-link"
          >
            <BiArrowBack className="backHome"></BiArrowBack>
            Go back to search
          </Details.Goback>
          <h3>How to apply</h3>
          <div className="howto">
            <p>
              <a href="https://www.exact.com/nl/werken-bij/vacatures/a0t4I00000nSFX7QAO-senior-software-engineer-net/apply?vq_campaign=f68f09cf-943b-56ae-9ba0-d2980d30489c&vq_source=819"></a>
            </p>
          </div>
        </Details.Group>
        <div>{ShowDetails()}</div>
    </Container>
  );
}

export default DetailsContainer;
