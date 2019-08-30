import React from "react";
import {
  ProfileInfoBoxStyles,
  Avatar,
  Name,
  JobTitle
} from "../styles/ProfileInfoBoxStyles.js";
import { MainButton } from "../styles/Button";
import DefinitionList from "../components/DefinitionList";
import ProgressBar from "../components/ProgressBar";

function ProfileInfoBox({ name, email }) {
  return (
    <ProfileInfoBoxStyles>
      <Avatar src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
      <Name>{name}</Name>
      <JobTitle>Project Manager</JobTitle>
      <DefinitionList term="Email Address" desc={email} />
      <DefinitionList term="Phone Number" desc="+18888293" />
      {/* <ProgressBar value="40"></ProgressBar>
            <MainButton>Complete Profile</MainButton> */}
    </ProfileInfoBoxStyles>
  );
}

export default ProfileInfoBox;
