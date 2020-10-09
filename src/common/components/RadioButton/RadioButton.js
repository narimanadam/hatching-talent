import React from "react";
import * as Styled from "./RadioButton.styles";

const RadioButton = ({
  name,
  label,
  handleChange,
  value,
  heading,
  checked
}) => {
  return (
    <>
      {heading && <Styled.Heading>{heading}</Styled.Heading>}
      <Styled.FormGroup>
        <Styled.Field
          type="radio"
          name={name}
          onChange={handleChange}
          value={value}
          checked={checked}
        />
        <Styled.Label />
        <Styled.Text>{label}</Styled.Text>
      </Styled.FormGroup>
    </>
  );
};

export default RadioButton;
