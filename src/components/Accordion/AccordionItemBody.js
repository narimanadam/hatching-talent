import React from "react";
import { Container } from "react-grid-system";

const AccordionItemBody = () => {
  return (
    <div className="accordion__body">
      <Container>{this.props.children}</Container>
    </div>
  );
};

export default AccordionItemBody;
