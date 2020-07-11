import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export const Wrapper = styled(Flex)`
  justify-content: space-around;
  align-items: center;
`;

Wrapper.defaultProps = {
  mb: [3],
  sx: {
    ":nth-last-of-type": {
      mb: [0]
    }
  }
};

export const Content = styled.div`
  text-align: center;
`;

export const Title = styled(Box)`
  text-transform: uppercase;
`;

Title.defaultProps = {
  as: "h3",
  fontSize: [3],
  mb: [2]
};

export const Desc = styled(Box)``;

Desc.defaultProps = {
  as: "p",
  fontSize: [2]
};

export const Link = styled(Box)`
  display: inline-block;
  text-decoration: underline;
`;

Link.defaultProps = {
  as: "a",
  fontWeight: [6],
  fontSize: [2],
  mt: [3]
};

export const Img = styled.img`
  max-width: 300px;
`;
