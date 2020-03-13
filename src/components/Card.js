import React from "react";
import {
  CardStyles,
  ImgWrapper,
  Img,
  Info,
  Title,
  Body,
  CardLink,
  Views,
  Actions
} from "../styles/CardStyles";
import Articles from "../assets/recent-articles.jpg";
import { Link } from "@reach/router";

const Card = ({ title, body, type, viewsNo, articleId }) => {
  return (
    <CardStyles>
      <Link
        to={`/articles/${articleId}`}
        style={{ textDecoration: "none", boxShadow: "none" }}
      >
        <ImgWrapper>
          <Img src={Articles} />
        </ImgWrapper>

        <Info>
          <Title>{title} </Title>
          <Body>{body}</Body>
          <Actions>
            <CardLink>Read more</CardLink>
            <Views>{viewsNo} Views</Views>
          </Actions>
        </Info>
      </Link>
    </CardStyles>
  );
};

export default Card;
