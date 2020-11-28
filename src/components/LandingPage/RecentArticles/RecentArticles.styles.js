import styled from "@emotion/styled";
import { Box } from "reflexbox";

export const Wrapper = styled(Box)`
  position: relative;
`;

Wrapper.defaultProps = {
  color: "white"
};

export const Content = styled.div`
  position: relative;
  z-index: 999;
`;
