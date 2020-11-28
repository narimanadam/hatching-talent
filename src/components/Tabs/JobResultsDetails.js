import React, { useState, useEffect, useContext } from "react";
import { GET_USER_INFO } from "../../common/helpers/apiUrls";
import Button from "../../common/components/Button";
import {
  APPLY_SAVE_JOB,
  GET_EMPLOYER_REVIEW
} from "../../common/helpers/apiUrls";
import AuthContext from "../../common/context/AuthContext";
import * as Styled from "./job-details.styles";
import ReviewsSlider from "../reviews/reviews-slider";
import Message from "../../common/components/Message";

const JobResultsDetails = ({
  currentJob: { job_name, location, job_description, employer_id, job_id }
}) => {
  const { AuthState } = useContext(AuthContext);
  const [employerInfo, setEmployerInfo] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${GET_USER_INFO}`, {
      method: "POST",
      headers: {
        userId: employer_id
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setEmployerInfo(data[0]);
        }
      })
      .catch(error => console.log(error));
  }, [employer_id]);

  const applyJob = () => {
    fetch(`${APPLY_SAVE_JOB}`, {
      method: "POST",
      headers: {
        jobId: job_id,
        userId: AuthState.userID,
        action: "apply"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetch(`${GET_EMPLOYER_REVIEW}`, {
      method: "POST",
      headers: {
        employerId: employer_id
      }
    })
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(error => console.log(error));
  }, [employer_id]);

  return (
    <>
      <Styled.Wrapper>
        <Styled.Img
          src="https://vignette.wikia.nocookie.net/logopedia/images/9/9c/Coca-Cola_logo_2016.svg/revision/latest/scale-to-width-down/480?cb=20161225004719"
          alt=""
        />
        {employerInfo && (
          <Styled.CompanyName>{employerInfo.company_name}</Styled.CompanyName>
        )}
      </Styled.Wrapper>
      <Styled.JobTitle>{job_name}</Styled.JobTitle>
      <Styled.JobLocation>{location}</Styled.JobLocation>
      <Styled.Separator />
      <Styled.Heading>Description</Styled.Heading>
      <Styled.Description>{job_description}</Styled.Description>
      {!reviews.length && <Message text="This employer has no reviews yet" />}

      {reviews && <ReviewsSlider reviews={reviews} />}

      <Button variant="primaryButton" onClick={applyJob} text="Apply" mt={3} />
    </>
  );
};

export default JobResultsDetails;
