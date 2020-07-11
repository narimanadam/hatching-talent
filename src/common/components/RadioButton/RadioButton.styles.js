import styled from "@emotion/styled";
import { Box } from "reflexbox";

export const Heading = styled(Box)`
  display: block;
  text-transform: uppercase;
`;

Heading.defaultProps = {
  as: "label",
  my: [2],
  fontSize: [1],
  fontWeight: [6]
};

export const Field = styled(Box)`
  position: relative;
  z-index: 2;
  max-width: 100%;
  opacity: 0;
`;

Field.defaultProps = {
  as: "input",
  width: ["100px"],
  height: ["30px"],
  sx: {
    "&:checked + label": {
      bg: "main",
      color: "white"
    },

    "&:checked ~ span": {
      color: "white"
    }
  }
};

export const Label = styled(Box)`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s;
`;

Label.defaultProps = {
  as: "label",
  bg: "white"
};

export const Text = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  transition: 0.3s;
`;

Text.defaultProps = {
  as: "span",
  lineHeight: ["30px"],
  fontSize: [2]
};
