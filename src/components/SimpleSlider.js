import React, { Component } from "react";
import Slider from "react-slick";
import { DefaultButtonOutline } from "../styles/Button";
import {
  SimpleSliderHeading,
  SimpleSliderDesc
} from "../styles/SimpleSliderStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
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
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
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
}

export default class SimpleSlider extends Component {
  render() {
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
          <div align="center">
            <SimpleSliderHeading>
              IT job application tips from <br /> Hatching Talent
            </SimpleSliderHeading>
            <SimpleSliderDesc>
              The way you write your CV says a lot about how you write <br />
              code and other tips for acing that job application as a <br />{" "}
              computer science graduate
            </SimpleSliderDesc>
            <DefaultButtonOutline>Read More</DefaultButtonOutline>
          </div>
          <div align="center">
            <SimpleSliderHeading>
              IT job application tips from <br /> Hatching Talent
            </SimpleSliderHeading>
            <SimpleSliderDesc>
              The way you write your CV says a lot about how you write <br />
              code and other tips for acing that job application as a <br />{" "}
              computer science graduate
            </SimpleSliderDesc>
            <DefaultButtonOutline>Read More</DefaultButtonOutline>
          </div>
          <div align="center">
            <SimpleSliderHeading>
              IT job application tips from <br /> Hatching Talent
            </SimpleSliderHeading>
            <SimpleSliderDesc>
              The way you write your CV says a lot about how you write <br />
              code and other tips for acing that job application as a <br />{" "}
              computer science graduate
            </SimpleSliderDesc>
            <DefaultButtonOutline>Read More</DefaultButtonOutline>
          </div>
          <div align="center">
            <SimpleSliderHeading>
              IT job application tips from <br /> Hatching Talent
            </SimpleSliderHeading>
            <SimpleSliderDesc>
              The way you write your CV says a lot about how you write <br />
              code and other tips for acing that job application as a <br />{" "}
              computer science graduate
            </SimpleSliderDesc>
            <DefaultButtonOutline>Read More</DefaultButtonOutline>
          </div>
          <div align="center">
            <h3>5</h3>
          </div>
          <div align="center">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
