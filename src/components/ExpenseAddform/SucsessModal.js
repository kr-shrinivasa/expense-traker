import React from "react";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import "./sucsessModal.css";


const SuccessModal = ({ modalOpen, setModalOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    //   backgroundColor: "#71cca",
      borderRadius: "12px",
    },
  };
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div className="modal-inner">
        <label>Expense Added Successfully!</label>
        
        <NavLink to="/">
          <div className="take-home-button">
            <i class="fa fa-home"></i>
            Home
          </div>
        </NavLink>
      </div>
    </Modal>
  );
};

export default SuccessModal;