import styled from "styled-components";

const CandidateStatsStyles = styled.div`
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.lightGray};
  padding: 15px 20px;
  box-shadow: ${props => props.theme.boxShadow};
`;

const Icon = styled.img``;

const Number = styled.span`
  display: block;
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const Text = styled.span`
  display: block;
  font-size: 16px;
`;

export { CandidateStatsStyles, Icon, Number, Text };
