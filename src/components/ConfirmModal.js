import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ConfirmModal = ({ message, onConfirm, onCancel, showModal }) => {
  return (
    <Modal
      show={showModal}
      style={{
        border: "3px solid #ff0000",
      }}
    >
      <div className="modal-content">
        modal
        <p>{message}</p>
        <button onClick={onConfirm}>Conferma</button>
        <button onClick={onCancel}>Annulla</button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
