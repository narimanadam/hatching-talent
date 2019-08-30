import React from "react";
import {
  ProgressBarStyles,
  ProgressBarTrack,
  ProgressBarThumb,
  ProgressText
} from "../styles/ProgressBarStyles";

function ProgressBar({ value }) {
  return (
    <ProgressBarStyles>
      <ProgressBarTrack />
      <ProgressBarThumb progress={value}>
        <ProgressText>{value}%</ProgressText>
      </ProgressBarThumb>
    </ProgressBarStyles>
  );
}

export default ProgressBar;
