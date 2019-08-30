import React from "react";
import styled from "styled-components";

const TextareaStyle = styled.textarea`
  border: none;
  background: ${props => props.theme.white};
  resize: none;
  width: 100%;
  height: 100px;
  font-size: 16px;
  padding-left: 15px;
  padding-top: 10px;
  :focus {
    box-shadow: none;
    outline: none;
  }
`;

function Textarea({ name, placeholder, label, handleInputChange, handleBlur }) {
  return (
    <div className="form__group">
      {label && <label className="form__label">{label}</label>}
      <TextareaStyle
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default Textarea;
