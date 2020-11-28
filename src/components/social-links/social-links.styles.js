import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export const Labels = styled(Flex)``;

export const LabelLink = styled.a`
  color: ${props => props.theme.white};
  text-decoration: none;
`;

export const CloseIcon = styled.button`
  margin-left: 10px;
  background: none;
  border: none;
  color: ${props => props.theme.white};
`;

export const Link = styled(Box)``;
Link.defaultProps = {
  as: "a",
  mr: 2,
  color: "black",
  fontSize: 6
};
