import React, { useState } from "react";
import { Form } from "../styles/FormStyles";
import InputField from "./InputField";
import Textarea from "./Textarea";
import { DefaultButtonOutline } from "../styles/Button";
import { ADD_ARTICLE } from "../helpers/apiUrls";
import Message from "../components/Message";
import { navigate } from "@reach/router";

const PostArticleForm = () => {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const [bluredInputs, setBluredInputs] = useState(false);

  const setBlurred = e => {
    setBluredInputs({ ...bluredInputs, [e.target.name]: true });
  };

  const validateArticleTitle = () => {
    return articleTitle !== "";
  };

  const validateArticleBody = () => {
    return articleBody !== "";
  };

  const postArticle = e => {
    e.preventDefault();
    fetch(`${ADD_ARTICLE}`, {
      method: "POST",
      headers: {
        title: articleTitle,
        articleDescription: articleBody
      }
    })
      .then(data => {
        if (data.ok) {
          navigate("/articles");
        }
      })
      .catch(error => console.log(error));
  };

  const articleTitleIsValid = validateArticleTitle();
  const articleBodyIsValid = validateArticleBody();
  const formIsValid = articleTitleIsValid && articleBodyIsValid;
  return (
    <Form onSubmit={postArticle}>
      <InputField
        name="articleTitle"
        type="text"
        label="Article Title"
        placeholder="Article Title"
        handleInputChange={e => setArticleTitle(e.target.value)}
        handleBlur={setBlurred}
      />
      {bluredInputs.articleTitle && !articleTitleIsValid && (
        <Message text="Article title is Required" type="error"></Message>
      )}
      <Textarea
        name="articleBody"
        label="ArticleBody"
        placeholder="Article Body"
        handleInputChange={e => setArticleBody(e.target.value)}
        handleBlur={setBlurred}
      />
      {bluredInputs.articleBody && !articleBodyIsValid && (
        <Message text="Article Body is Required" type="error"></Message>
      )}

      {/* <Link to="/articles"> */}
      <DefaultButtonOutline disabled={!formIsValid}>
        Post Article
      </DefaultButtonOutline>
      {/* </Link> */}
    </Form>
  );
};

export default PostArticleForm;
