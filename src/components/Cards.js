import React from 'react'
import SingleCard from "./SingleCard";

function Cards({ data }) {

  return (
    <div className="container">
      {data && data.map((char) => {

        return (
          <SingleCard key={char.id} char={char} />
        )
      }
      )}
    </div> 
          );
}; 
export default Cards