import React from "react";
import { Box } from "reflexbox";

export const BioLoader = () => (
  <Box variant="skeletonBox" p={5} mb={3}>
    <Box variant="skeletonSquare" height={15} width={50} mb={3} />
    <Box variant="skeletonSquare" height={15} width={150} />
  </Box>
);
