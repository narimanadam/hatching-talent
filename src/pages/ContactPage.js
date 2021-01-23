import React from "react";
import Input from "../common/components/Input";
import Textarea from "../common/components/Textarea";
import { Form } from "../styles/FormStyles";
import PageHeader from "../common/components/PageHeader";
import useDocumentTitle from "../common/hooks/useDocumentTitle";
import Button from "../common/components/Button";
import withMainLayout from "../Layout/MainLayout/WithMainLayout";
import { Container } from "react-grid-system";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  useDocumentTitle("Contact Us | Hatching Talent");
  const { register, handleSubmit, errors } = useForm();

  const sendMessage = data => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        fullName: data.fullName,
        email: data.email,
        message: data.message
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  return (
    <Container>
      <PageHeader boldText="Contact" normalText="Us">
        <Form action="" onSubmit={handleSubmit(sendMessage)} hasBgColor>
          <Input
            type="text"
            placeholder="Full Name"
            name="fullname"
            register={register({ required: "Full Name is Required" })}
            error={errors.fullname}
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={register({
              required: "Email is required.",
              pattern: {
                value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                message: "Invalid Email Format"
              }
            })}
            error={errors.email}
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            register={register({
              required: "Message is Required",
              minLength: {
                value: 8,
                message: "Message should be at least 20 characters"
              }
            })}
            error={errors.message}
          />
          <Button text="Send Message" variant="primaryButton" type="submit" />
        </Form>
      </PageHeader>
    </Container>
  );
};

export default withMainLayout(ContactPage);
