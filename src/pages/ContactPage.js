import React, { useState } from "react";
import { Row, Col } from "react-grid-system";
import Input from "../common/components/Input";
import { DefaultButtonOutline } from "../styles/Button";
import Textarea from "../common/components/Textarea";
import { Form } from "../styles/FormStyles";
import Message from "../common/components/Message";
import PageHeader from "../common/components/PageHeader";
import useDocumentTitle from "../common/hooks/useDocumentTitle";
import Button from "../common/components/Button";
import useForm from "../common/hooks/useForm";
import withMainLayout from "../Layout/MainLayout/WithMainLayout";

const ContactPage = () => {
  useDocumentTitle("Contact Us | Hatching Talent");

  const sendMessage = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        fullName: values.fullName,
        email: values.email,
        message: values.message
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    disabled
  } = useForm({ fullName: "", email: "", message: "" }, sendMessage);

  return (
    <PageHeader boldText="Contact" normalText="Us">
      <Form action="" onSubmit={handleSubmit} hasBgColor>
        <Input
          type="text"
          placeholder="Full Name"
          name="fullname"
          handleInputChange={handleChange}
          handleBlur={handleBlur}
          variant="darkFormField"
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          handleInputChange={handleChange}
          handleBlur={handleBlur}
          variant="darkFormField"
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          handleInputChange={handleChange}
          handleBlur={handleBlur}
          variant="darkFormField"
        />
        <Button
          text="Send Message"
          variant="primaryButton"
          type="submit"
          disabled={disabled}
        />
      </Form>
    </PageHeader>
  );
};

export default withMainLayout(ContactPage);
