import React from "react";
import { Box } from "reflexbox";
import OnlinePresence from "../../../components/CandidateProfile/OnlinePresence";
import * as Styled from "./ProfileHeader.styles";

const ProfileHeader = ({ imgSrc, title, jobTitle, email, phoneNo, userId }) => (
  <>
    <Styled.Header></Styled.Header>
    <Styled.Wrapper>
      <Styled.Img src={imgSrc} />
      <Styled.Info>
        <Box>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Email>{email}</Styled.Email>
        </Box>
        <Box>
          <Styled.JobTitle>{jobTitle}</Styled.JobTitle>
          <Styled.phoneNo>{phoneNo}</Styled.phoneNo>
        </Box>
        <Box>
          <OnlinePresence userId={userId} />
        </Box>
      </Styled.Info>
    </Styled.Wrapper>
  </>
);

export default ProfileHeader;
