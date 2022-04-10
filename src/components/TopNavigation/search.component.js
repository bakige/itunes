import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import fetch_playlist from "../../store/itunes/actions";
  

function Search({ details }) {
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    dispatch(fetch_playlist(e.target.value));
  };

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
      <FaSearch size="18" className="text-secondary my-auto" />
    </div>
  );
}

export default Search;