import React, { useEffect, useState } from "react";
import { JobThumbnailStyled } from "../styles/JobThumbnailStyled";
import PropTypes from "prop-types";
import { GET_USER_INFO } from "../helpers/apiUrls";

const JobThumbnail = ({
  name,
  description,
  jobLocation,
  handleJobThumbnailClick,
  employerId
}) => {
  const [employerInfo, setEmployerInfo] = useState({});

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    fetch(`${GET_USER_INFO}`, {
      method: "POST",
      headers: {
        userId: employerId
      }
    })
      .then(res => res.json())
      .then(data => setEmployerInfo(data[0]))
      .catch(error => console.log(error));
  };

  return (
    <JobThumbnailStyled onClick={handleJobThumbnailClick}>
      <div className="grid-thumb__img-wrapper">
        <img
          src="https://vignette.wikia.nocookie.net/logopedia/images/9/9c/Coca-Cola_logo_2016.svg/revision/latest/scale-to-width-down/480?cb=20161225004719"
          className="grid-thumb__img"
          alt={name}
        />
      </div>
      <div className="grid-thumb__info">
        <span className="grid-thumb__desc">{jobLocation}</span>
        <span className="grid-thumb__title">{name}</span>
        <span className="grid-thumb__subTitle">
          {employerInfo.first_name} {employerInfo.last_name}
        </span>
      </div>
    </JobThumbnailStyled>
  );
};

export default JobThumbnail;
