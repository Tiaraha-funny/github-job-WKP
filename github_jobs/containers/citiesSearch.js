import React, { useContext } from "react";
import CitiesSearch from "../components/CitiesSearch";
import { Container } from "../components/CitiesSearch/styles/citiesSearch";
import { GlobalContexts } from "../globalContext";

export default function CitiesSearchContainer() {

    const {handleCheckBerlin, handleCheckLondon, handleCheckNewYork, handleCheckSanFrancisco} = useContext(GlobalContexts);

  return (
    <Container>
      <p>
        <CitiesSearch.Input type="checkbox" name="newYork" onChange={handleCheckNewYork} />
        <CitiesSearch.Label>New York</CitiesSearch.Label>
      </p>
      <p>
        <CitiesSearch.Input type="checkbox" name="sanFrancisco" onChange={handleCheckSanFrancisco} />
        <CitiesSearch.Label>San Francisco</CitiesSearch.Label>
      </p>
      <p>
        <CitiesSearch.Input type="checkbox" name="london" onChange={handleCheckLondon} />
        <CitiesSearch.Label>London</CitiesSearch.Label>
      </p>
      <p>
        <CitiesSearch.Input type="checkbox" name="berlin" onChange={handleCheckBerlin} />
        <CitiesSearch.Label>Berlin</CitiesSearch.Label>
      </p>
    </Container>
  );
}
