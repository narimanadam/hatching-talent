import React from "react";
import * as Styled from "./Input.styles";
import Message from "../Message";

const Input = ({
  type,
  placeholder,
  name,
  label,
  variant,
  register,
  error
}) => {
  return (
    <div className="form__group">
      {label && <label className="form__label">{label}</label>}
      <Styled.Input
        type={type}
        placeholder={placeholder}
        name={name}
        bg="lightGray"
        ref={register}
        variant={variant && variant}
      />
      {error && <Message type="error" text={error.message} />}
    </div>
  );
};

export default Input;
