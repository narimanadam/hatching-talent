import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export const Wrapper = styled(Box)`
  min-width: 600px;
  text-align: ${props => (props.center ? "center" : "left")};
`;

Wrapper.defaultProps = {
  bg: "lightGray",
  p: 5,
  mb: [3],
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
  fontSize: [2]
};
