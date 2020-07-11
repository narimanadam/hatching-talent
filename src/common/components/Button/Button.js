import React from "react";
import * as Styled from "./Button.styles";

const Button = ({ text, variant, type, disabled, handleClick }) => {
  return (
    <Styled.Button
      variant={variant}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </Styled.Button>
  );
};

export default Button;
