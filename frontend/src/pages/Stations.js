import React from 'react';
import { useEffect } from 'react';
import Card from '../components/Card';
import { useState } from 'react';
import FilterStations from '../components/FilterStations';

const Stations = ({flipped, setFlipped}) => {
const [filtered, setFiltered] = useState('')
const [stations, setStations] = useState([])
    
    const fetchStations = () => {
        fetch("http://localhost:4000/stations")
            .then((response) => {
            return response.json();
            })
            .then((data) => {
            setStations(data);
                });
    
            };
            useEffect(() => {
                fetchStations();
            })

    const filteredStations = stations.filter(station => {
        if(filtered === ''){
          return station
        } else if (station.station_name.toLowerCase().includes(filtered.toLowerCase())){
          return station}})
    

    return (
        <div>
        <div className='filter'>
        <FilterStations setFiltered={setFiltered} />
        </div>
        <div className='grid'> 
       {filteredStations.map((station) => {
        return <Card key={station.id} stations={station} flipped={flipped} setFlipped={setFlipped} filtered={filtered} ></Card>
      })}

        </div>
        </div>
    );
};

export default Stations;