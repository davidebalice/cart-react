import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useGlobalContext } from "../../context/context";

const ConfirmModal = ({ onConfirm }) => {
  const { showModal, setShowModal, confirmMsg } = useGlobalContext();

  const closeHandle = () => {
    setShowModal(false);
  };

  return (
    <Modal show={showModal}>
      <Modal.Header closeButton onClick={closeHandle}>
        <Modal.Title></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{confirmMsg}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={closeHandle}>
          Close
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
