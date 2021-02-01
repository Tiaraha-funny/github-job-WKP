import React, { useContext, useState } from "react";
import Locations from "../components/Locations";
import { Form } from "../components/Locations/styles/location";
import { GlobalContexts } from "../globalContext";

export default function LocationsContainer() {
  const { handleCheckboxFilterLocation } = useContext(GlobalContexts);
  const [inputSearch, setInputSearch] = useState("");

  function Search(e) {
    setInputSearch(e.target.value);
    handleCheckboxFilterLocation(e.target.value);
  }
  return (
    <Form>
      <Locations.Title>Location</Locations.Title>
      <br />
      <Locations.Input
        type="text"
        name="location"
        value={inputSearch}
        onChange={Search}
        placeholder="city, zipe code or country..."
      />
    </Form>
  );
}
