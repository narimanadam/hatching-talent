import React from "react";
import * as Styled from "./Input.styles";
import Message from "../Message";

const Input = ({
  type,
  placeholder,
  name,
  label,
  handleInputChange,
  handleBlur,
  required,
  value,
  handleInputKeyup,
  validationMessage,
  variant
}) => {
  return (
    <div className="form__group">
      {label && <label className="form__label">{label}</label>}
      <Styled.Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleInputChange}
        onKeyUp={handleBlur}
        onBlur={handleBlur}
        required={required}
        value={value}
        bg="lightGray"
        // onKeyUp={handleInputKeyup}
        variant={variant && variant}
        autocomplete="new-password"
      />

      {validationMessage && (
        <Message type="error" text={validationMessage || {}} />
      )}
    </div>
  );
};

export default Input;
