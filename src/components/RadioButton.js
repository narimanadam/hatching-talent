import React from "react";
import {
  RadioButtonField,
  RadioButtonLabel,
  RadioButtonText
} from "../styles/RadioButtonStyles";

const RadioButton = ({ name, label, handleChange, value }) => {
  return (
    <>
      <div className="form__group radio inline">
        <RadioButtonField
          type="radio"
          name={name}
          onChange={handleChange}
          value={value}
        />
        <RadioButtonLabel />
        <RadioButtonText>{label}</RadioButtonText>
      </div>
    </>
  );
};

export default RadioButton;
