import React from 'react'
import {useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SingleCard({ char }) {
    
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  }

  const handleShow = () => {
        setShow(true);
  }
  
  const cardStyle = {
  width: "13rem",
  height: "13rem",
  border: "2px solid rgb(6, 75, 6)",
  }

    return (
      <React.Fragment>
        <Card className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <Card style={cardStyle}>
                <Card.Img variant="top" src={char.image} />
              </Card>
            </div>

            <div className="flip-card-back">
              <Card style={cardStyle} id="backcard">
                <Card.Title>{char.name}</Card.Title>
                <Button variant="light" onClick={() => handleShow()}>MORE INFO</Button>
              </Card>
            </div>
          </div>
        </Card>
          
        <Modal show={show} onHide={handleClose}>
          <Modal.Dialog className="modal-card">
            <Modal.Body className="modal-body">
              <p id="modalCharName">{char.name}</p>
              <img src={char.image} alt="Character Name" />
              <p id="modalSpecies">Species: {char.species}</p>
              <p>Status: {char.status}</p>
              <Button variant="light" id="closeButton" onClick={handleClose}>CLOSE</Button>
            </Modal.Body>
          </Modal.Dialog>
        </Modal>
      </React.Fragment>
    )
}

export default SingleCard