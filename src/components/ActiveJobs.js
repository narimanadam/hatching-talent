import React, { useState, useContext, useEffect } from "react";
import { GET_JOBS_URL, UPDATE_JOB_URL } from "../helpers/apiUrls";
import AuthContext from "../context/AuthContext";
import NotMatching from "../components/NotMatching";
import JobStats from "../components/JobStats";

const ActiveJobs = () => {
  useEffect(() => {
    fetch(`${GET_JOBS_URL}`, {
      method: "POST",
      headers: {
        employerId: authenticated.userID,
        jobStatus: "Active"
      }
    })
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.log(error));
  }, []);

  const CloseJob = jobId => {
    fetch(`${UPDATE_JOB_URL}`, {
      method: "POST",
      headers: {
        status: "Closed",
        jobId: jobId
      }
    })
      .then(res => res.json())
      .then(data => {
        window.location.reload();
      })
      .catch(error => console.log(error));
  };

  const [jobs, setJobs] = useState([]);
  const [authenticated] = useContext(AuthContext);

  return (
    <div>
      {!jobs.length && (
        <NotMatching message="You have no Active Jobs for now"></NotMatching>
      )}
      {jobs.map(job => (
        <JobStats
          name={job.job_name}
          desc={job.job_description}
          applicants={job.applicants_no}
          closeJob={CloseJob.bind(this, job.job_id)}
          lengthofJobs={jobs.length}
        />
      ))}
    </div>
  );
};

export default ActiveJobs;
