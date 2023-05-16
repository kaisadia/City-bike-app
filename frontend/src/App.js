import './App.css';
import React from "react";
import {useState} from 'react'
import Stations from './components/Stations';
import ResponsiveAppBar from './components/ResponsiveAppBar';


function App() {
const [stations, setStations] = useState([])

  return (
    <div>
      <ResponsiveAppBar/>
      <Stations stations={stations} setStations={setStations}/>
    </div>
  );
}

export default App;
