import React from "react";

import { JobCardLoader } from "./JobCard/job-card-loader";
import Grid from "../common/components/Grid/Grid";

const Loader = () => <JobCardLoader />;

export const JobCardsLoader = () => (
  <Grid columns={3}>
    <Loader />
    <Loader />
    <Loader />
    <Loader />
    <Loader />
    <Loader />
  </Grid>
);
