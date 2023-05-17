import React from 'react';
import { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import { Pagination } from "@mui/material";

const Trips = () => {
const [trips, setTrips] = useState([])
const [page, setPage] = useState(1);



  const fetchTrips = () => {
      fetch(`http://localhost:4000/trips?_page=${page}`)
      .then((response) => {
        return response.json();
        })
        .then((data) => {
        setTrips(data);
            });
  };
  useEffect(() => {
    fetchTrips();
}, [page])



    return (
        <div>
     <Filter text='Search for a trip' /> 
    {trips.map((trip) => (
    <p>{trip.dep_time}</p>))}
    <Pagination
        count={10}
        color="primary"
        onChange={(event, value) => setPage(value)}
        page={page}
      />
        </div>
    );
};

export default Trips