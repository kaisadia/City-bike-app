import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Filter from '../components/Filter';
import './trips.css';
import './stations.css';

function Trips() {
  const [trips, setTrips] = useState([]);
  const [page, setPage] = useState(1);
  const [dep, setDep] = useState('');
  const [ret, setRet] = useState('');
  const [date, setDate] = useState('');

  const fetchTrips = () => {
    fetch(`http://localhost:4000/trips?page=${page}&size=100&dep=${dep}&ret=${ret}&date=${date}`)
      .then((response) => response.json())
      .then((data) => {
        setTrips(data);
      });
  };
  useEffect(() => {
    fetchTrips();
  }, [page, dep, ret, date]);

  return (
    <div className="container">
      <p className="searchtext">Search for journeys</p>
      <div className="triptext">There are (why not working?) bike journeys </div>
      <div className="filter-box">
        <Filter setSearch={setDep} text="Enter departure station" />
        <Filter setSearch={setRet} text="Enter a return station" />
        <Filter setSearch={setDate} text="Enter date dd/mm/yyy" />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><p className="headertext">Date</p></TableCell>
              <TableCell align="right"><p className="headertext">Departure station</p></TableCell>
              <TableCell align="right"><p className="headertext">Return station</p></TableCell>
              <TableCell align="right"><p className="headertext">Distance (km)</p></TableCell>
              <TableCell align="right"><p className="headertext">Duration (min)</p></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trips.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date.slice(0, 10).split('-').reverse().join('/')}
                </TableCell>
                <TableCell align="right">{row.dep_station_name}</TableCell>
                <TableCell align="right">{row.ret_station_name}</TableCell>
                <TableCell align="right">{(row.covered_distance / 1000).toFixed(2)}</TableCell>
                <TableCell align="right">{(row.duration / 60).toFixed(0)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        className="pagination"
        count={10000}
        color="standard"
        onChange={(event, value) => setPage(value)}
        page={page}
      />
    </div>
  );
}

export default Trips;
