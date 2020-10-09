import styled from "@emotion/styled";
import { Flex, Box } from "reflexbox";

export const Sidebar = styled(Flex)`
  flex-direction: column;
  position: relative;
  z-index: 999;

  height: 100%;
  border-right: 1px solid #efefef;
`;

Sidebar.defaultProps = {
  bg: "white",
  width: ["265px", "100%", null]
};

export const Logo = styled(Box)``;

Logo.defaultProps = {
  as: "img",
  width: "200px",
  my: [5],
  pl: [4]
};

export const Item = styled(Box)`
  display: block;
  position: relative;

  & > a:after {
    content: "";
    left: 0;
    position: absolute;
  }
  &.logout-button {
    cursor: pointer;
  }
`;

Item.defaultProps = {
  as: "span",
  py: [2],
  pl: [4],
  fontWeight: [5],
  sx: {
    "> a:after": {
      bg: "main",
      width: [0],
      height: ["100%"]
    },
    "> a": {
      color: "black"
    },

    ">a.active:after": {
      width: ["5px"]
    },
    "&.logout-button": {
      mt: "auto",
      mb: "24px"
    }
  }
};
