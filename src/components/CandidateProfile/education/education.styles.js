import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export const EducationItemStyled = styled(Flex)`
  justify-content: space-between;
  align-items: flex-start;
`;
EducationItemStyled.defaultProps = {
  mb: 4
};

export const Degree = styled(Box)`
  &::first-letter {
    text-transform: capitalize;
  }
`;
Degree.defaultProps = {
  as: "h3",
  mb: 1
};

export const SchoolName = styled(Box)`
  &::first-letter {
    text-transform: capitalize;
  }
`;
SchoolName.defaultProps = {
  as: "p",
  fontSize: 5,
  mb: 2
};

export const GraduationYear = styled.p``;
GraduationYear.defaultProps = {
  as: "p",
  fontWeight: 4,
  fontSize: 4,
  mb: 1
};

export const Grade = styled(Box)`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;
Grade.defaultProps = {
  as: "p",
  fontSize: 4,
  fontWeight: 4,
  mb: 1
};

export const Desc = styled(Box)`
  &::first-letter {
    text-transform: capitalize;
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
