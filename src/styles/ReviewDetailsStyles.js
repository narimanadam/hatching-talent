import styled from "styled-components";

const ReviewDetailsStyles = styled.div`
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: none;
    border-bottom: none;
  }
  padding-bottom: 25px;
  padding-top: 25px;
  border-bottom: 1px solid #ddd;
`;

const CandidateImg = styled.img`
  width: 100px;
`;

const CandidateName = styled.p`
  font-size: 16px;
  margin-top: 5px;
  font-weight: bold;
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 25px;
`;

const Subtitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Body = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
`;

export {
  ReviewDetailsStyles,
  CandidateImg,
  CandidateName,
  Title,
  Subtitle,
  Body
};
