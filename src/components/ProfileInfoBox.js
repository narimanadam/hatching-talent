import React, { useState, useEffect } from "react";
// import ProgressBar from "../components/ProgressBar";
import { GET_USER_INFO } from "../common/helpers/apiUrls.js";
import ProfileHeader from "../common/components/ProfileHeader/index.js";

const ProfileInfoBox = ({ userId, type }) => {
  const [candidate, setCandidate] = useState([]);

  useEffect(() => {
    fetch(`${GET_USER_INFO}`, {
      method: "POST",
      headers: {
        userId
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setCandidate(data[0]);
        }
      })
      .catch(error => console.log(error));
  }, []);

  const {
    first_name,
    last_name,
    job_title,
    email,
    phone_no,
    company_name
  } = candidate;

  return (
    <>
      <ProfileHeader
        imgSrc="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        title={
          type === "employer" ? `${company_name}` : `${first_name} ${last_name}`
        }
        jobTitle={job_title}
        email={email}
        phoneNo={phone_no}
        userId={userId}
      />
    </>
  );
};

export default ProfileInfoBox;
