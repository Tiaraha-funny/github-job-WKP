import React from "react";
import { Header } from "../components";
import { Container } from "../components/Header/styles/header";

export default function HeaderContainer() {
  return (
    <Container>
      <Header.Form>
          <Header.Input type="text" placeholder="Title, companies, expo..." />
          <Header.Button>Search</Header.Button>
      </Header.Form>
    </Container>
  );
}
