import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export const Thumbnail = styled(Flex)`
  align-items: center;
`;

Thumbnail.defaultProps = {};

export const Title = styled(Box)``;

Title.defaultProps = {
  as: "h3"
};
