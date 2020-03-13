import styled from "styled-components";

const CoursesAndCertificationItemStyles = styled.div`
  display: flex;
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid ${props => props.theme.grey};
`;
const CourseName = styled.h3`
  margin-bottom: 5px;
`;
const SchoolName = styled.p`
  margin-bottom: 5px;
  font-weight: 500;
`;

const GradYear = styled.p`
  margin-bottom: 10px;
`;

const Desc = styled.p`
  &:first-letter {
    text-transform: uppercase;
  }
`;

const Info = styled.div`
  flex: 6;
`;

const Actions = styled.div`
  flex: 1;
`;

export {
  CoursesAndCertificationItemStyles,
  CourseName,
  SchoolName,
  Desc,
  Info,
  Actions,
  GradYear
};
