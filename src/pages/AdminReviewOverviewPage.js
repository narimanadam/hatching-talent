import React, { useState, useEffect } from "react";
import { Container } from "react-grid-system";
import ReviewDetails from "../components/ReviewDetails";
import Message from "../common/components/Message";
import { GET_PENDING_REVIEWS } from "../common/helpers/apiUrls";
import withSecondaryLayout from "../Layout/SecondaryLayout/WithSecondaryLayout";

const AdminReviewOverviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [employerName, setEmployerName] = useState("");

  const getPendingReview = () => {
    fetch(`${GET_PENDING_REVIEWS}`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(error => console.log(error));
  };
  useEffect(() => {
    getPendingReview();
  }, [reviews]);

  return (
    <Container style={{ marginTop: "30px" }}>
      {!reviews.length && (
        <Message text="You have no pending reviews right now."></Message>
      )}
      {reviews.map(review => (
        <ReviewDetails
          name={review.review_title}
          cons={review.cons}
          pros={review.pros}
          advice={review.advice}
          key={review.id}
          questions={review.questions}
          answers={review.answers}
          jobRole={review.j_role}
          interviewDifficulty={review.difficulty}
          employmentStatus={review.employemnt_status}
          reviewId={review.review_id}
        />
      ))}
    </Container>
  );
};

export default withSecondaryLayout(AdminReviewOverviewPage);
