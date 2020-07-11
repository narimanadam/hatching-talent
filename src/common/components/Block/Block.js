import React from "react";
import * as Styled from "./Block.styles";

const Block = ({ title, variant, children }) => {
  return (
    <Styled.Block variant={variant}>
      <Styled.Title>{title}</Styled.Title>
      {children}
    </Styled.Block>
  );
};

export default Block;
