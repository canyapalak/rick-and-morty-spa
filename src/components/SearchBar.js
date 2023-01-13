import React from 'react'
import { useState, useEffect } from 'react';
import SingleCard from './SingleCard';

const SearchBar = ({ setFilteredChar, filteredChar, data }) => {
    // const [searchChar, setSearchChar] = useState('');


    const handleOnChange = (value) => {
        if (value==='') {
            setFilteredChar(null)
        } else {
            setFilteredChar(data.filter(item => item.name.toLowerCase().includes(value.toLowerCase())));

        }
    }
    console.log('filteredChar :>> ', filteredChar);

  return (
    <React.Fragment>
          <input
        id="search-box"
        type="text"
        onChange={e => handleOnChange(e.target.value)}
          />
    </React.Fragment>
  );
};

export default SearchBar