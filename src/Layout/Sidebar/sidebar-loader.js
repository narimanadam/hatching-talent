import React from "react";
import { Box } from "reflexbox";
import UserThumbnailLoader from "../../components/user-thumbnail/user-thumbnail-loader";

const SideBarLoader = () => (
  <Box variant="skeletonBox" height="100%">
    <Box variant="skeletonSquare" width={200} height={28} my={5} ml={5} />
    <UserThumbnailLoader />
    <Box ml={5}>
      <Box variant="skeletonSquare" width={200} height={20} my={2} />
      <Box variant="skeletonSquare" width={200} height={20} my={2} />
      <Box variant="skeletonSquare" width={200} height={20} my={2} />
      <Box variant="skeletonSquare" width={200} height={20} my={2} />
    </Box>
  </Box>
);

export default SideBarLoader;
