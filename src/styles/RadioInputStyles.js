import styled from "styled-components";

const RadioInputHeading = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
`;

const RadioField = styled.input`
  position: absolute;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  display: inline-block;
  margin: auto;
  opacity: 0;
  z-index: 2;
  &:checked + label:after {
    opacity: 1;
  }
`;

const RadioLabel = styled.label`
  position: relative;
  display: inline-block;
  background: ${props => props.theme.white};
  top: 0;
  left: 0;
  z-index: 1;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-bottom: 10px;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: ${props => props.theme.black};
    border-radius: 50%;
    width: 10px;
    height: 10px;
    opacity: 0;
  }
`;

const RadioText = styled.span`
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
`;

const DarkRadioLabel = styled(RadioLabel)`
  background: ${props => props.theme.main};
`;

export { RadioInputHeading, RadioField, RadioLabel, RadioText, DarkRadioLabel };
