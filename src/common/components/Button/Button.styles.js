import styled from "@emotion/styled";
import { Box } from "reflexbox";

export const Button = styled(Box)`
  height: 40px;
  line-height: 30px;
  outline: 0;
  transition: 0.3s;
  cursor: pointer;
`;

Button.defaultProps = {
  as: "button",
  fontSize: ["16px"],
  px: [4],
  sx: {
    borderRadius: [3],
    ":disabled": {
      opacity: 0.5,
      cursor: "not-allowed"
    }
  }
};
