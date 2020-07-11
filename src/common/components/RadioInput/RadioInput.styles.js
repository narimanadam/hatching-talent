import styled from "@emotion/styled";
import { Box } from "reflexbox";

export const Heading = styled(Box)`
  text-transform: uppercase;
`;

Heading.defaultProps = {
  as: "p",
  my: [2],
  fontSize: [1],
  fontWeight: [6]
};

export const Field = styled.input`
  position: absolute;
  z-index: 2;
  display: inline-block;
  margin: auto;
  opacity: 0;
  vertical-align: middle;
`;

Field.defaultProps = {
  as: "input",
  width: ["20px"],
  height: ["20px;"],
  sx: {
    "&:checked + label:after": {
      opacity: "1"
    }
  }
};

export const Label = styled.label`
  position: relative;
  display: inline-block;
  top: 0;
  left: 0;
  z-index: 1;
  border-radius: 50%;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
    opacity: 0;
  }
`;

Label.defaultProps = {
  as: "label",
  bg: "white",
  width: ["20px"],
  height: ["20px"],
  mb: [2],
  sx: {
    ":after": {
      bg: "black",
      width: ["10px"],
      height: ["10px"]
    }
  }
};

export const Text = styled(Box)`
  display: inline-block;
  vertical-align: top;
`;

Text.defaultProps = {
  as: "span",
  ml: [2]
};
