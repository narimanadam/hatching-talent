import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export const ThumbnailStyles = styled(Flex)`
  align-items: center;
`;

export const ImgWrapper = styled(Box)``;
ImgWrapper.defaultProps = {};

export const Img = styled(Box)`
  border-radius: 50%;
`;
Img.defaultProps = {
  as: "img",
  width: 50,
  height: 50
};

export const Info = styled(Box)``;
Info.defaultProps = {
  pl: 3
};

export const Title = styled(Box)``;
Title.defaultProps = {
  as: "h3",
  fontSize: 4
};

export const Body = styled(Box)``;
Body.defaultProps = {
  as: "span",
  fontWeight: 1,
  fontSize: 2
};
