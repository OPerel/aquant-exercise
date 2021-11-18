import React, { useState } from "react";
import "./App.css";

import Map from './components/Map/Map';
import LocationForm from "./components/LocationForm/LocationForm";
import {Coordinate} from "./interfaces";



function App() {

  const [coordinates, setCoordinates] = useState<Coordinate[]>([])

  return (
    <div>
      <LocationForm setCoordinates={setCoordinates} />
      <Map coordinates={coordinates}/>
    </div>
  );
}

export default App;
