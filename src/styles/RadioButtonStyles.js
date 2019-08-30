import styled from "styled-components";

const RadioButtonHeading = styled.label`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  display: block;
`;

const RadioButtonField = styled.input`
  position: relative;
  z-index: 2;
  width: 100px;
  height: 30px;
  opacity: 0;
  &:checked + label {
    background: ${props => props.theme.main};
    color: ${props => props.theme.white};
  }

  &:checked ~ span {
    color: ${props => props.theme.white};
  }
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  transition: 0.3s;
  background: ${props => props.theme.white};
`;

const RadioButtonText = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  transition: 0.3s;
`;

export {
  RadioButtonHeading,
  RadioButtonField,
  RadioButtonLabel,
  RadioButtonText
};
