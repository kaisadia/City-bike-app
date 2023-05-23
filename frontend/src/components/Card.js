import React from 'react';
import { useState, useMemo } from 'react';
import Map from './Map';
import './card.css'

const Card = ({paginated}) => {
    const [flipped, setFlipped] = useState(true)
    
    const clickHandler = () => {setFlipped(!flipped)}
    
    
    const center =  useMemo(() => ({ lat: paginated.y, lng: paginated.x }), [])

    return (
    
    <div className='card-container'>
        {flipped && <div onClick={clickHandler} className='front'> <p className='station'>{paginated.station_name}</p>
        <p className='address'>{paginated.address}</p>
        </div>
        }  
        {!flipped && <div onClick={clickHandler} className='back'>  
        <p>Total trips to the station: <p className='number'>{paginated.dep_station_count}</p></p>
        <p>Total trips from the station: <p className='number'>{paginated.ret_station_count}</p></p>
        <p>Average distance departing from the station: <p className='number'> {((paginated.avg_distance_dep)/1000).toFixed(2)} km</p></p>
        <p>Average distance returning to the station: <p className='number'>{((paginated.avg_distance_ret)/1000).toFixed(2)} km</p></p>
        <Map center={center}/>
        </div>} 
</div>
    );
};

export default Card;