import styled from "@emotion/styled";
import { Box } from "reflexbox";

export const Badge = styled(Box)`
  display: inline-block;
`;

Badge.defaultProps = {
  as: "span",
  py: [1],
  px: [2],
  fontSize: [2],
  mr: [2],
  fontWeight: [6],
  sx: {
    borderRadius: [2]
  }
};
