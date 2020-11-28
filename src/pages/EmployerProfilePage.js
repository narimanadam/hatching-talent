import React, { useEffect, useState } from "react";
import ProfileInfoBox from "../components/ProfileInfoBox";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";
import { SidebarLayoutContainer } from "../Layout/SidebarLayout/SidebarLayout";
import Bio from "../components/CandidateProfile/bio/bio";
import { GET_EMPLOYER_REVIEW } from "../common/helpers/apiUrls";
import ReviewsSlider from "../components/reviews/reviews-slider";

const EmployerProfilePage = ({ employerId }) => {
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
  }, []);

  return (
    <SidebarLayoutContainer>
      <ProfileInfoBox userId={employerId} type="employer" />
      <Bio userId={employerId} />
      {reviews.length ? (
        <ReviewsSlider reviews={reviews} />
      ) : (
        <p>You have no reviews yet</p>
      )}
    </SidebarLayoutContainer>
  );
};

export default WithSidebarLayout(EmployerProfilePage);
