import React from "react";
import * as Styled from "./Textarea.styles";
import Message from "../Message";

const Textarea = ({
  name,
  placeholder,
  label,
  value,
  register,
  error,
  variant
}) => {
  return (
    <div className="form__group">
      {label && <label className="form__label">{label}</label>}
      <Styled.Textarea
        name={name}
        placeholder={placeholder}
        value={value}
        variant={variant && variant}
        bg="lightGray"
        ref={register}
      />
      {error && <Message type="error" text={error.message} />}
    </div>
  );
};

export default Textarea;
