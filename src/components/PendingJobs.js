import React, { useState, useContext, useEffect } from "react";
import { GET_JOBS_URL } from "../helpers/apiUrls";
import AuthContext from "../context/AuthContext";
import NotMatching from "../components/NotMatching";
import JobStats from "../components/JobStats";

const PendingJobs = () => {
  useEffect(() => {
    fetch(`${GET_JOBS_URL}`, {
      method: "POST",
      headers: {
        employerId: authenticated.userID,
        jobStatus: "Pending"
      }
    })
      .then(response => response.json())
      .then(data => {
        setJobs(data);
      })
      .catch(error => console.log(error));
  }, []);

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
          pending="true"
        />
      ))}
    </div>
  );
};

export default PendingJobs;
