import React, { Component } from "react";
import {
  CardStyles,
  ImgWrapper,
  Img,
  Info,
  Title,
  Body,
  CardLink,
  Views,
  Actions,
  VideoWrapper,
  Video
} from "../styles/CardStyles";
import Articles from "../assets/recent-articles.jpg";
import { Link } from "@reach/router";

class Card extends Component {
  render() {
    return (
      <CardStyles>
        <Link
          to={`/articles/${this.props.articleId}`}
          style={{ textDecoration: "none", boxShadow: "none" }}
        >
          {this.props.type == "image" ? (
            <ImgWrapper>
              <Img src={Articles} />
            </ImgWrapper>
          ) : (
            <VideoWrapper>
              <Video
                src="https://www.youtube.com/embed/ci0ivwWQ6vQ?autoplay=0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </VideoWrapper>
          )}

          <Info>
            <Title>{this.props.title} </Title>
            <Body>{this.props.body}</Body>
            <Actions>
              <CardLink>Read more</CardLink>
              <Views>164 Views</Views>
            </Actions>
          </Info>
        </Link>
      </CardStyles>
    );
  }
}

export default Card;
