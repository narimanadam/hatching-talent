import React, { useState, useEffect } from "react";
import JobBox from "../components/JobBox";
import { PENDING_JOBS_URL } from "../common/helpers/apiUrls";
import Message from "../common/components/Message";
import JobCard from "../components/JobCard";
import * as Styled from "../styles/gridStyle";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";

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
    <>
      {!jobs.length && (
        <Message text="Good Job You have no jobs to approve for now." />
      )}

      <Styled.Grid>
        {jobs.map(
          ({ job_name, job_id, location, job_description, role, industry }) => (
            <JobCard
              jobTitle={job_name}
              jobId={job_id}
              key={job_id}
              jobLocation={location}
              jobDesc={job_description}
              jobRole={role}
              jobIndustry={industry}
            />
          )
        )}
      </Styled.Grid>
    </>
  );
};

export default WithSidebarLayout(AdminJobOverview);
