import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export const Header = styled(Flex)`
  align-items: center;
  justify-content: center;
  background: -webkit-linear-gradient(
    to right,
    #f7ac06,
    #ffc544
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #f7ac06, #ffc544);
`;

Header.defaultProps = {
  height: 250
};

export const Wrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImgWrapper = styled(Flex)`
  align-items: center;
  justify-content: center;
`;

ImgWrapper.defaultProps = {
  width: 150,
  height: 150,
  bg: "white",
  mb: 2,
  sx: {
    borderRadius: "50%"
  }
};

export const Img = styled(Box)``;

Img.defaultProps = {
  as: "img",
  height: 50
};

export const CompanyName = styled(Box)``;

CompanyName.defaultProps = {
  as: "h3",
  color: "white",
  fontSize: 6
};

export const JobTitle = styled(Box)``;

JobTitle.defaultProps = {
  as: "h3",
  fontSize: 7,
  mb: 1,
  mt: 4
};

export const JobLevel = styled(Box)``;

JobLevel.defaultProps = {
  as: "p",
  mb: 5,
  fontSize: 4,
  fontWeight: 4
};

export const JobDesc = styled(Box)``;

JobDesc.defaultProps = {
  as: "p"
};
