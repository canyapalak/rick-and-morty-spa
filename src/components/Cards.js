import React from 'react'
import SingleCard from "./SingleCard";

function Cards({ data, filteredChar }) {

  return (
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
          );
}; 
export default Cards