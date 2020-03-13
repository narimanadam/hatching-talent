import styled from "styled-components";

const WorkExperienceItemStyles = styled.div`
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid ${props => props.theme.grey};
`;

const Wrapper = styled.div`
  display: flex;
`;

const Actions = styled.div`
  flex: 1;
`;

const Info = styled.div`
  flex: 2;
`;

const Dates = styled.div`
  flex: 2;
  font-weight: 500;
`;

const CompanyName = styled.p`
  font-weight: 500;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 5px;
`;

const NoticePeriod = styled.p`
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 500;
`;

const Desc = styled.p`
  font-size: 16px;
`;

export {
  WorkExperienceItemStyles,
  Title,
  Desc,
  Wrapper,
  Info,
  Dates,
  NoticePeriod,
  CompanyName,
  Actions
};
