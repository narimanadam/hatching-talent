import React, { useState, useContext, useEffect } from "react";
import { GET_JOBS_URL, UPDATE_JOB_URL } from "../common/helpers/apiUrls";
import AuthContext from "../common/context/AuthContext";
import JobCard from "./JobCard";
import { JobCardsLoader } from "./job-cards-loader";
import Grid from "../common/components/Grid/Grid";
import Empty from "../common/components/empty";

const EmployerJobs = ({ type }) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { AuthState } = useContext(AuthContext);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${GET_JOBS_URL}`, {
      method: "POST",
      headers: {
        employerId: AuthState.userID,
        jobStatus: type
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          setJobs(data);
          setIsLoading(false);
        }
      })
      .catch(error => console.log(error));
  }, [type]);

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

  if (isLoading) return <JobCardsLoader />;

  return (
    <>
      {jobs.length ? (
        <Grid columns={3}>
          {jobs.map(
            ({
              job_name,
              job_description,
              applicants_no,
              job_id,
              location,
              industry,
              role
            }) => (
              <JobCard
                jobTitle={job_name}
                jobLocation={location}
                jobDesc={job_description}
                noOfApplicants={applicants_no}
                jobIndustry={industry}
                jobId={job_id}
                jobRole={role}
                jobType={type}
                // pending={true}
                // closeJob={() => CloseJob(job_id)}
                key={job_id}
              />
            )
          )}
        </Grid>
      ) : (
        <Empty label={`You have no ${type} Jobs for now`} />
      )}
    </>
  );
};

export default EmployerJobs;
