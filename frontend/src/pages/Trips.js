import React from 'react';
import { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import { Pagination } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Trips = () => {
const [trips, setTrips] = useState([])
const [page, setPage] = useState(1);

  const fetchTrips = () => {
      fetch(`http://localhost:4000/trips?page=${page}&size=100`)
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
    <div >
      <Filter text='Search for a trip' /> 
<TableContainer component={Paper} >
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Departure station</TableCell>
            <TableCell align="right">Return station</TableCell>
            <TableCell align="right">Distance (km)</TableCell>
            <TableCell align="right">Duration (min)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trips.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.dep_time.slice(0, 10).split('-').reverse().join('/')}
              </TableCell>
              <TableCell align="right">{row.dep_station_name}</TableCell>
              <TableCell align="right">{row.ret_station_name}</TableCell>
              <TableCell align="right">{(row.covered_distance/1000).toFixed(2)}</TableCell>
              <TableCell align="right">{(row.duration/60).toFixed(0)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        count={10000}
        color="primary"
        onChange={(event, value) => setPage(value)}
        page={page}
      />
    </TableContainer>
    </div>
  );
}










export default Trips