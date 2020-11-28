import React, { useState, useEffect } from "react";
import { GET_EMPLOYER_REVIEW } from "../../common/helpers/apiUrls";
import Message from "../../common/components/Message";
import ReviewItem from "./review-item";

const Reviews = ({ employerId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${GET_EMPLOYER_REVIEW}`, {
      method: "POST",
      headers: {
        employerId
      }
    })
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(error => console.log(error));
  }, [employerId]);

  return (
    <>
      {!reviews.length && <Message text="This employer has no reviews yet" />}
      {reviews.map(
        ({
          review_title,
          cons,
          pros,
          advice,
          id,
          questions,
          answers,
          j_role,
          difficulty,
          employemnt_status,
          review_id
        }) => (
          <ReviewItem
            name={review_title}
            cons={cons}
            pros={pros}
            advice={advice}
            key={id}
            questions={questions}
            answers={answers}
            jobRole={j_role}
            interviewDifficulty={difficulty}
            employmentStatus={employemnt_status}
            reviewId={review_id}
          />
        )
      )}
    </>
  );
};

export default Reviews;
