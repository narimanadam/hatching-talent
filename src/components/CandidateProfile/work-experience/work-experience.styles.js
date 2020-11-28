import styled from "@emotion/styled";
import { Box } from "reflexbox";

export const WorkExperienceItemStyles = styled(Box)`
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled(Box)`
  margin-bottom: 16px;
`;

export const Actions = styled(Box)``;

export const Info = styled(Box)``;

export const Dates = styled(Box)`
  font-weight: 500;
  margin-bottom: 4px;
`;

export const CompanyName = styled(Box)`
  font-weight: 500;
  margin-bottom: 8px;
`;

CompanyName.defaultProps = {
  as: "p"
};

export const Title = styled(Box)`
  font-size: 24px;
  margin-bottom: 8px;
`;
Title.defaultProps = {
  as: "h3"
};

export const NoticePeriod = styled(Box)`
  margin-bottom: 16px;
  font-weight: 500;
`;
NoticePeriod.defaultProps = {
  as: "p"
};

export const Desc = styled(Box)`
  font-size: 16px;
`;

Desc.defaultProps = {
  as: "p"
};
