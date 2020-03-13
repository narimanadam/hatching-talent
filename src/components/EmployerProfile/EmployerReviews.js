import React, { useEffect, useState } from "react";
import { TabsHorizontal } from "../../styles/TabStyles";
import TabList from "../Tabs/TabList";
import TabItem from "../Tabs/TabTitle";
import Box from "../Box";
import TabContent from "../Tabs/TabContent";
import { GET_EMPLOYER_REVIEW } from "../../helpers/apiUrls";
import ReviewDetails from "../ReviewDetails";

const EmployerReviews = ({ userId }) => {
  const [reviews, setReviews] = useState([]);

  const getEmployerReviews = () => {
    fetch(`${GET_EMPLOYER_REVIEW}`, {
      method: "POST",
      headers: {
        employerId: userId
      }
    })
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getEmployerReviews();
  }, []);

  return (
    <Box heading="Reviews">
      {reviews.length ? (
        reviews.map(review => (
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
        ))
      ) : (
        <p>You have no reviews yet</p>
      )}
      {}
    </Box>
  );
};

export default EmployerReviews;