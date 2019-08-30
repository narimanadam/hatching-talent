import React, { Component } from "react";

class AccordionItem extends Component {
  render() {
    return <div className="accordion__item">{this.props.children}</div>;
  }
}

export default AccordionItem;
