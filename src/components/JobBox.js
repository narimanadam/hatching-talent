import React, { useContext, useEffect, useState } from "react";
import {
  JobBoxStyles,
  Title,
  CompanyInfo,
  Description
} from "../styles/JobBoxStyles";
import DefinitionList from "../components/DefinitionList";
import { Link } from "@reach/router";
import { GET_USER_INFO } from "../helpers/apiUrls";

const JobBox = ({ id, jobName, jobLocation, jobDesc, jobRole, employerId }) => {
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
        to={`/jobs-overview/job-details/${id}`}
        style={{ textDecoration: "none", color: "#333" }}
      >
        <Title>{jobName}</Title>
        <CompanyInfo>{jobLocation}</CompanyInfo>
        <DefinitionList term="career level" desc={jobRole} />
        <Description>{jobDesc}</Description>
        {/* {authenticated.type === "Candidate" && (
          <ActionsList>
            <ActionsListItem>
              <Favorite>
                <FontAwesomeIcon icon={["far", "star"]} />
              </Favorite>
            </ActionsListItem>
            <ActionsListItem>
              <MainOutlineButton onClick={applyJob}>
                Apply to this Job
              </MainOutlineButton>
            </ActionsListItem>
          </ActionsList>
        )} */}
      </Link>
    </JobBoxStyles>
  );
};

export default JobBox;
