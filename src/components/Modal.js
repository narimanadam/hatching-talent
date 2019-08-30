import React, { Component } from "react";
import { ModalStyles, Close, Title } from "../styles/ModalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../styles/Button";

class Modal extends Component {
  render() {
    const { children, show, handleClose, title } = this.props;
    const showHideCls = show ? "modal open" : "";
    return (
      <ModalStyles className={showHideCls}>
        <div className="modal-main">
          <Title>{title}</Title>
          {children}
          <Close>
            <Button>
              <FontAwesomeIcon
                icon="times"
                size="1x"
                style={{ color: "#333" }}
                onClick={handleClose}
              />
            </Button>
          </Close>
        </div>
      </ModalStyles>
    );
  }
}

export default Modal;
