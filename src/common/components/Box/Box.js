import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Styled from "./Box.styles";

// const success = `${props => props.theme.success}`;

const Box = ({ type, heading, text, children, editMode, ...rest }) => {
  return (
    <Styled.Wrapper {...rest}>
      {type === "success" && (
        <Styled.Icon>
          <FontAwesomeIcon
            icon="check-circle"
            size="4x"
            style={{ color: "#28a745" }}
          />
        </Styled.Icon>
      )}

      {type === "error" && (
        <Styled.Icon>
          <FontAwesomeIcon
            icon="times-circle"
            size="4x"
            style={{ color: "#dc3545" }}
          />
        </Styled.Icon>
      )}

      <Styled.Heading>{heading}</Styled.Heading>
      {text &&
        !editMode &&
        React.Children.toArray(
          text.map(text => <Styled.Text>{text}</Styled.Text>)
        )}
      {children}
    </Styled.Wrapper>
  );
};

export default Box;
