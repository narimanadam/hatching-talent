import styled from "styled-components";

const ModalStyles = styled.div`
  width: 600px;
  min-height: 300px;
  background: ${props => props.theme.main};
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(-50%);
  opacity: 1;
  z-index: 999;
  transition: 0.3s all;
  box-shadow: ${props => props.theme.boxShadow};
  padding: 20px;
  /* &.open {
    opacity: 1;
    z-index: 999;
  } */
`;

const Title = styled.h3`
  padding-bottom: 15px;
  border-bottom: 1px solid ${props => props.theme.lightGray};
  margin-bottom: 15px;
`;

const Close = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export { ModalStyles, Title, Close };
