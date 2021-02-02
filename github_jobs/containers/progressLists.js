import React, { useContext, useState } from "react";
import ProgressLists from "../components/ProgressLists";
import { Container } from "../components/ProgressLists/styles/progress";
import { GlobalContexts } from "../globalContext";

export default function ProgressListsContainer({ handleButtonClicks, buttonNumbers }) {
  const { state, dispatch } = useContext(GlobalContexts);
  const { jobs } = state;

  const renderButtonNumber = buttonNumbers.map((number) => {
    return (
      <ProgressLists.Buttons
        key={number}
        id={number}
        onClick={handleButtonClicks}
      >
        {number}
      </ProgressLists.Buttons>
    );
  });

  return <Container>{renderButtonNumber}</Container>;
}
