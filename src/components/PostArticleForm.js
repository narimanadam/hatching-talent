import React from "react";
import { Form } from "../styles/FormStyles";
import Input from "../common/components/Input";
import Textarea from "../common/components/Textarea";
import { ADD_ARTICLE } from "../common/helpers/apiUrls";
import { navigate } from "@reach/router";
import useForm from "../common/hooks/useForm";
import Button from "../common/components/Button";
import PageHeader from "../common/components/PageHeader";
import { Container } from "react-grid-system";

const PostArticleForm = () => {
  const postArticle = () => {
    fetch(`${ADD_ARTICLE}`, {
      method: "POST",
      headers: {
        title: values.articleTitle,
        articleDescription: values.articleBody
      }
    })
      .then(data => {
        if (data.ok) {
          navigate("/articles");
        }
      })
      .catch(error => console.log(error));
  };

  const {
    values,
    handleBlur,
    handleSubmit,
    handleChange,
    formIsValid,
    errors
  } = useForm({ articleTitle: "", articleBody: "" }, postArticle);

  return (
    <>
      <PageHeader boldText="Post" normalText="an article" />
      <Form onSubmit={handleSubmit} hasBgColor>
        <Input
          name="articleTitle"
          type="text"
          label="Article Title"
          placeholder="Article Title"
          handleInputChange={handleChange}
          handleBlur={handleBlur}
          validationMessage={errors.articleTitle}
          variant="darkFormField"
        />
        <Textarea
          name="articleBody"
          label="Article Body"
          placeholder="Article Body"
          handleInputChange={handleChange}
          handleBlur={handleBlur}
          validationMessage={errors.articleBody}
          variant="darkFormField"
        />
        <Button
          text="Post Article"
          disabled={!formIsValid}
          type="submit"
          variant="primaryButton"
        />
      </Form>
    </>
  );
};

export default PostArticleForm;
