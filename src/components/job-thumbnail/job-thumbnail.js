import React, { useEffect, useState } from "react";
import * as Styled from "./job-thumbnail.styles";
import { GET_USER_INFO } from "../../common/helpers/apiUrls";
import { Box } from "reflexbox";

const JobThumbnail = ({
  name,
  jobLocation,
  handleJobThumbnailClick,
  employerId
}) => {
  const [employerInfo, setEmployerInfo] = useState({});

  useEffect(() => {
    fetch(`${GET_USER_INFO}`, {
      method: "POST",
      headers: {
        userId: employerId
      }
    })
      .then(res => res.json())
      .then(data => setEmployerInfo(data[0]))
      .catch(error => console.log(error));
  }, [employerId]);

  return (
    <Styled.JobThumbnail onClick={handleJobThumbnailClick}>
      <Styled.ImgWrapper>
        <Styled.Img
          src="https://vignette.wikia.nocookie.net/logopedia/images/9/9c/Coca-Cola_logo_2016.svg/revision/latest/scale-to-width-down/480?cb=20161225004719"
          alt={name}
        />
      </Styled.ImgWrapper>
      <Styled.Info>
        <Box>
          <Styled.JobTitle>{name}</Styled.JobTitle>
          <Styled.CompanyName>
            {employerInfo && employerInfo.company_name}
          </Styled.CompanyName>
        </Box>
        <Box>
          <Styled.JobLocation>{jobLocation}</Styled.JobLocation>
        </Box>
      </Styled.Info>
    </Styled.JobThumbnail>
  );
};

export default JobThumbnail;
