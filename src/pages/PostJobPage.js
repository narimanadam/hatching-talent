import React from "react";
import PostJobForm from "../components/PostJobForm";
import useDocumentTitle from "../common/hooks/useDocumentTitle";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";

const PostJobPage = () => {
  useDocumentTitle("Post Job | Hatching Talent");
  return <PostJobForm />;
};

export default WithSidebarLayout(PostJobPage);
