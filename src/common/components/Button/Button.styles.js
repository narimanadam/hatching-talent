import styled from "@emotion/styled";
import { Box } from "reflexbox";

export const Button = styled(Box)`
  height: 40px;
  line-height: 30px;
  border: 2px solid;
  outline: 0;
  transition: 0.3s;
  cursor: pointer;
`;

Button.defaultProps = {
  as: "button",
  fontSize: ["16px"],
  px: [4],
  sx: {
    borderRadius: [2],
    ":disabled": {
      opacity: 0.5,
      cursor: "not-allowed"
    }
  }
};
