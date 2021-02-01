import React, { useContext, useState } from "react";
import CitiesSearch from "../components/CitiesSearch";
import { Container } from "../components/CitiesSearch/styles/citiesSearch";
import { GlobalContexts } from "../globalContext";

export default function CitiesSearchContainer() {
  const { handleCheckboxFilterLocation, city, setCity } = useContext(GlobalContexts);

  function checked(e) {
    setCity(e.target.value);
    handleCheckboxFilterLocation(e.target.value);
  }

  return (
    <Container>
      <p>
        <CitiesSearch.Input
          type="checkbox"
          checked={city === "new york"}
          name="newYork"
          value="new york"
          onChange={checked}
        />
        <CitiesSearch.Label>New York</CitiesSearch.Label>
      </p>
      <p>
        <CitiesSearch.Input
          type="checkbox"
          name="sanFrancisco"
          checked={city === "san fransisco"}
          value="san fransisco"
          onChange={checked}
        />
        <CitiesSearch.Label>San Francisco</CitiesSearch.Label>
      </p>
      <p>
        <CitiesSearch.Input
          type="checkbox"
          checked={city === "london"}
          name="london"
          value="london"
          onChange={checked}
        />
        <CitiesSearch.Label>London</CitiesSearch.Label>
      </p>
      <p>
        <CitiesSearch.Input
          type="checkbox"
          checked={city === "berlin"}
          name="berlin"
          value="berlin"
          onChange={checked}
        />
        <CitiesSearch.Label>Berlin</CitiesSearch.Label>
      </p>
    </Container>
  );
}
