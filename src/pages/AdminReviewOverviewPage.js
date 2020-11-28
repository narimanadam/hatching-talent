import React, { useState, useEffect } from "react";
import { GET_PENDING_REVIEWS } from "../common/helpers/apiUrls";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";
import Empty from "../common/components/empty";
import ReviewItem from "../components/reviews/";
import { SidebarLayoutContainer } from "../Layout/SidebarLayout/SidebarLayout";

const AdminReviewOverviewPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${GET_PENDING_REVIEWS}`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(error => console.log(error));
  }, [reviews]);

  return (
    <SidebarLayoutContainer>
      {!reviews.length && (
        <Empty label="You have no pending reviews right now." />
      )}
      {reviews.map(review => (
        <ReviewItem
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
          mb={3}
        />
      ))}
    </SidebarLayoutContainer>
  );
};

export default WithSidebarLayout(AdminReviewOverviewPage);
