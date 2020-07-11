import React, { useState, useContext, useEffect } from "react";
import { GET_JOBS_URL } from "../common/helpers/apiUrls";
import AuthContext from "../common/context/AuthContext";
import JobStats from "../components/JobStats";
import Message from "../common/components/Message/Message";
import * as Styled from "../styles/gridStyle";
import JobCard from "./JobCard/";

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
      {!jobs.length && (
        <Message
          text="You have no Active Jobs for now"
          type="default"
        ></Message>
      )}
      <Styled.Grid>
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
              jobRole={role}
              pending={true}
            />
          )
        )}
      </Styled.Grid>
    </div>
  );
};

export default PendingJobs;
