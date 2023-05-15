import React from 'react';
import {useEffect} from 'react'

const Stations = ({stations, setStations}) => {

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
        <div>
            {stations.map(station => <p>{station.station_name}</p>)}
        </div>
    );
};

export default Stations;