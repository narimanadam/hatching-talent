import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-grid-system";
import JobThumbnail from "./JobThumbnail";
import JobResultsDetails from "./Tabs/JobResultsDetails";
import {
  InlineList,
  InlineListItem,
  InlineListIcon
} from "../styles/ListStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../styles/Button";
import {
  SEARCH_JOBS,
  APPLY_SAVE_JOB,
  GET_USER_INFO
} from "../common/helpers/apiUrls";
import AuthContext from "../common/context/AuthContext";

const JobResults = () => {
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState({});
  const { AuthState } = useContext(AuthContext);
  const handleJobThumbnailClick = itemIndex => {
    setCurrentJob(jobs[itemIndex]);
  };

  useEffect(() => {
    fetch(`${SEARCH_JOBS}`, {
      method: "POST",
      headers: {
        keyWord: AuthState.jobTitle,
        jobLocation: "",
        jobIndustry: ""
      }
    })
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setCurrentJob(data[0] || []);
      })
      .catch(error => console.log(error));
  }, []);

  const applyJob = () => {
    fetch(`${APPLY_SAVE_JOB}`, {
      method: "POST",
      headers: {
        jobId: currentJob.job_id,
        userId: AuthState.userID,
        action: "apply"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  return (
    <Row style={{ marginTop: "50px", marginBottom: "50px" }}>
      <>
        <Col md={4}>
          <h3>Jobs</h3>
          {jobs.map((job, index) => (
            <JobThumbnail
              key={job.job_id}
              name={job.job_name}
              description={job.job_description}
              jobLocation={job.location}
              employerId={job.employer_id}
              handleJobThumbnailClick={handleJobThumbnailClick.bind(
                this,
                index
              )}
            >
              {job.job_name}
            </JobThumbnail>
          ))}
        </Col>
        <Col md={8} align="left">
          <Row>
            <Col md={6}>
              <h3>{currentJob.job_name}</h3>
            </Col>
            <Col md={6} align="right">
              <InlineList>
                {/* <InlineListItem center>
                      <InlineListIcon>
                        <FontAwesomeIcon className="" icon={["far", "heart"]} />
                      </InlineListIcon>
                      <p>Favourite</p>
                    </InlineListItem> */}
                <InlineListItem center>
                  <Button onClick={applyJob}>
                    <InlineListIcon>
                      <FontAwesomeIcon icon={["far", "share-square"]} />
                    </InlineListIcon>
                    <span>Apply</span>
                  </Button>
                </InlineListItem>
              </InlineList>
            </Col>
          </Row>
          <JobResultsDetails currentJob={currentJob} />
        </Col>
      </>
    </Row>
  );
};

export default JobResults;
