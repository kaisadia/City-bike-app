import './App.css';
import React from "react";
import {useState} from 'react'
import ResponsiveAppBar from './components/ResponsiveAppBar';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import Stations from "./pages/Stations";
import Trips from "./pages/Trips";
import NoPage from "./pages/NoPage";


export default function App() {


/*
  return (
    <div>
      <ResponsiveAppBar/>
      <Stations stations={stations} setStations={setStations}/>
    </div>
  );
}
*/


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="stations" element={<Stations />} />
          <Route path="trips" element={<Trips />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}






