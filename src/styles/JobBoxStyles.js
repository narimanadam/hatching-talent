import styled from "styled-components";
import { Button } from "../styles/Button";

const JobBoxStyles = styled.div`
  background: ${props => props.theme.lightGray};
  padding: 15px;
  margin-bottom: 15px;
  width: 100%;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h3`
  font-size: 18px;
`;

const CompanyInfo = styled.p`
  color: #73a916;
  font-weight: 500;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-top: 20px;
`;

const ActionsList = styled.ul`
  margin-top: 20px;
  display: block;
  text-align: right;
`;

const ActionsListItem = styled.li`
  display: inline-block;
  margin: 0 10px;
`;

const Share = styled(Button)`
  font-size: 24px;
  padding: 0;
  color: ${props => props.theme.darkGray};
`;

const Favorite = styled(Button)`
  font-size: 24px;
  padding: 0;
  color: ${props => props.theme.darkGray};
`;

export {
  JobBoxStyles,
  Title,
  CompanyInfo,
  Description,
  ActionsList,
  ActionsListItem,
  Share,
  Favorite
};
