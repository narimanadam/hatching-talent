import React from "react";
import * as Styled from "./RadioInput.styles";
import { Flex } from "reflexbox";

const RadioInput = ({ name, label, value, colored, handleInputChange }) => {
  return (
    <Flex alignItems="center" mb={[3]}>
      <Styled.Field
        type="radio"
        name={name}
        value={value}
        onChange={handleInputChange}
      />
      <Styled.Label />
      <Styled.Text>{label}</Styled.Text>
    </Flex>
  );
};

export default RadioInput;
