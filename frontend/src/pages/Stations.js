import React from 'react';
import { useEffect } from 'react';
import Card from '../components/Card';
import { useState } from 'react';
import Filter from '../components/Filter';
import { Pagination } from "@mui/material";

const Stations = ({flipped, setFlipped}) => {
const [filtered, setFiltered] = useState('')
const [stations, setStations] = useState([])
const [paginated, setPaginated] = useState([])
const [page, setPage] = useState(1);

    
    const fetchPaginatedStations = () => {
        fetch(`http://localhost:4000/stations?page=${page}&size=20`)
            .then((response) => {
            return response.json();
            })
            .then((data) => {
            setPaginated(data);
                });
    
            };
            useEffect(() => {
                fetchPaginatedStations();
            }, [page])

    const fetchStations = () => {
        fetch(`http://localhost:4000/allstations`)
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



    const showStations = filtered === ''? 
    paginated 
    :
    stations.filter(station => 
    station.station_name.toLowerCase().includes(filtered.toLowerCase())) 
    
       

    return (
        <div>
        <Filter setFiltered={setFiltered} text='Search for a station'/> 
        <div>
        <div className='grid'> 
       {showStations.map((station) => {
        return <Card key={station.id} paginated={station} flipped={flipped} 
        setFlipped={setFlipped} filtered={filtered} ></Card>
      })}

        </div>
        </div>
        <Pagination
        count={(stations.length/20).toFixed(0)}
        color="primary"
        onChange={(event, value) => setPage(value)}
        page={page}
      />
        </div>
    );
};

export default Stations;