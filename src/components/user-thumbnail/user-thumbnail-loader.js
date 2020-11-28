import React from "react";
import { Box, Flex } from "reflexbox";

const UserThumbnailLoader = () => (
  <Flex ml={5} my={2} alignItems="center">
    <Box>
      <Box variant="skeletonCircle" width={50} height={50} />
    </Box>
    <Box ml={3}>
      <Box variant="skeletonSquare" width={120} height={15} mb={2} />
      <Box variant="skeletonSquare" width={80} height={15} />
    </Box>
  </Flex>
);

export default UserThumbnailLoader;
