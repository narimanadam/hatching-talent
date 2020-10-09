import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export const Card = styled(Flex)`
  flex-direction: column;
  align-items: center;
`;

Card.defaultProps = {
  bg: "lightGray",
  p: [4],
  pt: 0,
  mb: [3],
  mt: 35,
  sx: {
    borderRadius: [3]
  }
};

export const Img = styled(Box)`
  border-radius: 50%;
`;

Img.defaultProps = {
  as: "img",
  width: ["100px"],
  height: ["100px"],
  mt: ["-50px"]
};

export const Title = styled(Box)``;

Title.defaultProps = {
  as: "h3",
  mt: [3],
  mb: [1],
  fontSize: [4]
};

export const Body = styled(Box)``;

Body.defaultProps = {
  as: "p",
  fontSize: [3],
  mb: 4
};
