import styled from "@emotion/styled";
import { Box } from "reflexbox";

export const Button = styled(Box)`
  outline: 0;
  transition: 0.3s;
  cursor: pointer;
  border-radius: ${props => (props.notRounded ? 0 : props.theme.radii[3])}px;
`;

Button.defaultProps = {
  as: "button",
  fontSize: ["16px"],
  px: [4],
  sx: {
    ":disabled": {
      opacity: 0.5,
      cursor: "not-allowed"
    }
  }
};
