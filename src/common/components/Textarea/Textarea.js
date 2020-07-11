import React from "react";
import * as Styled from "./Textarea.styles";
import Message from "../Message";

const Textarea = ({
  name,
  placeholder,
  label,
  handleInputChange,
  handleBlur,
  value,
  validationMessage,
  variant
}) => {
  return (
    <div className="form__group">
      {label && <label className="form__label">{label}</label>}
      <Styled.Textarea
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        onBlur={handleBlur}
        value={value}
        variant={variant}
      />
      {validationMessage && (
        <Message type="error" text={validationMessage || {}} />
      )}
    </div>
  );
};

export default Textarea;
