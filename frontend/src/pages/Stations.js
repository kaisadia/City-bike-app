import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import Card from '../components/Card';
import Filter from '../components/Filter';
import './stations.css';

function Stations({ flipped, setFlipped }) {
  const [paginated, setPaginated] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const fetchPaginatedStations = () => {
    fetch(`http://localhost:8080/stations?page=${page}&size=18&search=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setPaginated(data);
      });
  };
  useEffect(() => {
    fetchPaginatedStations();
  }, [page, search]);

  return (
    <div>
      <Filter setSearch={setSearch} text="Search for a station" />
      <p className="infotext">Click on a station to get more information</p>
      <div>
        <div className="grid">
          {paginated.map((station) => (
            <div key={station.id}>
              <Card
                paginated={station}
                flipped={flipped}
                setFlipped={setFlipped}
              />
            </div>
          ))}

        </div>
      </div>
      <div className="pagination">
        <Pagination
          count={23}
          color="standard"
          onChange={(event, value) => setPage(value)}
          page={page}

        />
      </div>
    </div>
  );
}

export default Stations;
