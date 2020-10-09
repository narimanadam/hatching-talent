import React from "react";
import PostArticleForm from "../components/PostArticleForm";
import PageHeader from "../common/components/PageHeader";
import useDocumentTitle from "../common/hooks/useDocumentTitle";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";

const PostArticlePage = () => {
  useDocumentTitle("Post Article | Hatching Talent");
  return <PostArticleForm />;
};

export default WithSidebarLayout(PostArticlePage);
