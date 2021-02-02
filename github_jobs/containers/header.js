import React, { useContext, useState } from "react";
import { Header } from "../components";
import { Container } from "../components/Header/styles/header";
import { GlobalContexts } from "../globalContext";

export default function HeaderContainer() {
  const { state, dispatch } = useContext(GlobalContexts);
  const { jobs } = state;
  const [search, setSearch] = useState("");

  function handleSubmitForm(e) {
    e.preventDefault();
    const filterValueFromInput = jobs.filter((input) =>
      input.title.toLowerCase().includes(search.toLowerCase()) || input.company.toLowerCase().includes(search.toLowerCase())
    );
    console.log("filter", filterValueFromInput);
    dispatch({type: "SEARCH", filterValueFromInput})
  }

  function handleInputSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <Container>
      <Header.Form onSubmit={handleSubmitForm}>
        <Header.Input
          type="text"
          name="company"
          value={search}
          onChange={handleInputSearch}
          placeholder="Title, companies, expo..."
        />
        <Header.Button>Search</Header.Button>
      </Header.Form>
    </Container>
  );
}
