import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export const Card = styled(Box)`
  box-shadow: 2px 3px 3px #eee;
  border: 1px solid #efefef;
`;
Card.defaultProps = {
  bg: "white",
  py: [3],
  px: [4],
  mb: [3]
};

export const ImgWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
`;
ImgWrapper.defaultProps = {};

export const Img = styled(Box)``;
Img.defaultProps = {
  as: "img",
  width: 80,
  pr: [3]
};

export const Wrapper = styled(Flex)`
  align-items: top;
  flex-wrap: wrap;
`;
Wrapper.defaultProps = {
  pb: [3]
};

export const Info = styled(Box)``;
Info.defaultProps = {};

export const DatePosted = styled(Box)`
  margin-left: auto;
  opacity: 0.7;
`;
DatePosted.defaultProps = {
  as: "span"
};

export const Title = styled(Box)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
Title.defaultProps = {
  as: "h3",
  fontWeight: [6],
  fontSize: [3],
  mb: [1],
  width: 210
};

export const Location = styled(Box)`
  opacity: 0.7;
`;
Location.defaultProps = {
  as: "span",
  fontSize: [2]
};

export const Description = styled(Box)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
`;
Description.defaultProps = {
  as: "p",
  mb: [3]
};

export const ApplicantsNo = styled(Box)`
  opacity: 0.7;
  float: right;
`;
ApplicantsNo.defaultProps = {
  as: "span"
};
