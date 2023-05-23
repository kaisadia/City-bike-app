import React from 'react';
import { useState, useMemo } from 'react';
import Map from './Map';

const Card = ({paginated}) => {
    const [flipped, setFlipped] = useState(true)
    
    const clickHandler = () => {setFlipped(!flipped)}
    
    
    const center =  useMemo(() => ({ lat: paginated.y, lng: paginated.x }), [])

    return (
    
    <div className='card-container'>
        {flipped && <div onClick={clickHandler} className='front'> <p>{paginated.station_name}</p>
        <p>{paginated.address}</p>
        </div>
        }  
        {!flipped && <div onClick={clickHandler} className='back'>  
        <p>Total trips to: {paginated.dep_station_count}</p>
        <p>Total trips from: {paginated.ret_station_count}</p>
        <p>Average distance(km) departing from the station:  {((paginated.avg_distance_dep)/1000).toFixed(2)}</p>
        <p>Average distance(km) returning to the station: {((paginated.avg_distance_ret)/1000).toFixed(2)}</p>
        <Map center={center}/>
        </div>} 
</div>
    );
};

export default Card;