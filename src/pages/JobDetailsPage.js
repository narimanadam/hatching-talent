import React, { useState, useEffect, useContext } from "react";

import {
  PENDING_JOBS_URL,
  UPDATE_JOB_URL,
  APPLY_SAVE_JOB
} from "../common/helpers/apiUrls";
import AuthContext from "../common/context/AuthContext";
import { navigate } from "@reach/router";
import JobDetails from "../components/JobDetails/JobDetails";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";

const JobDetailsPage = props => {
  const [job, setJob] = useState({});
  const { AuthState } = useContext(AuthContext);

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

  const ApplyJob = () => {
    fetch(`${APPLY_SAVE_JOB}`, {
      method: "POST",
      headers: {
        jobId: job.job_id,
        userId: AuthState.userID,
        action: "apply"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  if (!job) return;
  return (
    <>
      {job && (
        <JobDetails
          jobTitle={job.job_name}
          jobLevel={job.role}
          jobDesc={job.job_description}
          approveJob={ApproveJob}
          rejectJob={RejectJob}
          applyJob={ApplyJob}
        />
      )}
    </>
  );
};

export default WithSidebarLayout(JobDetailsPage);
