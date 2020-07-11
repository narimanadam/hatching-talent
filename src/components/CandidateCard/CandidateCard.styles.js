import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export const Card = styled(Box)`
  display: inline-block;
  text-align: center;
  box-shadow: 2px 3px 3px #eee;
  border: 1px solid #efefef;
  width: 100%;
`;

Card.defaultProps = {
  bg: "white",
  p: [4],
  mb: [3],
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
  height: ["100px"]
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
  as: "span",
  fontSize: [3]
};
