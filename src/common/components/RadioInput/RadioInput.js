import React from "react";
import * as Styled from "./RadioInput.styles";

const RadioInput = ({ name, label, value, colored, handleInputChange }) => {
  return (
    <div className="form__group radio">
      <Styled.Field
        type="radio"
        name={name}
        value={value}
        onChange={handleInputChange}
      />
      <Styled.Text>{label}</Styled.Text>
    </div>
  );
};

export default RadioInput;
