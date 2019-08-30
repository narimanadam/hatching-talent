import React from "react";
import { InputFieldStyle } from "../styles/FormStyles";

function InputField({
  type,
  placeholder,
  name,
  label,
  handleInputChange,
  handleBlur,
  required
}) {
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
      />
    </div>
  );
}

export default InputField;
