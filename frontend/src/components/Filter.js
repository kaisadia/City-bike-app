import React from 'react';
import './filter.css';

function Filter({ setSearch, text, search }) {
  return (
    <div className="filter">
      <input
        className="bar"
        id="outlined-basic"
        type="text"
        label="Search"
        onChange={(e) => { setSearch(e.target.value); console.log(e.target.value); }}
        value={search}
        placeholder={text}
      />
    </div>
  );
}

export default Filter;
