import React, { useContext } from "react";
import * as Styled from "./reviews.styles";
import DefinitionList from "../DefinitionList";
import { REVIEW_ACTION } from "../../common/helpers/apiUrls";
import AuthContext from "../../common/context/AuthContext";
import Button from "../../common/components/Button/";
import { Flex } from "reflexbox";

const ReviewItem = ({
  name,
  pros,
  cons,
  advice,
  questions,
  answers,
  jobRole,
  employmentStatus,
  interviewDifficulty,
  reviewId,
  employerName
}) => {
  const { AuthState } = useContext(AuthContext);
  const approveReview = e => {
    e.preventDefault();
    fetch(`${REVIEW_ACTION}`, {
      method: "POST",
      headers: {
        reviewId,
        status: "Approved"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  const rejectReview = e => {
    e.preventDefault();
    fetch(`${REVIEW_ACTION}`, {
      method: "POST",
      headers: {
        reviewId,
        status: "Rejected"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  return (
    <Styled.ReviewItem>
      <Styled.CandidateImg
        src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1302&q=80"
        alt=""
      />
      <Styled.CandidateName>{employerName}</Styled.CandidateName>

      <DefinitionList term="Employment Status" desc={employmentStatus} />
      {interviewDifficulty && (
        <>
          <DefinitionList
            term="Interview Difficulty"
            desc={interviewDifficulty}
          />

          <DefinitionList term="Job Role" desc={jobRole} />
        </>
      )}
      <Styled.Title>{name}</Styled.Title>
      {questions && (
        <>
          <Styled.Subtitle>Interview Question</Styled.Subtitle>
          <Styled.Body>{questions}</Styled.Body>
        </>
      )}
      {answers && (
        <>
          <Styled.Subtitle>Interview Answer</Styled.Subtitle>
          <Styled.Body>{answers}</Styled.Body>
        </>
      )}
      <Styled.Subtitle>Pros</Styled.Subtitle>
      <Styled.Body>{pros}</Styled.Body>
      <Styled.Subtitle>Cons</Styled.Subtitle>
      <Styled.Body>{cons}</Styled.Body>
      <Styled.Subtitle>Advice to Management</Styled.Subtitle>
      <Styled.Body>{advice}</Styled.Body>
      {AuthState.type === "Admin" && (
        <Flex justifyContent="flex-end">
          <Button
            onClick={approveReview}
            type="submit"
            variant="primaryButton"
            text="Approve"
            mr={2}
          />
          <Button
            onClick={rejectReview}
            type="submit"
            variant="primaryOutlineButton"
            text="Reject"
          />
        </Flex>
      )}
    </Styled.ReviewItem>
  );
};

export default ReviewItem;
