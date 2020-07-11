import React, { useEffect, useState } from "react";
import {
  JobBoxStyles,
  Title,
  CompanyInfo,
  Description
} from "../styles/JobBoxStyles";
import DefinitionList from "../components/DefinitionList";
import { Link } from "@reach/router";
import { GET_USER_INFO } from "../common/helpers/apiUrls";

const RecommendedJobBox = ({
  id,
  jobName,
  jobLocation,
  jobDesc,
  jobRole,
  employerId
}) => {
  const [employerInfo, setEmployerInfo] = useState({});

  const getUserInfo = () => {
    fetch(`${GET_USER_INFO}`, {
      method: "POST",
      headers: {
        userId: employerId
      }
    })
      .then(res => res.json())
      .then(data => setEmployerInfo(data[0]))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <JobBoxStyles>
      <Link
        to={`/job-details/${id}`}
        style={{ textDecoration: "none", color: "#333" }}
      >
        <Title>{jobName}</Title>
        <CompanyInfo>
          {employerInfo && employerInfo.first_name}
          {employerInfo && employerInfo.last_name} - {jobLocation}
        </CompanyInfo>
        <DefinitionList term="career level" desc={jobRole} />
        <Description>{jobDesc}</Description>
      </Link>
    </JobBoxStyles>
  );
};

export default RecommendedJobBox;
