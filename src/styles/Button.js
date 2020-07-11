import styled from "@emotion/styled";
import { Box } from "reflexbox";

export const Button = styled(Box)`
  background: transparent;
  height: ${props => (props.icon ? "" : "40px")};
  line-height: ${props => (props.icon ? "" : "32px")};
  padding: ${props => (props.icon ? "" : "0 15px")};
  font-size: ${props => (props.sm ? "14px" : "16px")};
  border: none;
  transition: 0.3s;
  color: ${props =>
    props.colored ? `${props.theme.main}` : `${props.theme.black}`};
  width: auto;
  min-width: ${props => (props.block ? "100%" : "auto")};
  text-align: ${props => (props.block ? "center" : "left")};
  height: 40px;
  // svg {
  //   margin-right: 15px;
  // }
  // :hover {
  //   cursor: pointer;
  // }
  // :focus {
  //   outline: 0;
  //   box-shadow: none;
  // }
  // &[disabled] {
  //   opacity: 0.2;
  //   cursor: not-allowed;
  // }
`;

Button.defaultProps = {
  as: "button"
};

export const MainButton = styled(Button)`
  border: 2px solid ${props => props.theme.main};
  background: ${props => props.theme.main}; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f7ac06,
    #ffc544
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #f7ac06, #ffc544);
  color: white;
  font-weight: bold;
`;

export const MainOutlineButton = styled(Button)`
  border: 2px solid ${props => props.theme.main};
  color: ${props => props.theme.main};
  font-weight: bold;
`;

export const DefaultButton = styled(Button)`
  background: white;
  :hover {
    opacity: 0.8;
  }
`;
export const DefaultButtonOutline = styled(Button)`
  // // border: 2px solid white;
  // :hover {
  //   background: white;
  //   color: ${props => props.theme.black};
  // }
`;

DefaultButtonOutline.defaultProps = {
  as: "button",
  color: "white"
};
