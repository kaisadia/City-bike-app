import React from 'react'

const FilterStations = ({setFiltered})=> {

  return (
    <div>
        <input className='bar' id="outlined-basic"
          variant="outlined"
          fullWidth
          type='text'
          label="Search" onChange={(e) => {setFiltered(e.target.value); console.log(e.target.value)}} 
          placeholder='Search for a station' />
    </div>
  )
}

export default FilterStations