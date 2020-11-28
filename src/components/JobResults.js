import React, { useState, useEffect } from "react";
import JobThumbnail from "./job-thumbnail";
import JobResultsDetails from "./Tabs/JobResultsDetails";

import { SEARCH_JOBS } from "../common/helpers/apiUrls";
import { Box } from "reflexbox";

const JobResults = ({ query }) => {
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState({});
  const handleJobThumbnailClick = itemIndex => {
    setCurrentJob(jobs[itemIndex]);
  };

  const gridStyles = {
    display: "grid",
    sx: {
      gridTemplateColumns: ["2fr 1fr"],
      gridGap: 32
    }
  };

  const WrapperStyles = {
    maxHeight: "100vh",
    overflowX: "auto",
    bg: "lightGray",
    p: 3
  };

  useEffect(() => {
    fetch(`${SEARCH_JOBS}`, {
      method: "POST",
      headers: {
        keyWord: query,
        jobLocation: "",
        jobIndustry: ""
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setJobs(data);
          setCurrentJob(data[0] || []);
        }
      })
      .catch(error => console.log(error));
  }, [query]);

  return (
    <Box {...gridStyles}>
      <Box {...WrapperStyles}>
        {jobs.map((job, index) => (
          <JobThumbnail
            key={job.job_id}
            name={job.job_name}
            description={job.job_description}
            jobLocation={job.location}
            employerId={job.employer_id}
            handleJobThumbnailClick={handleJobThumbnailClick.bind(this, index)}
          >
            {job.job_name}
          </JobThumbnail>
        ))}
      </Box>
      <Box>{currentJob && <JobResultsDetails currentJob={currentJob} />}</Box>
    </Box>
  );
};

export default JobResults;
