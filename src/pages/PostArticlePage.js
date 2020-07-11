import React from "react";
import PostArticleForm from "../components/PostArticleForm";
import PageHeader from "../common/components/PageHeader";
import useDocumentTitle from "../common/hooks/useDocumentTitle";
import withSecondaryLayout from "../Layout/SecondaryLayout/WithSecondaryLayout";

const PostArticlePage = () => {
  useDocumentTitle("Post Article | Hatching Talent");
  return <PostArticleForm />;
};

export default withSecondaryLayout(PostArticlePage);
