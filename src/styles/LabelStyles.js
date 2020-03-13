import styled from "styled-components";

const LabelStyles = styled.div`
  padding: 8px 15px;
  display: inline-block;
  color: ${props => props.theme.white};
  background: ${props => props.theme.sec};
  font-size: 14px;
  margin-right: 15px;
  margin-bottom: 15px;
  &:last-child {
    margin-right: 0;
  }
`;

const LabelLink = styled.a`
  color: ${props => props.theme.white};
  text-decoration: none;
`;

const CloseIcon = styled.button`
  margin-left: 10px;
  background: none;
  border: none;
  color: ${props => props.theme.white};
`;

export { LabelStyles, CloseIcon, LabelLink };
