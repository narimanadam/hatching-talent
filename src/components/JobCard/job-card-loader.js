import React from "react";
import { Box, Flex } from "reflexbox";

import * as Styled from "./JobCard.styles";

export const JobCardLoader = () => (
  <Styled.Card py={3} px={4}>
    <Flex alignItems="top" flexWrap="wrap" mb={2}>
      <Box width={80} height={80} mr={3} variant="skeletonSquare" />
      <Box>
        <Box width={150} height={15} variant="skeletonSquare" mb={2} />
        <Box width={50} height={15} variant="skeletonSquare" />
      </Box>
      <Box width={70} height={15} variant="skeletonSquare" ml="auto" />
    </Flex>
    <Box width={150} height={15} variant="skeletonSquare" mb={3} />
    <Flex justifyContent="space-between">
      <Flex mb={3}>
        <Box width={80} height={20} variant="skeletonSquare" mr={2} />
        <Box width={80} height={20} variant="skeletonSquare" />
      </Flex>

      <Box width={80} height={15} variant="skeletonSquare" />
    </Flex>
  </Styled.Card>
);
