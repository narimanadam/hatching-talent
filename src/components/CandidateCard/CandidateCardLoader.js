import React from "react";
import { Box } from "reflexbox";

import * as Styled from "./CandidateCard.styles";

const Loader = () => (
  <Styled.Card>
    <Box width={100} height={100} variant="skeletonCircle" mt={-50} />
    <Box width={80} height={15} variant="skeletonSquare" mb={1} mt={3} />
    <Box width={150} height={15} variant="skeletonSquare" mb={4} />
    <Box width={150} height={40} variant="skeletonSquare" />
  </Styled.Card>
);

const CandidateCardLoader = () => (
  <>
    <Loader />
    <Loader />
    <Loader />
    <Loader />
    <Loader />
  </>
);

export default CandidateCardLoader;
