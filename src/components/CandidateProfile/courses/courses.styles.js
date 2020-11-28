import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export const CoursesAndCertificationItemStyles = styled(Flex)`
  justify-content: space-between;
  align-items: flex-start;
`;
CoursesAndCertificationItemStyles.defaultProps = {
  mb: 4
};

export const CourseName = styled(Box)``;
CourseName.defaultProps = {
  as: "h3",
  mb: 1,
  fontSize: 5
};

export const SchoolName = styled(Box)``;
SchoolName.defaultProps = {
  as: "p",
  mb: 1,
  fontWeight: 4
};

export const GradYear = styled(Box)``;

GradYear.defaultProps = {
  as: "p",
  mb: 2
};

export const Desc = styled(Box)`
  &:first-letter {
    text-transform: uppercase;
  }
`;
Desc.defaultProps = {
  as: "p"
};

export const Info = styled(Box)`
  flex: 6;
`;

export const Actions = styled(Box)`
  flex: 1;
`;
