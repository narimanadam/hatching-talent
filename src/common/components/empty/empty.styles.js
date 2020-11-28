import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export const Empty = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${props => props.theme.shadows.Modal};
`;
Empty.defaultProps = {
  bg: "white",
  py: [5]
};

export const Img = styled(Box)``;
Img.defaultProps = {
  as: "img",
  height: 100,
  mb: [4]
};

export const Label = styled(Box)``;
Label.defaultProps = {
  as: "p",
  fontSize: [4, 5],
  color: "black"
};
