import React, { useState, useMemo } from 'react';
import Map from './Map';
import './card.css';

function Card({ paginated }) {
  const [flipped, setFlipped] = useState(true);

  const clickHandler = () => { setFlipped(!flipped); };
  const center = useMemo(() => ({ lat: paginated.y, lng: paginated.x }), []);
  return (

    <div className="card-container">
      {flipped && (
        <div className="front">
          <p className="station">{paginated.station_name}</p>
          <p className="address">{paginated.address}</p>
          <button className="button" type="button" onClick={clickHandler}>More</button>
        </div>
      )}
      {!flipped && (
        <div className="back">
          <div>
            Total trips to the station:
            <p className="number">{paginated.dep_station_count}</p>
          </div>
          <div>
            Total trips from the station:
            <p className="number">{paginated.ret_station_count}</p>
          </div>
          <div>
            Average distance departing from the station:
            <p className="number">
              {' '}
              {((paginated.avg_distance_dep) / 1000).toFixed(2)}
              {' '}
              km
            </p>
          </div>
          <div>
            Average distance returning to the station:
            <p className="number">
              {((paginated.avg_distance_ret) / 1000).toFixed(2)}
              {' '}
              km
            </p>
          </div>
          <Map center={center} />
          <button className="button" type="button" onClick={clickHandler}>Less</button>
        </div>
      )}
    </div>
  );
}

export default Card;
