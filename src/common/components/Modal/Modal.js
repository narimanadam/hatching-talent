import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle
} from "react";
import * as Styled from "./Modal.styles";
import { createPortal } from "react-dom";
import { Button } from "../../../styles/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = forwardRef(({ show, children, title, subtitle, img }, ref) => {
  const modalRoot = document.getElementById("modal");
  const elRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  useImperativeHandle(ref, () => {
    return {
      toggleModal: () => setShowModal(!showModal)
    };
  });

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  if (showModal) {
    return createPortal(
      <Styled.Overlay>
        <Styled.Modal>
          <Styled.Img src={img} />
          <Styled.Title>{title}</Styled.Title>
          {subtitle && <Styled.SubTitle>{subtitle}</Styled.SubTitle>}
          {children}

          <Styled.Close>
            <Button type="button" onClick={toggleModal}>
              <FontAwesomeIcon
                icon="times"
                size="1x"
                style={{ color: "#333" }}
              />
            </Button>
          </Styled.Close>
        </Styled.Modal>
      </Styled.Overlay>,
      elRef.current
    );
  }
});

export default Modal;
