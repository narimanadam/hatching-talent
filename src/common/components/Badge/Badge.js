import React from "react";
import * as Styled from "./Badge.styles";

const Badge = ({ text, variant }) => {
  return <Styled.Badge variant={variant}>{text}</Styled.Badge>;
};

export default Badge;
