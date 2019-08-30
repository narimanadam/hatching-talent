import React, { Component } from "react";
import { Container } from "react-grid-system";
import styled from "styled-components";
import ArticleImage from "../assets/recent-articles.jpg";

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

class PressDetailsPage extends Component {
  state = {
    press: [],
    pressDetais: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        this.setState({
          press: data
        });
        let newList = this.state.press.filter(press => press.userId === 1); // Prints result from `response.json()` in getRequest
        let pressDetailsArray = newList.filter(
          press => press.id == this.props.pressId
        );
        this.setState({
          pressDetais: pressDetailsArray[0]
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { title, body } = this.state.pressDetais;
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

export default PressDetailsPage;
