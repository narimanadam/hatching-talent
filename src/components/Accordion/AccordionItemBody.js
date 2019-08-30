import React, { Component } from "react";
import { Container } from "react-grid-system";

class AccordionItemBody extends Component {
  render() {
    return (
      <div className="accordion__body">
        <Container>{this.props.children}</Container>
      </div>
    );
  }
}

export default AccordionItemBody;
