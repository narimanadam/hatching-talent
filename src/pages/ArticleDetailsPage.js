import React, { useState, useEffect } from "react";
import ArticleImage from "../assets/recent-articles.jpg";
import styled from "styled-components";
import { Container } from "react-grid-system";
import { GET_ARTICLES } from "../helpers/apiUrls";

const ArticleImg = styled.img`
  width: 100%;
`;

const ArticleTitle = styled.h1`
  font-size: 50px;
  margin: 30px 0;
  text-transform: uppercase;
`;

const ArticleBody = styled.p`
  font-size: 20px;
  margin: 30px 0;
`;

const ArticleDetails = ({ articleId }) => {
  const [article, setArticle] = useState({});

  const getArticle = () => {
    fetch(`${GET_ARTICLES}`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(data => {
        let targetArticle = data.filter(
          article => article.article_id == articleId
        );
        setArticle(targetArticle[0]);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <>
      <ArticleImg src={ArticleImage} />
      <Container>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleBody>{article.article_description}</ArticleBody>
      </Container>
    </>
  );
};

export default ArticleDetails;
