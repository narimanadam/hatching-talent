import React from "react";
import * as Styled from "./empty.styles";

const Empty = ({ label }) => (
  <Styled.Empty>
    <Styled.Img src="/assets/no-data.svg" />
    <Styled.Label>{label}</Styled.Label>
  </Styled.Empty>
);

export default Empty;
