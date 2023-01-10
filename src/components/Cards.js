import {useState, useEffect} from "react";
import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Cards() {
    
const [data, setData] = useState([]);
const url = "https://rickandmortyapi.com/api/character"

  useEffect(() =>{
  fetch(url)
    .then(response => response.json())
    .then(result => setData(result.results));
    
    }, []);

    return(
        <>
          {data && data.map((i) => {

            return (
              <div key={i.id} className="single-cards">
                  <Card style={{ width: '13rem' }}>
                  <Card.Img variant="top" src={i.image} />
                  </Card>
                </div> 
            )
    
    })} 
          </>
          );
};