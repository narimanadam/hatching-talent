import React from "react";
import { InputFieldStyle } from "../styles/FormStyles";

const InputField = ({
  type,
  placeholder,
  name,
  label,
  handleInputChange,
  handleBlur,
  required,
  value,
  handleInputKeyup
}) => {
  return (
    <div className="form__group">
      {label && <label className="form__label">{label}</label>}
      <InputFieldStyle
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleInputChange}
        onBlur={handleBlur}
        required={required}
        value={value}
        onKeyUp={handleInputKeyup}
      />
    </div>
  );
};

export default InputField;
