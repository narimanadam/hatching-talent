import React from "react";
import { Row, Col } from "react-grid-system";
import Input from "../common/components/Input";
import { DefaultButtonOutline } from "../styles/Button";
import { Link } from "@reach/router";
import PageHeader from "../common/components/PageHeader";
import useDocumentTitle from "../common/hooks/useDocumentTitle";
import useForm from "../common/hooks/useForm";

const ForgotPasswordPage = () => {
  useDocumentTitle("Forgot Password");
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    disabled
  } = useForm({ email: "" }, submitEmail);

  const submitEmail = () => {
    console.log("submitted forgot password");
  };
  return (
    <PageHeader boldText="Forgot" normalText="Password">
      <form action="" onSubmit={submitEmail}>
        <Row>
          <Col sm={4}>
            <Input
              type="email"
              placeholder="Enter your Email Address"
              name="email"
              handleInputChange={handleChange}
              handleBlur={handleBlur}
              validationMessage={errors.email}
            />
          </Col>
          <Col sm={4}>
            {/* <Link to="/reset-password"> */}
            <DefaultButtonOutline type="submit" disabled={disabled}>
              Send to my email
            </DefaultButtonOutline>
            {/* </Link> */}
          </Col>
        </Row>
        <Link to="/reset-password" />
      </form>
    </PageHeader>
  );
};

export default ForgotPasswordPage;
