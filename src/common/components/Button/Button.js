import React from "react";
import * as Styled from "./Button.styles";

const Button = ({
  text,
  icon,
  variant,
  type,
  disabled,
  handleClick,
  ...rest
}) => {
  return (
    <Styled.Button
      variant={variant}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {icon && icon} {text}
    </Styled.Button>
  );
};

export default Button;
