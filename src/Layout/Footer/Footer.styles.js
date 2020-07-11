import styled from "@emotion/styled";
import { Box } from "reflexbox";

export const Footer = styled(Box)`
  position: relative;
  width: 100%;
  text-align: center;
  overflow: hidden;
  :after {
    content: "";
    position: absolute;
    top: -100%;
    left: -50%;
    width: 100%;
    height: 200%;
    border-radius: 60%;
    opacity: 0.1;
  }
`;

Footer.defaultProps = {
  as: "footer",
  bg: "black",
  sx: {
    ":after": {
      bg: "darkGray"
    }
  }
};

export const List = styled(Box)`
  position: relative;
  z-index: 9;
`;

List.defaultProps = {
  as: "ul",
  py: [6]
};

export const ListHeading = styled(Box)`
  text-align: left;
`;

ListHeading.defaultProps = {
  as: "h3",
  fontWeight: [6],
  fontSize: [3],
  mb: [3],
  color: "white"
};

export const ListItem = styled(Box)`
  text-align: left;
  cursor: pointer;

  & > a {
    text-decoration: none;
  }
`;

ListItem.defaultProps = {
  as: "li",
  color: "white",
  mb: [2],
  sx: {
    ":nth-last-of-type": {
      mb: [0]
    },
    "& > a": {
      color: "white"
    }
  }
};

export const Copyrights = styled(Box)``;

Copyrights.defaultProps = {
  as: "p",
  bg: "black",
  color: "white",
  fontSize: [2],
  py: [5]
};
