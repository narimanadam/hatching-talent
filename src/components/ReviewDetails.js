import React, { useContext } from "react";
import {
  ReviewDetailsStyles,
  CandidateImg,
  Title,
  Body,
  CandidateName,
  Subtitle
} from "../styles/ReviewDetailsStyles";
import { InlineList, InlineListItem } from "../styles/ListStyle";
import { MainButton, MainOutlineButton } from "../styles/Button";
import { Row, Col } from "react-grid-system";
import DefinitionList from "./DefinitionList";
import { REVIEW_ACTION } from "../helpers/apiUrls";
import AuthContext from "../context/AuthContext";

const ReviewDetails = ({
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
  const [authenticated] = useContext(AuthContext);
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
    <ReviewDetailsStyles>
      <Row>
        <Col sm={3}>
          <CandidateImg
            src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1302&q=80"
            alt=""
          />
          <CandidateName>{employerName}</CandidateName>
        </Col>
        <Col sm={9}>
          <Row>
            <Col sm={6}>
              <DefinitionList
                term="Employment Status"
                desc={employmentStatus}
              ></DefinitionList>
            </Col>
            {interviewDifficulty && (
              <>
                <Col sm={6}>
                  <DefinitionList
                    term="Interview Difficulty"
                    desc={interviewDifficulty}
                  ></DefinitionList>
                </Col>
                <Col sm={6}>
                  <DefinitionList
                    term="Job Role"
                    desc={jobRole}
                  ></DefinitionList>
                </Col>
              </>
            )}
          </Row>
          <Title>{name}</Title>
          {questions && (
            <>
              <Subtitle>Interview Question</Subtitle>
              <Body>{questions}</Body>
            </>
          )}
          {answers && (
            <>
              <Subtitle>Interview Answer</Subtitle>
              <Body>{answers}</Body>
            </>
          )}
          <Subtitle>Pros</Subtitle>
          <Body>{pros}</Body>
          <Subtitle>Cons</Subtitle>
          <Body>{cons}</Body>
          <Subtitle>Advice to Management</Subtitle>
          <Body>{advice}</Body>
        </Col>
      </Row>
      {authenticated.type == "Admin" && (
        <InlineList>
          <InlineListItem>
            <MainButton onClick={approveReview} type="submit">
              Approve
            </MainButton>
          </InlineListItem>
          <InlineListItem>
            <MainOutlineButton onClick={rejectReview} type="submit">
              Reject
            </MainOutlineButton>
          </InlineListItem>
        </InlineList>
      )}
    </ReviewDetailsStyles>
  );
};

export default ReviewDetails;
