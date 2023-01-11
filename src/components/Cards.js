import {useState, useEffect} from "react";
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

export default function Cards() {
    
const [data, setData] = useState([]);
const url = "https://rickandmortyapi.com/api/character"

  useEffect(() =>{
  fetch(url)
    .then(response => response.json())
    .then(result => setData(result.results));
    
    }, []);

        const cardStyle = {
        width: "13rem",
        height: "13rem",
        border: "2px solid rgb(6, 75, 6)",
        }
  
    return(
        <>
        {data && data.map((i) => {


            return (
              <div key={i.id} className="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <Card style={cardStyle}>
                    <Card.Img variant="top" src={i.image} />
                    </Card>
                  </div>
                
                  <div class="flip-card-back">
                    <Card style={cardStyle} id="backcard">
                    <Card.Title>{i.name}</Card.Title>
                    <Button variant="light">MORE INFO</Button>
                    </Card>
                  </div>
                </div>
              </div>
            )
    
    })} 
          </>
          );
}; 

