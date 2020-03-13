import React from "react";
import {
  CandidateStatsStyles,
  Icon,
  Number,
  Text
} from "../styles/CandidateStatsStyles";

const CandidateStats = ({ icon, number, text }) => {
  return (
    <CandidateStatsStyles>
      <Icon src={icon} alt={text} />
      <Number>{number}</Number>
      <Text>{text}</Text>
    </CandidateStatsStyles>
  );
};

export default CandidateStats;
