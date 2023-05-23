import React from 'react';
import { useState } from 'react';

const Card = ({paginated}) => {
    const [flipped, setFlipped] = useState(true)
    
    const clickHandler = () => {setFlipped(!flipped)}

    return (
    
    <div className='card-container'>
        {flipped && <div onClick={clickHandler} className='front'> <p>{paginated.station_name}</p>
        <p>{paginated.address}</p>
        </div>
        }  
        {!flipped && <div onClick={clickHandler} className='back'>  
        <p>Total trips to: {paginated.dep_station_count}</p>
        <p>Total trips from: {paginated.ret_station_count}</p>
        </div>} 
</div>
    );
};

export default Card;