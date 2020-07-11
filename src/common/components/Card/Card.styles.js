import styled from "@emotion/styled";
import { Flex, Box } from "reflexbox";

export const Wrapper = styled(Box)``;
Wrapper.defaultProps = {
  sx: {
    display: "grid",
    gridTemplateColumns: ["repeat(3, 1fr)"],
    gridGap: ["20px"]
  }
};

export const Card = styled(Box)`
  border: 1px solid #efefef;
  box-shadow: 2px 3px 3px #eee;
`;

Card.defaultProps = {};

export const ImgWrapper = styled(Box)``;

ImgWrapper.defaultProps = {
  height: ["250px"]
};

export const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export const Info = styled(Box)`
  :after {
    content: "";
    clear: both;
    display: block;
  }
`;

Info.defaultProps = {
  bg: "white",
  py: [4],
  px: [3]
};

export const Title = styled(Box)`
  text-align: left;
  text-decoration: none;
  :focus,
  :hover,
  :visited,
  :link,
  :active {
    text-decoration: none;
  }
  :first-letter {
    text-transform: uppercase;
  }
`;

Title.defaultProps = {
  as: "h3",
  mb: [3],
  color: "black"
};

export const Body = styled(Box)`
  text-align: left;
  text-decoration: none;
`;

Body.defaultProps = {
  as: "p",
  mb: [5],
  color: "black"
};

export const Actions = styled(Flex)`
  justify-content: space-between;
`;

Actions.defaultProps = {};

export const Link = styled(Box)``;

Link.defaultProps = {
  as: "span",
  color: "main",
  fontSize: [2],
  fontWeight: [6]
};

export const Views = styled(Box)`
  text-decoration: none;
`;

Views.defaultProps = {
  as: "span",
  color: "black"
};
