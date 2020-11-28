import React, { useState, useEffect } from "react";
import ArticleImage from "../assets/recent-articles.jpg";
import styled from "styled-components";
import { Container } from "react-grid-system";
import { GET_ARTICLES } from "../common/helpers/apiUrls";
import useDocumentTitle from "../common/hooks/useDocumentTitle";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";
import { SidebarLayoutContainer } from "../Layout/SidebarLayout/SidebarLayout";

const ArticleImgWrapper = styled.div`
  text-align: center;
`;

const ArticleImg = styled.img`
  max-width: 100%;
  max-height: 400px;
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
  useDocumentTitle(`${article.title}`);

  useEffect(() => {
    fetch(`${GET_ARTICLES}`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(data => {
        let targetArticle = data.filter(
          article => article.article_id === +articleId
        );
        setArticle(targetArticle[0]);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <SidebarLayoutContainer>
      <ArticleImgWrapper>
        <ArticleImg src={ArticleImage} />
      </ArticleImgWrapper>
      <Container>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleBody>{article.article_description}</ArticleBody>
      </Container>
    </SidebarLayoutContainer>
  );
};

export default WithSidebarLayout(ArticleDetails);
