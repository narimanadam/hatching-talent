import React, { Fragment } from "react";
import {
  RadioButtonField,
  RadioButtonLabel,
  RadioButtonText
} from "../styles/RadioButtonStyles";

const RadioButton = ({ name, label }) => {
  return (
    <Fragment>
      <div className="form__group radio inline">
        <RadioButtonField type="radio" name={name} />
        <RadioButtonLabel />
        <RadioButtonText>{label}</RadioButtonText>
      </div>
    </Fragment>
  );
};

export default RadioButton;
