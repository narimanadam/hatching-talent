import React, { Component } from "react";
import ArticleImage from "../assets/recent-articles.jpg";
import styled from "styled-components";
import { Container } from "react-grid-system";

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

class ArticleDetails extends Component {
  state = {
    articles: [],
    articleDetais: []
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        this.setState({
          articles: data
        });
        let newList = this.state.articles.filter(
          article => article.userId === 1
        ); // Prints result from `response.json()` in getRequest
        let articleDetailsArray = newList.filter(
          article => article.id == this.props.articleId
        );
        this.setState({
          articleDetais: articleDetailsArray[0]
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { title, body } = this.state.articleDetais;
    return (
      <div>
        <ArticleImg src={ArticleImage} />
        <Container>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleBody>{body}</ArticleBody>
        </Container>
      </div>
    );
  }
}

export default ArticleDetails;
