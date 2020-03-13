import React from "react";
import {
  ThumbnailStyles,
  ImgWrapper,
  Info,
  Img,
  Title,
  Body
} from "../styles/ThumbnailStyles";

const Thumbnail = ({ imgSrc, title, body }) => {
  return (
    <ThumbnailStyles>
      <ImgWrapper>
        <Img src={imgSrc} alt={title} />
      </ImgWrapper>
      <Info>
        <Title>{title}</Title>
        {body && <Body />}
      </Info>
    </ThumbnailStyles>
  );
};

export default Thumbnail;
