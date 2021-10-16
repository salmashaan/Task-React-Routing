import React from "react";
import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const SubModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button className="btn btn-danger" onClick={openModal}>
        SUBSCRIBE
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className="center">
          <label>
            {" "}
            Name: <input />{" "}
          </label>
          <br />
          <br />
          <label>
            {" "}
            D.O.B: <input />
            <br />
          </label>{" "}
          <br />
          <br />
          <label>
            {" "}
            Email: <input />
          </label>{" "}
          <br />
          <br />
        </form>
      </Modal>
    </div>
  );
};

export default SubModal;
