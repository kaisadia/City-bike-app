import React from 'react';
import { useEffect } from 'react';
import Card from './Card';

const Stations = ({stations, setStations, flipped, setFlipped}) => {
    
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

    return (
        <div className='grid'> 
       {stations.map((station) => {
        return <Card key={station.id} stations={station} flipped={flipped} setFlipped={setFlipped}></Card>
      })}

        </div>
    );
};

export default Stations;