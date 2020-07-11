import React from "react";
import * as Styled from "./PageHeader.styles";

const PageHeader = ({ boldText, normalText, children, desc }) => {
  return (
    <Styled.Header>
      <Styled.Heading>
        <strong>{boldText}</strong> {normalText}
      </Styled.Heading>
      {desc && <Styled.Description>{desc}</Styled.Description>}
      {children}
    </Styled.Header>
  );
};

export default PageHeader;
