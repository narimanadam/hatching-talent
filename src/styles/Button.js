import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  height: ${props => (props.icon ? "" : "36px")};
  line-height: ${props => (props.icon ? "" : "32px")};
  padding: ${props => (props.icon ? "" : "0 15px")};
  font-size: ${props => (props.sm ? "14px" : "16px")};
  border: none;
  transition: 0.3s;
  color: ${props =>
    props.colored ? `${props.theme.main}` : `${props.theme.black}`};
  width: ${props => (props.block ? "100%" : "auto")};
  text-align: ${props => (props.block ? "center" : "left")};

  svg {
    margin-right: 15px;
  }
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
    box-shadow: none;
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const MainButton = styled(Button)`
  border: 2px solid ${props => props.theme.main};
  background: ${props => props.theme.main}; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f7ac06,
    #ffc544
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #f7ac06, #ffc544);
  color: ${props => props.theme.white};
  font-weight: bold;
`;

const MainOutlineButton = styled(Button)`
  border: 2px solid ${props => props.theme.main};
  color: ${props => props.theme.main};
  font-weight: bold;
`;

const DefaultButton = styled(Button)`
  background: ${props => props.theme.white};
  :hover {
    opacity: 0.8;
  }
`;
const DefaultButtonOutline = styled(Button)`
  border: 2px solid ${props => props.theme.white};
  background: transparent;
  color: ${props => props.theme.white};
  :hover {
    background: ${props => props.theme.white};
    color: ${props => props.theme.black};
  }
`;

export {
  Button,
  MainButton,
  MainOutlineButton,
  DefaultButton,
  DefaultButtonOutline
};
