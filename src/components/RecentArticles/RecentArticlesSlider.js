import React from "react";
import Slider from "react-slick";
import { DefaultButtonOutline } from "../../styles/Button";
import {
  SimpleSliderHeading,
  SimpleSliderDesc
} from "../../styles/SimpleSliderStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SampleNextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        color: "#fff"
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon="chevron-right" size="2x" />
    </div>
  );
};

const SamplePrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        color: "#fff"
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon="chevron-left" size="2x" />
    </div>
  );
};
const RecentArticlesSlider = ({ articles }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div>
      <Slider {...settings}>
        {articles.map(article => (
          <div align="center" key={article.article_id}>
            <SimpleSliderHeading>{article.title}</SimpleSliderHeading>
            <SimpleSliderDesc>{article.article_description}</SimpleSliderDesc>
            <DefaultButtonOutline>Read More</DefaultButtonOutline>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default RecentArticlesSlider;
