import React, { Component } from "react";
import { Form } from "../styles/FormStyles";
import InputField from "./InputField";
import Textarea from "./Textarea";
import { DefaultButtonOutline } from "../styles/Button";
// import { Link } from '@reach/router';

class PostArticleForm extends Component {
  state = {
    articleTitle: "",
    articleBody: "",
    touched: {}
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleBlur = ({ target: { name } }) => {
    this.setState({
      touched: { ...this.state.touched, [name]: true }
    });
  };

  validateArticleTitle = () => {
    return this.state.articleTitle != "";
  };

  validateArticleBody = () => {
    return this.state.articleBody != "";
  };

  postArticle = e => {
    //     e.preventDefault();
    //     const { articleTitle, articleBody } = this.state;
    //     fetch('http://127.0.0.1:8080/app/resources/jobs/addJob', {
    //         method: 'POST',
    //         headers : {
    //         }
    //     }).then((data)=> {
    //         console.log(data)
    //     }).catch((error)=> console.log(error))
  };

  render() {
    const { touched } = this.state;
    const articleTitleIsValid = this.validateArticleTitle();
    const articleBodyIsValid = this.validateArticleBody();
    const formIsValid = articleTitleIsValid && articleBodyIsValid;
    return (
      <Form onSubmit={this.postArticle}>
        <InputField
          name="articleTitle"
          type="text"
          label="Article Title"
          placeholder="Article Title"
          handleInputChange={this.handleInputChange}
          handleBlur={this.handleBlur}
        />
        {touched.articleTitle && !articleTitleIsValid && (
          <p>Article title is Required</p>
        )}
        <Textarea
          name="articleBody"
          label="ArticleBody"
          placeholder="Article Body"
          handleInputChange={this.handleInputChange}
          handleBlur={this.handleBlur}
        />
        {touched.articleBody && !articleBodyIsValid && (
          <p>Article Body is Required</p>
        )}

        {/* <Link to="/articles"> */}
        <DefaultButtonOutline disabled={!formIsValid}>
          Post Article
        </DefaultButtonOutline>
        {/* </Link> */}
      </Form>
    );
  }
}

export default PostArticleForm;
