import React, { useState, useEffect } from "react";
import { PENDING_JOBS_URL } from "../common/helpers/apiUrls";
import JobCard from "../components/JobCard";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";
import Grid from "../common/components/Grid/Grid";
import { SidebarLayoutContainer } from "../Layout/SidebarLayout/SidebarLayout";
import Empty from "../common/components/empty";
import { JobCardsLoader } from "../components/job-cards-loader";

const AdminJobOverview = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${PENDING_JOBS_URL}`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  if (isLoading) return <JobCardsLoader />;

  return (
    <SidebarLayoutContainer>
      {jobs.length ? (
        <Grid columns={3}>
          {jobs.map(
            ({
              job_name,
              job_id,
              location,
              job_description,
              role,
              industry
            }) => (
              <JobCard
                jobTitle={job_name}
                jobId={job_id}
                key={job_id}
                jobLocation={location}
                jobDesc={job_description}
                jobRole={role}
                jobIndustry={industry}
                jobType="Pending"
              />
            )
          )}
        </Grid>
      ) : (
        <Empty label="Good Job You have no jobs to approve for now." />
      )}
    </SidebarLayoutContainer>
  );
};

export default WithSidebarLayout(AdminJobOverview);
