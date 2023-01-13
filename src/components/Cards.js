import React from 'react'
import SingleCard from "./SingleCard";
import { useState } from "react";
import Pagination from './Pagination';

function Cards({ data, filteredChar }) {

  const [page, setPage] = useState(1);
  const [maxpages, setMaxpages] = useState("");

  const fetchDataforPagination = async () => {
  
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
      const result = await response.json();
      setMaxpages(result.info.pages)
    } catch (error) {
      console.log(error)
      
    } 
    
  };

  return (
      <>
    <div className="container">

      {(data && !filteredChar) && data.map((char) => {

        return (
          <SingleCard key={char.id} char={char} />
        )
      }
      )}

      {(data && filteredChar) && filteredChar.map((char) => {
              
        return (
          <SingleCard key={char.id} char={char} />
        )
      }
      )}

      </div>
      <div className="pagination">
    {fetchDataforPagination() ? <Pagination setPage={setPage} page={page}  maxpages={maxpages} setMaxpages ={setMaxpages}  /> : ("")
      } </div>
</>
          );
}; 
export default Cards