import React, { useState, useEffect, useContext } from "react";

import {
  PENDING_JOBS_URL,
  UPDATE_JOB_URL,
  APPLY_SAVE_JOB,
  GET_JOBS_URL
} from "../common/helpers/apiUrls";
import AuthContext from "../common/context/AuthContext";
import { navigate } from "@reach/router";
import JobDetails from "../components/JobDetails/JobDetails";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";
import useUserType from "../common/utils/UserTypes";

const JobDetailsPage = ({ id, type }) => {
  const [job, setJob] = useState({});
  const { AuthState } = useContext(AuthContext);
  const { isEmployer } = useUserType();

  useEffect(() => {
    if (isEmployer) {
      // GET: Job Details
      fetch(`${GET_JOBS_URL}`, {
        method: "POST",
        headers: {
          employerId: AuthState.userID,
          jobStatus: type
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data) {
            let targetJob = data.filter(({ job_id }) => job_id === +id)[0];
            setJob(targetJob);
          }
        })
        .catch(error => console.log(error));
    } else {
      fetch(`${PENDING_JOBS_URL}`, {
        method: "POST"
      })
        .then(res => res.json())
        .then(data => {
          let targetJob = data.filter(job => job.job_id === +id);
          setJob(targetJob[0]);
        })
        .catch(error => console.log(error));
    }
  }, []);

  // useEffect(() => {
  //   // GET: Job Details

  // }, []);

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

  if (!job) return null;

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
