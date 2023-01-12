import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function Modals({ data }) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
  <>

      {data && data.map((char) => {

        return (
          <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}>
            <Modal.Dialog key={char.id} className="modal-card">
              <Modal.Body className="modal-body">
                <p id="modalCharName">{char.name}</p>
                <img src={char.image} alt="Character Name" />
                <p id="modalSpecies">Species: {char.species}</p>
                <p>Status: {char.status}</p>
                <Button variant="danger" id="closeButton" onClick={handleClose}>CLOSE</Button>
              </Modal.Body>
            </Modal.Dialog>
          </div>
        )
      })}
    </>
  )

}