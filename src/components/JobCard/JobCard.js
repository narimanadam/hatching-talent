import React from "react";
import { Link } from "@reach/router";
import Badge from "../../common/components/Badge";
import * as Styled from "./JobCard.styles";

const JobCard = ({
  jobTitle,
  jobId,
  jobLocation,
  jobDesc,
  jobRole,
  jobIndustry,
  closeJob,
  noOfApplicants
}) => {
  return (
    <Styled.JobCard>
      <Link
        to={`/jobs-overview/job-details/${jobId}`}
        style={{ textDecoration: "none", color: "#333" }}
      >
        <Styled.Wrapper>
          <Styled.EmployerLogo src="https://freemuse.org/wp-content/uploads/2017/06/mbc-logo-590x300.jpg" />
          <Styled.JobInfo>
            <Styled.JobTitle>{jobTitle}</Styled.JobTitle>
            <Styled.JobLocation>{jobLocation}</Styled.JobLocation>
          </Styled.JobInfo>
          <Styled.DatePosted>23.1.2020</Styled.DatePosted>
        </Styled.Wrapper>
        <Styled.JobDescription>{jobDesc}</Styled.JobDescription>
        <Badge text={jobRole} variant="JobRoleBadge" />
        <Badge text={jobIndustry} variant="jobIndustryBadge" />

        {/* {noOfApplicants && ( */}
        <Styled.JobApplicantsNo>
          {noOfApplicants} Applicants
        </Styled.JobApplicantsNo>
        {/* )} */}
      </Link>
    </Styled.JobCard>
  );
};

export default JobCard;
