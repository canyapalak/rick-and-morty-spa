import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function Modals(character) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    
  return (
          <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}>
              <Modal.Dialog  id="modal-card">
              <Modal.Header>
                  <Modal.Title>{character.name} Character Name</Modal.Title>
              </Modal.Header>
        <Modal.Body>
          <p>Here comes the character image.</p>
          <p>Here comes the character species.</p>
          <p>Here comes the character status.</p>
        </Modal.Body>
              <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}> */}
                  <Button variant="danger">Close</Button>
                {/* </Button> */}
              </Modal.Footer>
        </Modal.Dialog>
        </div>
          )
}