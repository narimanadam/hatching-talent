import React from "react";
import SectionHeading from "../components/SectionHeading";
import { Container } from "react-grid-system";
import PostJobForm from "../components/PostJobForm";

const PostJobPage = () => {
  return (
    <div className="main-colored">
      <Container>
        <SectionHeading boldText="Post" normalText="a Job" />
        <PostJobForm />
      </Container>
    </div>
  );
};

export default PostJobPage;
