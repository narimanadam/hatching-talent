import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export const Card = styled(Flex)`
  flex-direction: column;
  align-items: center;
`;

Card.defaultProps = {
  as: "li",
  bg: "white"
};

export const Logo = styled(Box)``;

Logo.defaultProps = {
  as: "img",
  width: ["80px"],
  height: ["80px"]
};

export const Name = styled(Box)`
  display: block;
`;

Name.defaultProps = {
  as: "span",
  mt: [2]
};
