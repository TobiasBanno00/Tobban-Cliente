import React from 'react'
import { Modal } from "react-bootstrap";
import LogoWhiteTobban from "../../../assets/png/logo-white.png";
import "./BasicModal.scss";

function BasicModal(props) {

    const { show, setShow, children } = props;
  
    return (
      <Modal
        className="basic-modal"
        show={show}                     // True abierto, false cerrado
        onHide={() => setShow(false)}   // cuando se presiona el fondo se cierra el modal
        centered                        //centrado
        size="lg"                       // tamaño
      >
        <Modal.Header>
          <Modal.Title>
            <img src={LogoWhiteTobban} alt="Twittor" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    );
  }

export default BasicModal