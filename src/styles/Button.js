import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  padding: 10px 25px;
  font-size: ${props => (props.sm ? "14px" : "16px")};
  border: none;
  transition: 0.3s;
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
