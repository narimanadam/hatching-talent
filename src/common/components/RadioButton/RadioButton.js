import React from "react";
import * as Styled from "./RadioButton.styles";

const RadioButton = ({ name, label, handleChange, value, heading }) => {
  return (
    <>
      {heading && <Styled.Heading>{heading}</Styled.Heading>}
      <div className="form__group radio inline">
        <Styled.Field
          type="radio"
          name={name}
          onChange={handleChange}
          value={value}
        />
        <Styled.Label />
        <Styled.Text>{label}</Styled.Text>
      </div>
    </>
  );
};

export default RadioButton;
