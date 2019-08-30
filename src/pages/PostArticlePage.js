import React, { Component } from "react";
import SectionHeading from "../components/SectionHeading";
import { Container } from "react-grid-system";
import PostArticleForm from "../components/PostArticleForm";

class PostArticlePage extends Component {
  render() {
    return (
      <div className="main-colored">
        <Container>
          <SectionHeading boldText="Post" normalText="an article" />
          <PostArticleForm />
        </Container>
      </div>
    );
  }
}

export default PostArticlePage;
