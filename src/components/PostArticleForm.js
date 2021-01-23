import React from "react";
import { Form } from "../styles/FormStyles";
import Input from "../common/components/Input";
import Textarea from "../common/components/Textarea";
import { ADD_ARTICLE } from "../common/helpers/apiUrls";
import { navigate } from "@reach/router";
import Button from "../common/components/Button";
import PageHeader from "../common/components/PageHeader";
import { SidebarLayoutContainer } from "../Layout/SidebarLayout/SidebarLayout";
import { useForm } from "react-hook-form";

const PostArticleForm = data => {
  const { register, handleSubmit, errors } = useForm();

  const postArticle = () => {
    fetch(`${ADD_ARTICLE}`, {
      method: "POST",
      headers: {
        title: data.articleTitle,
        articleDescription: data.articleBody
      }
    })
      .then(data => {
        if (data.ok) {
          navigate("/articles");
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <SidebarLayoutContainer>
      <PageHeader boldText="Post" normalText="an article" />
      <Form onSubmit={handleSubmit(postArticle)} hasBgColor>
        <Input
          name="articleTitle"
          type="text"
          label="Article Title"
          placeholder="Article Title"
          register={register({ required: "Article Title is Required" })}
          error={errors.articleTitle}
        />
        <Textarea
          name="articleBody"
          label="Article Body"
          placeholder="Article Body"
          register={register({
            required: "Article Body is Required",
            minLength: {
              value: 100,
              message: "Article Body should be at least 100 characters"
            }
          })}
          error={errors.articleBody}
        />
        <Button text="Post Article" type="submit" variant="primaryButton" />
      </Form>
    </SidebarLayoutContainer>
  );
};

export default PostArticleForm;
