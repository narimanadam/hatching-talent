import styled from "@emotion/styled";
import { Box } from "reflexbox";

export const Header = styled(Box)`
  // background: -webkit-linear-gradient(
  //   to right,
  //   #f7ac06,
  //   #ffc544
  // ); /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to right, #f7ac06, #ffc544);
`;

Header.defaultProps = {
  // bg: "main",
  py: [4],
  ml: [0]
};

export const Heading = styled(Box)`
  text-align: left;
`;

Heading.defaultProps = {
  as: "h1",
  fontSize: [7],
  variant: "darkPageHeader",
  fontWeight: "0",
  mb: [2]
};

export const Description = styled(Box)`
  text-align: left;
`;

Description.defaultProps = {
  as: "p",
  mb: [3],
  lineHeight: ["22px"],
  color: "white"
};
