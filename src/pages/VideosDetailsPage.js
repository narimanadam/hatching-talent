import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "react-grid-system";

const ArticleVideo = styled.iframe`
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

class VideosDetailsPage extends Component {
  state = {
    videos: [],
    videoDetails: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        this.setState({
          videos: data
        });
        let newList = this.state.videos.filter(article => article.userId === 1); // Prints result from `response.json()` in getRequest
        let videoDetailsArray = newList.filter(
          video => video.id == this.props.videoId
        );
        this.setState({
          videoDetails: videoDetailsArray[0]
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { title, body } = this.state.videoDetails;
    return (
      <div>
        <ArticleVideo
          height="500"
          src="https://www.youtube.com/embed/ci0ivwWQ6vQ?autoplay=0"
        />
        <Container>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleBody>{body}</ArticleBody>
        </Container>
      </div>
    );
  }
}

export default VideosDetailsPage;
