import React from "react";
import { Box, Flex } from "reflexbox";

const EducationLoader = () => (
  <Flex
    variant="skeletonBox"
    justifyContent="space-between"
    alignItems="flex-start"
    p={5}
    mb={3}
  >
    <Box flexDirection="column">
      <Box width={150} height={15} variant="skeletonSquare" mb={3} />
      <Box width={200} height={24} variant="skeletonSquare" mb={2} />
      <Box width={150} height={20} variant="skeletonSquare" mb={2} />
      <Box width={150} height={15} variant="skeletonSquare" mb={2} />
      <Box width={150} height={15} variant="skeletonSquare" mb={8} />
      <Box width={300} height={15} variant="skeletonSquare" />
    </Box>
    <Flex>
      <Box width={18} height={18} variant="skeletonSquare" mr={2} />
      <Box width={18} height={18} variant="skeletonSquare" />
    </Flex>
  </Flex>
);

export default EducationLoader;
