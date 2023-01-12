import {useState, useEffect} from "react";
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modals from './Modals';

export default function Cards({data}) {

        const cardStyle = {
        width: "13rem",
        height: "13rem",
        border: "2px solid rgb(6, 75, 6)",
        }
  
  return (
    <div className="container">
      {data && data.map((char) => {

          return (
              <Card key={char.id} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Card style={cardStyle}>
                    <Card.Img variant="top" src={char.image} />
                    </Card>
                  </div>
                
                  <div className="flip-card-back">
                    <Card style={cardStyle} id="backcard">
                    <Card.Title>{char.name}</Card.Title>
                    <Button variant="light">MORE INFO</Button>
                    </Card>
                  </div>
              </div>
            </Card>
          )
      })}
                  
    </div> 
    
          );
}; 