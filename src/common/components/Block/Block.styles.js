import styled from "@emotion/styled";
import { Box } from "reflexbox";

export const Block = styled(Box)``;

Block.defaultProps = {
  py: [6]
};

export const Title = styled(Box)`
  text-align: center;
`;

Title.defaultProps = {
  as: "h3",
  mb: [6],
  fontSize: [8],
  fontWeight: [2]
};
