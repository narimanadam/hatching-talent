import styled from "@emotion/styled";
import { Flex, Box } from "reflexbox";

export const JobThumbnail = styled(Flex)`
  align-items: center;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

JobThumbnail.defaultProps = {
  p: 3,
  bg: "white",
  mb: 3,
  sx: {
    borderRadius: 2
  }
};

export const ImgWrapper = styled(Box)`
  display: inline-block;
  vertical-align: middle;
`;
ImgWrapper.defaultProps = {
  pr: 3
};

export const Img = styled(Box)``;
Img.defaultProps = {
  as: "img",
  width: 60
};

export const Info = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
`;
Info.defaultProps = {};

export const JobTitle = styled(Box)`
  display: block;
`;
JobTitle.defaultProps = {
  as: "h3",
  fontSize: 3,
  fontWeight: 5,
  mb: 2
};

export const CompanyName = styled(Flex)`
  display: block;
  text-transform: uppercase;
`;
CompanyName.defaultProps = {
  as: "p",
  fontSize: 1,
  fontWeight: 4
};

export const JobLocation = styled(Box)``;
JobLocation.defaultProps = {
  as: "p",
  fontSize: 2,
  fontWeight: 5
};
