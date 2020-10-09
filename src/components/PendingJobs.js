import React, { useState, useContext, useEffect } from "react";
import { GET_JOBS_URL } from "../common/helpers/apiUrls";
import AuthContext from "../common/context/AuthContext";
import JobStats from "../components/JobStats";
import Message from "../common/components/Message/Message";
import * as Styled from "../styles/gridStyle";
import JobCard from "./JobCard/";
import { JobCardsLoader } from "./job-cards-loader";
import Grid from "../common/components/Grid/Grid";

const PendingJobs = () => {
  useEffect(() => {
    fetch(`${GET_JOBS_URL}`, {
      method: "POST",
      headers: {
        employerId: AuthState.userID,
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
  const { AuthState } = useContext(AuthContext);

  return (
    <div>
      {/* (
        <Message
          text="You have no Active Jobs for now"
          type="default"
        ></Message>
      ) */}
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
                pending={true}
              />
            )
          )}
        </Grid>
      ) : (
        <JobCardsLoader />
      )}
    </div>
  );
};

export default PendingJobs;
