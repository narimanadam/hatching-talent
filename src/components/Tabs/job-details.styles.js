import styled from "@emotion/styled";
import { Flex, Box } from "reflexbox";
export const Wrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
`;

Wrapper.defaultProps = {
  mb: 3
};

export const Img = styled(Box)``;
Img.defaultProps = {
  as: "img",
  width: 80
};

export const CompanyName = styled(Box)``;
CompanyName.defaultProps = {
  as: "h3",
  mt: 2
};

export const JobTitle = styled(Box)``;
JobTitle.defaultProps = {
  as: "h3",
  fontSize: 4,
  fontWeight: 6
};

export const JobLocation = styled(Box)``;
JobLocation.defaultProps = {
  as: "p"
};

export const Separator = styled(Box)``;
Separator.defaultProps = {
  bg: "lightGray",
  height: 1,
  width: 400,
  margin: "auto",
  mt: 3,
  mb: 3
};

export const Heading = styled(Box)``;
Heading.defaultProps = {
  as: "h3",
  mb: 1,
  fontSize: 4,
  fontWeight: 6
};

export const Description = styled(Box)``;
Description.defaultProps = {
  as: "p",
  mb: 3
};
