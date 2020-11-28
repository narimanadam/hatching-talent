import React from "react";
import * as Styled from "./Badge.styles";

const Badge = ({ text, variant, children }) => {
  return (
    <Styled.Badge variant={variant}>
      {text} {children}
    </Styled.Badge>
  );
};

export default Badge;
