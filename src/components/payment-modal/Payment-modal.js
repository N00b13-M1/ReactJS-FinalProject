import React from "react";
import { Modal, Button } from "react-bootstrap";

const PaymentModal = ({show,handleClose,handlePaymentDone}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Please confirm the Payment</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you procedding with payment !</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button variant="primary" onClick={handlePaymentDone}>
         Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentModal;
