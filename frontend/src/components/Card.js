import React from 'react';
import { useState } from 'react';

const Card = ({paginated}) => {
    const [flipped, setFlipped] = useState(true)
    
    const clickHandler = () => {setFlipped(!flipped)}

    return (
    
    <div className='card-container'>
        {flipped && <p onClick={clickHandler} className='front'>{paginated.station_name}</p>}  
        {!flipped && <p onClick={clickHandler} className='back'>{paginated.address} </p>} 
</div>
    );
};

export default Card;