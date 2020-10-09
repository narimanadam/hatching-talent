import styled from "@emotion/styled";
import { Flex, Box } from "reflexbox";

export const Header = styled(Flex)`
  background: linear-gradient(to right, #f7ac06, #ffc544);
  justify-content: space-between;
  align-items: center;
`;

Header.defaultProps = {
  as: "header",
  px: [7],
  height: 70
};

export const Navigation = styled.nav`
  background: linear-gradient(to right, #f7ac06, #ffc544);
`;

export const List = styled(Flex)`
  align-items: center;
  height: 100%;
`;

export const Link = styled(Box)`
  position: relative;
  display: inline-block;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 0;
    margin: auto;
    transition: 0.3s;
  }
  :hover:after {
    width: 100%;
  }
`;

Link.defaultProps = {
  as: "a",
  color: "white",
  mr: [4],
  pb: [2],
  fontSize: [4],
  sx: {
    ":after": {
      bg: "white",
      height: ["3px"]
    },
    "& > a": {
      color: "white"
    },
    "nth-last-of-type": {
      mr: [0]
    }
  }
};

export const Logo = styled(Box)``;
Logo.defaultProps = {
  as: "img",
  height: 30
};
