import styled from "@emotion/styled";
import { Box } from "reflexbox";

export const ReviewItem = styled(Box)`
  width: 100%;
`;
ReviewItem.defaultProps = {
  bg: "lightGray",
  mb: 3,
  py: 3,
  px: 40
};

export const CandidateImg = styled(Box)`
  border-radius: 50%;
`;
CandidateImg.defaultProps = {
  as: "img",
  width: 60,
  height: 60
};

export const CandidateName = styled(Box)``;
CandidateName.defaultProps = {
  as: "p",
  fontSize: 3,
  mt: 2,
  fontWeight: 6
};

export const Title = styled(Box)``;
Title.defaultProps = {
  as: "h3",
  fontSize: 5,
  mb: 4
};

export const Subtitle = styled(Box)``;
Subtitle.defaultProps = {
  as: "h4",
  fontSize: 4,
  fontWeight: 4,
  mb: 1
};

export const Body = styled.p``;
Body.defaultProps = {
  as: "p",
  fontSize: 3,
  mb: 3
};
