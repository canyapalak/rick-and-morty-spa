import {useState, useEffect} from "react";
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modals from "./Modals";

export default function Cards() {

const [data, setData] = useState([]);
const url = "https://rickandmortyapi.com/api/character"

  useEffect(() =>{
  fetch(url)
    .then(response => response.json())
    .then(result => {
      setData(result.results)
      console.log('data :>> ', data);
    });
    
    }, []);

        const cardStyle = {
        width: "13rem",
        height: "13rem",
        border: "2px solid rgb(6, 75, 6)",
        }
  
    return(
        <>
        {data && data.map((char) => {
          <Modals character = {char} />

          return (
              <Card key={char.id} className="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <Card style={cardStyle}>
                    <Card.Img variant="top" src={char.image} />
                    </Card>
                  </div>
                
                  <div class="flip-card-back">
                    <Card style={cardStyle} id="backcard">
                    <Card.Title>{char.name}</Card.Title>
                    <Button variant="light" onClick={Modals}>MORE INFO</Button>
                    </Card>
                  </div>
              </div>
              </Card>
            )
    })} 
          </>
          );
}; 