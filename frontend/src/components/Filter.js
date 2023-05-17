import React from 'react'

const Filter = ({setFiltered, text})=> {

  return (
    <div className='filter'>
        <input className='bar' id="outlined-basic"
          variant="outlined"
          fullWidth
          type='text'
          label="Search" onChange={(e) => {setFiltered(e.target.value); console.log(e.target.value)}} 
          placeholder={text} />
    </div>
  )
}

export default Filter