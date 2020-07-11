import React from "react";
import * as Styled from "./JobThumbnail.styles";

const JobThumbnail = ({ jobTitle, jobDesc, noOfApplicants, closeJob }) => {
  return (
    <Styled.Thumbnail>
      <Styled.Title>{jobTitle}</Styled.Title>
    </Styled.Thumbnail>
  );
};

export default JobThumbnail;
