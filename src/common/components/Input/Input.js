import React from "react";
import * as Styled from "./Input.styles";
import useForm from "../../hooks/useForm";
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
        onBlur={handleBlur}
        required={required}
        value={value}
        onKeyUp={handleInputKeyup}
        variant={variant && variant}
      />

      {validationMessage && (
        <Message type="error" text={validationMessage || {}} />
      )}
    </div>
  );
};

export default Input;
