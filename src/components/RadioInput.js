import React, { Fragment } from "react";
import {
  RadioField,
  RadioLabel,
  DarkRadioLabel,
  RadioText
} from "../styles/RadioInputStyles";

const RadioInput = ({ name, label, value, colored, handleInputChange }) => {
  return (
    <Fragment>
      <div className="form__group radio">
        <RadioField
          type="radio"
          name={name}
          value={value}
          onChange={handleInputChange}
        />
        {colored ? <DarkRadioLabel /> : <RadioLabel />}
        <RadioText>{label}</RadioText>
      </div>
    </Fragment>
  );
};

export default RadioInput;
