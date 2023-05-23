import React from 'react';
import { useEffect } from 'react';
import Card from '../components/Card';
import { useState } from 'react';
import Filter from '../components/Filter';
import { Pagination } from "@mui/material";
import './stations.css'


const Stations = ({flipped, setFlipped}) => {
const [paginated, setPaginated] = useState([])
const [page, setPage] = useState(1);
const [search, setSearch] = useState('')

    
    const fetchPaginatedStations = () => {
        fetch(`http://localhost:4000/stations?page=${page}&size=18&search=${search}`)
            .then((response) => {
            return response.json();
            })
            .then((data) => {
            setPaginated(data);
                });
    
            };
            useEffect(() => {
                fetchPaginatedStations();
            }, [page, search])

    return (
        <div >
        <Filter setSearch={setSearch} text='Search for a station'/> 
        <p className='infotext'>Click on a station to get more information</p>
        <div>
        <div className='grid'> 
       {paginated.map((station) => {
        return (
        <div>
        <Card key={station.id} paginated={station} flipped={flipped} 
        setFlipped={setFlipped} ></Card>
        </div>
        )
      })}

        </div>
</div >
<div className='pagination'>
        <Pagination
        count={23}
        color='standard'
        onChange={(event, value) => setPage(value)}
        page={page}
        
      />
      </div>
        </div>
    );
};

export default Stations;