import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export const Overlay = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: -webkit-linear-gradient(
    to right,
    #f7ac06,
    #ffc544
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #f7ac06, #ffc544);
`;

Overlay.defaultProps = {
  bg: "main"
};

export const Modal = styled(Flex)`
  max-width: 100%;
  min-height: 300px;
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(-50%);
  opacity: 1;
  z-index: 999;
  transition: 0.3s all;
`;

Modal.defaultProps = {
  bg: "white",
  width: ["600px"],
  p: [4],
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

export const Img = styled(Box)``;

Img.defaultProps = {
  as: "img",
  width: ["150px"],
  mb: [4]
};

export const Title = styled(Box)``;

Title.defaultProps = {
  as: "h3",
  mb: [2],
  fontSize: [6]
};

export const SubTitle = styled(Box)``;

SubTitle.defaultProps = {
  as: "p",
  fontSize: [3],
  mb: [4]
};

export const Close = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
