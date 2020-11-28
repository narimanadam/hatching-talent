import React from "react";
import { Box, Flex } from "reflexbox";

const Loader = () => (
  <Box variant="skeletonSquare" height={24} width={100} mr={2} />
);

const LanguagesLoader = () => (
  <Box variant="skeletonBox" p={5} mb={3}>
    <Box variant="skeletonSquare" height={15} width={150} mb={3} />
    <Flex>
      <Loader />
      <Loader />
      <Loader />
      <Loader />
    </Flex>
  </Box>
);

export default LanguagesLoader;
