import styled from "styled-components";

const EducationItemStyled = styled.div`
  display: flex;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid ${props => props.theme.gray};
`;

const Degree = styled.h3`
  margin-bottom: 5px;
  &::first-letter {
    text-transform: capitalize;
  }
`;

const SchoolName = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  &::first-letter {
    text-transform: capitalize;
  }
`;

const GraduationYear = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 5px;
`;

const Grade = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  &::first-letter {
    text-transform: capitalize;
  }
`;

const Info = styled.div`
  flex: 6;
`;

const Actions = styled.div`
  flex: 1;
`;

export {
  EducationItemStyled,
  Degree,
  SchoolName,
  GraduationYear,
  Grade,
  Desc,
  Info,
  Actions
};
