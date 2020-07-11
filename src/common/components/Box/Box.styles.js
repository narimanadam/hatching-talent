import styled from "@emotion/styled";
import { Flex } from "reflexbox";

export const Box = styled(Flex)`
  min-width: 600px;
  text-align: ${props => (props.center ? "center" : "left")};
`;

Box.defaultProps = {
  bg: "white",
  mb: [3],
  p: [5],
  sx: {
    borderRadius: [3],
    "nth-type-of-last": {
      mb: [0]
    }
  }
};

export const Icon = styled(Flex)``;

Icon.defaultProps = {
  as: "p",
  mb: [3]
};

export const Heading = styled(Flex)``;

Heading.defaultProps = {
  as: "h3",
  mb: [3]
};

export const Text = styled(Flex)``;

Text.defaultProps = {
  as: "p",
  mt: [2],
  mb: [2],
  fontSize: [2]
};
