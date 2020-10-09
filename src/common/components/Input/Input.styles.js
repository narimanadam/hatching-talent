import styled from "@emotion/styled";
import { Box } from "reflexbox";

export const Input = styled(Box)`
  width: 100%;
  outline: none;
  :focus {
    box-shadow: none;
    outline: none;
  }
`;

Input.defaultProps = {
  as: "input",
  height: ["40px"],
  lineHeight: ["40px"],
  pl: [3],
  fontSize: [3],
  // bg: "white",
  sx: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "lightGray"
  }
};
