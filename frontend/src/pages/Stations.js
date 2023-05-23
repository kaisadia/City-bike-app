import React from 'react';
import { useEffect } from 'react';
import Card from '../components/Card';
import { useState } from 'react';
import Filter from '../components/Filter';
import { Pagination } from "@mui/material";
import Map from '../components/Map';

const Stations = ({flipped, setFlipped}) => {
const [paginated, setPaginated] = useState([])
const [page, setPage] = useState(1);
const [search, setSearch] = useState('')

    
    const fetchPaginatedStations = () => {
        fetch(`http://localhost:4000/stations?page=${page}&size=20&search=${search}`)
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
        <div>
        <Filter setSearch={setSearch} text='Search for a station'/> 
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
</div>
        <Pagination
        count={23}
        color="primary"
        onChange={(event, value) => setPage(value)}
        page={page}
        
      />
        </div>
    );
};

export default Stations;