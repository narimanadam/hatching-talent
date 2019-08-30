import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BoxStyles, Icon, Heading, Text } from "../styles/BoxStyles";

const success = `${props => props.theme.success}`;

const Box = ({ type, heading, text, children }) => {
  return (
    <BoxStyles>
      {type == "success" && (
        <Icon>
          <FontAwesomeIcon
            icon="check-circle"
            size="4x"
            style={{ color: "#28a745" }}
          />
        </Icon>
      )}

      {type == "error" && (
        <Icon>
          <FontAwesomeIcon
            icon="times-circle"
            size="4x"
            style={{ color: "#dc3545" }}
          />
        </Icon>
      )}

      <Heading>{heading}</Heading>
      {text && text.map(text => <Text>{text}</Text>)}
      {children}
    </BoxStyles>
  );
};

export default Box;
