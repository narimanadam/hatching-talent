import React from "react";
import { Link } from "@reach/router";
import { Box } from "reflexbox";

import Badge from "../../common/components/Badge";
import * as Styled from "./JobCard.styles";

const JobCard = ({
  jobTitle,
  jobType,
  jobId,
  jobLocation,
  jobDesc,
  jobRole,
  jobIndustry,
  closeJob,
  noOfApplicants
}) => {
  return (
    <Styled.Card>
      <Link
        to={`/jobs-overview/job-details/${jobType}/${jobId}`}
        style={{ textDecoration: "none", color: "#333" }}
      >
        <Styled.Wrapper>
          <Styled.ImgWrapper>
            <Styled.Img src="https://freemuse.org/wp-content/uploads/2017/06/mbc-logo-590x300.jpg" />
          </Styled.ImgWrapper>
          <Box>
            <Styled.Title>{jobTitle}</Styled.Title>
            <Styled.Location>{jobLocation}</Styled.Location>
          </Box>
          <Styled.DatePosted>23.1.2020</Styled.DatePosted>
        </Styled.Wrapper>
        <Styled.Description>{jobDesc}</Styled.Description>
        <Badge text={jobRole} variant="JobRoleBadge" />
        <Badge text={jobIndustry} variant="jobIndustryBadge" />
        <Styled.ApplicantsNo>{noOfApplicants} Applicants</Styled.ApplicantsNo>
      </Link>
    </Styled.Card>
  );
};

export default JobCard;
