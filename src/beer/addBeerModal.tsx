import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import CustomBeer from '../assets/custom-beer.png';

const AddBeerModal = (props: any) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (props.showAddBeerModal) {
      handleShow();
    } else {
      handleClose();
    }
  }, [props.showAddBeerModal]);

  useEffect(()=> {
    if (!show) {
      props.closeModal(false);
    }
  }, [show]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add a New Beer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="customBeerImage mb-4">
            <img src={CustomBeer} alt="" height={'150px'} />
          </div>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Beer name*" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Genre*" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" placeholder="Description*" style={{ height: '100px' }} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddBeerModal;