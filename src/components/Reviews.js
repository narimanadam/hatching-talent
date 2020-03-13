import React, { useState, useEffect } from "react";
import ReviewDetails from "./ReviewDetails";
import { GET_EMPLOYER_REVIEW } from "../helpers/apiUrls";
import Message from "../components/Message";

const Reviews = ({ employerId }) => {
  const [reviews, setReviews] = useState([]);
  const getReviews = () => {
    console.log("employerId in function", employerId);

    fetch(`${GET_EMPLOYER_REVIEW}`, {
      method: "POST",
      headers: {
        employerId
      }
    })
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getReviews();
  }, [employerId]);

  return (
    <>
      {!reviews.length && <Message text="This employer has no reviews yet" />}
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
    </>
  );
};

export default Reviews;
