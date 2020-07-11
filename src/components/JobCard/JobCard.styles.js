import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export const JobCard = styled(Box)`
  box-shadow: 2px 3px 3px #eee;
  border: 1px solid #efefef;
`;
JobCard.defaultProps = {
  bg: "white",
  py: [3],
  px: [4],
  mb: [3]
};

export const EmployerLogo = styled(Box)``;

EmployerLogo.defaultProps = {
  as: "img",
  width: ["80px"],
  pr: [3]
};

export const Wrapper = styled(Flex)`
  align-items: top;
  flex-wrap: wrap;
`;

Wrapper.defaultProps = {
  pb: [3]
};

export const JobInfo = styled(Box)``;

JobInfo.defaultProps = {};

export const DatePosted = styled(Box)`
  margin-left: auto;
  opacity: 0.7;
`;

DatePosted.defaultProps = {
  as: "span"
};

export const JobTitle = styled(Box)``;

JobTitle.defaultProps = {
  as: "h3",
  fontWeight: [6],
  fontSize: [4],
  mb: [1]
};

export const JobLocation = styled(Box)`
  opacity: 0.7;
`;

JobLocation.defaultProps = {
  as: "span",
  fontSize: [2]
};

export const JobDescription = styled(Box)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

JobDescription.defaultProps = {
  as: "p",
  mb: [3]
};

export const JobApplicantsNo = styled(Box)`
  opacity: 0.7;
  float: right;
`;

JobApplicantsNo.defaultProps = {
  as: "span"
};
