import React from "react";
import * as Styled from "./Card.styles";
import Articles from "../../../assets/recent-articles.jpg";
import { Link } from "@reach/router";

const Card = ({ title, body, viewsNo, articleId, hasImg, children }) => {
  return (
    <Styled.Card>
      <Link
        to={`/articles/${articleId}`}
        style={{ textDecoration: "none", boxShadow: "none" }}
      >
        {hasImg && (
          <Styled.ImgWrapper>
            <Styled.Img src={Articles} />
          </Styled.ImgWrapper>
        )}

        <Styled.Info>
          {title && <Styled.Title>{title} </Styled.Title>}
          {body && <Styled.Body>{body}</Styled.Body>}
          {/* {viewsNo && (
            <Styled.Actions>
              <Styled.Link>Read more</Styled.Link>
              <Styled.Views>{viewsNo} Views</Styled.Views>
            </Styled.Actions>
          )} */}
        </Styled.Info>
      </Link>
      {children}
    </Styled.Card>
  );
};

export default Card;
