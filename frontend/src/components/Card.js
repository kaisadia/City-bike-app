import React from 'react';
import { useState } from 'react';

const Card = ({stations}) => {
    const [flipped, setFlipped] = useState(true)
    
    const clickHandler = () => {setFlipped(!flipped)}

    return (
    
    <div className='card-container'>
        {flipped && <p onClick={clickHandler} className='front'>{stations.station_name}</p>}  
        {!flipped && <p onClick={clickHandler} className='back'>{stations.address}</p>} 
</div>
    );
};

export default Card;