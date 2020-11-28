import styled from "@emotion/styled";
import { Box } from "reflexbox";

export const Header = styled(Box)`
  background: -webkit-linear-gradient(
    to right,
    #f7ac06,
    #ffc544
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #f7ac06, #ffc544);
  height: 250px;
`;

Header.defaultProps = {};

export const Wrapper = styled(Box)``;
Wrapper.defaultProps = {
  mt: "-75px",
  pl: 5,
  mb: 3
};

export const Info = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

Info.defaultProps = {};

export const Img = styled(Box)`
  border-radius: 50%;
`;

Img.defaultProps = {
  as: "img",
  width: [150],
  height: [150],
  mb: 2,
  sx: {
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "white"
  }
};

export const Title = styled(Box)``;
Title.defaultProps = {
  as: "h3",
  fontSize: 5,
  mb: 1
};

export const Email = styled(Box)``;

export const JobTitle = styled(Box)``;
JobTitle.defaultProps = {
  as: "span",
  fontSize: 4
};

export const phoneNo = styled(Box)``;
