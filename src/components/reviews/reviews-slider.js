import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import ReviewItem from "./review-item";

const ReviewsSlider = ({ reviews }) => {
  SwiperCore.use([Navigation]);

  return (
    <>
      <Swiper navigation>
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
            <SwiperSlide>
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
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
};

export default ReviewsSlider;
