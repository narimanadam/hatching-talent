import React, { useState, useEffect } from "react";
import { Container, Row } from "react-grid-system";
import JobBox from "../components/JobBox";
import { PENDING_JOBS_URL } from "../helpers/apiUrls";
import Message from "../components/Message";

const AdminJobOverview = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`${PENDING_JOBS_URL}`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        console.log(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        {!jobs.length && (
          <Message text="Good Job You have no jobs to approve for now." />
        )}
        {jobs.map(job => (
          <JobBox
            jobName={job.job_name}
            id={job.job_id}
            key={job.job_id}
            jobLocation={job.location}
            jobDesc={job.job_description}
            jobRole={job.role}
            // employerId={job.employer_id}
          />
        ))}
      </Row>
    </Container>
  );
};

export default AdminJobOverview;
