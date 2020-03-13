import React, { useEffect, useRef } from "react";
import { ModalStyles } from "../styles/ModalStyles";
import { createPortal } from "react-dom";

const Modal = ({ show, children }) => {
  const showHideCls = show ? "modal open" : "";
  const modalRoot = document.getElementById("modal");
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<ModalStyles>{children}</ModalStyles>, elRef.current);
};

export default Modal;
