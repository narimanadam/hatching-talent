import React from "react";
import { Box, Flex } from "reflexbox";

const Loader = () => (
  <Flex flexDirection="column" alignItems="center">
    <Box width={80} height={80} variant="skeletonSquare" />
    <Box width={150} height={15} mt={2} variant="skeletonSquare" />
  </Flex>
);

const FeaturedEmployersLoader = () => (
  <>
    <Loader />
    <Loader />
    <Loader />
    <Loader />
  </>
);

export default FeaturedEmployersLoader;
