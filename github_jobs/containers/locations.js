import React, { useContext } from "react";
import Locations from "../components/Locations";
import { Form } from "../components/Locations/styles/location";
import { GlobalContexts } from "../globalContext";

export default function LocationsContainer() {
  const { handleSearchLocation, setSearchLocation, searchLocation } = useContext(GlobalContexts);

  return (
    <Form>
      <Locations.Title>Location</Locations.Title><br/>
      <Locations.Input
        type="text"
        name="location"
        defaultValue={searchLocation}
        onChange={handleSearchLocation}
        placeholder="City, city, zipe code or country"
      />
    </Form>
  );
}
