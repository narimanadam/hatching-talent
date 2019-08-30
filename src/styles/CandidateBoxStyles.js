import styled from "styled-components";

const CandidateBoxStyles = styled.div`
  background: ${props => props.theme.white};
  display: inline-block;
  margin-bottom: 15px;
  text-align: center;
  box-shadow: ${props => props.theme.boxShadow};
  width: 100%;
  padding: 25px;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const Title = styled.h3`
  margin-top: 15px;
  margin-bottom: 5px;
  font-size: 18px;
`;

const Body = styled.span`
  font-size: 16px;
`;

export { CandidateBoxStyles, Img, Title, Body };
