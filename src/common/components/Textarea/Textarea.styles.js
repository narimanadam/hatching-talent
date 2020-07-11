import styled from "@emotion/styled";
import { Box } from "reflexbox";

export const Textarea = styled(Box)`
  border: none;
  resize: none;
  width: 100%;
  :focus {
    box-shadow: none;
    outline: none;
  }
`;

Textarea.defaultProps = {
  as: "textarea",
  // bg: "white",
  fontSize: [3],
  pl: [3],
  pt: [2],
  height: ["150px"]
};
