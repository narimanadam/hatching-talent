import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-grid-system";
import {
  EmployerLogo,
  EmployerName,
  Jobtitle,
  JobLevel,
  JobDesc
} from "../styles/JobDetails";
import { InlineList, InlineListItem } from "../styles/ListStyle";
import { MainOutlineButton, MainButton } from "../styles/Button";
import {
  PENDING_JOBS_URL,
  UPDATE_JOB_URL,
  SEARCH_JOBS,
  APPLY_SAVE_JOB
} from "../helpers/apiUrls";
import AuthContext from "../context/AuthContext";
import { navigate } from "@reach/router";

const JobDetailsPage = props => {
  const [job, setJob] = useState({});
  const [authenticated] = useContext(AuthContext);

  useEffect(() => {
    // GET: Job Details
    fetch(`${PENDING_JOBS_URL}`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(data => {
        let targetJob = data.filter(job => job.job_id == props.id);
        setJob(targetJob[0]);
      })
      .catch(error => console.log(error));
  }, []);

  const ApproveJob = () => {
    fetch(`${UPDATE_JOB_URL}`, {
      method: "POST",
      headers: {
        jobId: job.job_id,
        status: "Active"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data[0].value === "Ok") {
          navigate("/jobs-overview");
        }
      })
      .catch(error => console.log(error));
  };
  const RejectJob = () => {
    fetch(`${UPDATE_JOB_URL}`, {
      method: "POST",
      headers: {
        jobId: job.job_id,
        status: "Rejected"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data[0].value === "Ok") {
          navigate("/jobs-overview");
        }
      })
      .catch(error => console.log(error));
  };

  const applyJob = () => {
    fetch(`${APPLY_SAVE_JOB}`, {
      method: "POST",
      headers: {
        jobId: job.job_id,
        userId: authenticated.userID,
        action: "apply"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col sm={3}>
          <EmployerLogo
            src="https://freemuse.org/wp-content/uploads/2017/06/mbc-logo-590x300.jpg"
            alt=""
          />
          <EmployerName>MBC</EmployerName>
        </Col>
        <Col sm={9}>
          <Jobtitle>{job.job_name}</Jobtitle>
          <JobLevel>{job.role}</JobLevel>
          <JobDesc>{job.job_description}</JobDesc>
        </Col>
        {authenticated.type === "Candidate" && (
          <InlineList>
            <InlineListItem>
              <MainOutlineButton onClick={applyJob}>
                Apply to this job
              </MainOutlineButton>
            </InlineListItem>
          </InlineList>
        )}
        {authenticated.type === "Admin" && (
          <InlineList>
            <InlineListItem>
              <MainButton onClick={ApproveJob}>Approve</MainButton>
            </InlineListItem>
            <InlineListItem>
              <MainOutlineButton onClick={RejectJob}>Reject</MainOutlineButton>
            </InlineListItem>
          </InlineList>
        )}
      </Row>
    </Container>
  );
};

export default JobDetailsPage;
