import React, { Component } from "react";
import { LabelStyles, CloseIcon } from "../styles/LabelStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Labels extends Component {
  render() {
    const { title } = this.props;
    return (
      <LabelStyles>
        {title}
        <CloseIcon>
          <FontAwesomeIcon icon="times" />
        </CloseIcon>
      </LabelStyles>
    );
  }
}

export default Labels;
