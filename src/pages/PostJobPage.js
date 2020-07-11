import React from "react";
import PostJobForm from "../components/PostJobForm";
import PageHeader from "../common/components/PageHeader";
import useDocumentTitle from "../common/hooks/useDocumentTitle";
import withSecondaryLayout from "../Layout/SecondaryLayout/WithSecondaryLayout";

const PostJobPage = () => {
  useDocumentTitle("Post Job | Hatching Talent");
  return <PostJobForm />;
};

export default withSecondaryLayout(PostJobPage);
