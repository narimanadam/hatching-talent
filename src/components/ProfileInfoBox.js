import React, { useState, useEffect } from "react";
import {
  ProfileInfoBoxStyles,
  Avatar,
  Name,
  JobTitle
} from "../styles/ProfileInfoBoxStyles.js";
import DefinitionList from "../components/DefinitionList";
// import ProgressBar from "../components/ProgressBar";
import { GET_USER_INFO } from "../common/helpers/apiUrls.js";

const ProfileInfoBox = ({ userId }) => {
  const [candidate, setCandidate] = useState([]);

  const getCandidateInfo = () => {
    fetch(`${GET_USER_INFO}`, {
      method: "POST",
      headers: {
        userId
      }
    })
      .then(res => res.json())
      .then(data => setCandidate(data[0] || []))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getCandidateInfo();
  }, []);

  return (
    <ProfileInfoBoxStyles>
      <Avatar src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
      <Name>
        {candidate.first_name} {candidate.last_name}
      </Name>
      <JobTitle>{candidate.job_title}</JobTitle>
      <DefinitionList term="Email Address" desc={candidate.email} />
      <DefinitionList term="Phone Number" desc={candidate.phone_no} />
      {/* <ProgressBar value="40"></ProgressBar>
            <MainButton>Complete Profile</MainButton> */}
    </ProfileInfoBoxStyles>
  );
};

export default ProfileInfoBox;
