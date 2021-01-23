import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export const HeroBanner = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: -webkit-linear-gradient(
    to right,
    #f7ac06,
    #ffc544
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #f7ac06, #ffc544);
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    top: 10%;
    left: -50%;
    width: 100%;
    height: 200%;
    border-radius: 60%;
    opacity: 0.5;
  }
`;

HeroBanner.defaultProps = {
  bg: "main",
  py: [5],
  sx: {
    ":after": {
      bg: "main"
    }
  }
};

export const Wrapper = styled.div``;

export const Content = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 999;
  text-align: center;
`;

Content.defaultProps = {
  pl: [7]
};

export const Heading = styled(Box)`
  text-align: left;
`;

Heading.defaultProps = {
  fontSize: [9],
  fontWeight: [3],
  mb: [3],
  color: "white",
  lineHeight: ["70px"]
};

export const Desc = styled(Box)`
  text-align: left;
`;

Desc.defaultProps = {
  as: "p",
  mb: [3],
  color: "white"
};

export const Img = styled(Box)`
  width: 600px;
`;

Img.defaultProps = {
  as: "img",
  width: ["600px"]
};
