import React, { useState } from "react";
import { Form } from "../styles/FormStyles";
import { Row, Col } from "react-grid-system";
import Input from "../common/components/Input";
import Message from "../common/components/Message";
import { REGISTER_URL } from "../common/helpers/apiUrls";
import Button from "../common/components/Button";

const EmployerRegisterationForm = () => {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [bluredInputs, setBluredInputs] = useState(false);

  const setBlurred = e => {
    setBluredInputs({ ...bluredInputs, [e.target.name]: true });
  };

  const handlePasswordMatching = () => {
    return password === confirmPassword;
  };

  const handleEmailMatching = () => {
    return email === confirmEmail;
  };

  const validateFullName = () => {
    return fullName.length > 5;
  };

  const validateCompanyName = () => {
    return companyName !== "";
  };

  const validatePassword = () => {
    return password.length > 8;
  };

  const validateEmail = () => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  const register = e => {
    e.preventDefault();
    fetch(`${REGISTER_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        firstName: fullName,
        companyName,
        email,
        userPassword: password,
        userType: "Employer"
      },
      body: null
    })
      .then(data => {
        console.log("Request success: ", data);
        setIsRegistered(true);
      })
      .catch(error => {
        setIsRegistered(false);
        console.log("Request failure: ", error);
      });
  };

  const fullNameIsValid = validateFullName();
  const companyNameIsValid = validateCompanyName();
  const passwordIsValid = validatePassword();
  const emailIsValid = validateEmail();
  const emailMatching = handleEmailMatching();
  const passwordMatching = handlePasswordMatching();
  const formValid =
    fullNameIsValid &&
    companyNameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    passwordMatching &&
    emailMatching;

  return (
    <Form onSubmit={register} hasBgColor>
      <Row>
        <Col sm={4}>
          <Input
            type="text"
            placeholder="Full Name"
            name="fullName"
            handleInputChange={e => setFullName(e.target.value)}
            handleBlur={setBlurred}
          />
          {bluredInputs.fullName && !fullNameIsValid && (
            <Message
              text="Full name should be at least 5 characters"
              type="error"
            />
          )}
        </Col>
        <Col sm={4}>
          <Input
            type="text"
            placeholder="Company Name"
            name="companyName"
            handleInputChange={e => setCompanyName(e.target.value)}
            handleBlur={setBlurred}
          />
          {bluredInputs.companyName && !companyNameIsValid && (
            <Message text="Comapny Name is Required" type="error" />
          )}
        </Col>
        <Col sm={4}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            handleInputChange={e => setEmail(e.target.value)}
            handleBlur={setBlurred}
          />
          {bluredInputs.email && !emailIsValid && (
            <Message text="Email is not valid please fix" type="error" />
          )}
        </Col>
        <Col sm={4}>
          <Input
            type="email"
            placeholder="Confirm Email"
            name="confirmEmail"
            handleInputChange={e => setConfirmEmail(e.target.value)}
            handleBlur={handleEmailMatching}
          />
          {bluredInputs.confirmEmail &&
            bluredInputs.email &&
            !emailMatching && (
              <Message text="Email is not matching" type="error" />
            )}
        </Col>
        <Col sm={4}>
          <Input
            type="password"
            placeholder="Enter Password"
            name="password"
            handleInputChange={e => setPassword(e.target.value)}
            handleBlur={setBlurred}
          />
          {bluredInputs.password && !passwordIsValid && (
            <Message
              text="Password should be at least 8 characters"
              type="error"
            />
          )}
        </Col>
        <Col sm={4}>
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            handleInputChange={e => setConfirmPassword(e.target.value)}
            handleBlur={handlePasswordMatching}
          />
          {bluredInputs.passwordMatching && !passwordMatching && (
            <Message text="Password is not matching" type="error" />
          )}
        </Col>
        <Col col={2} align="right">
          <Button
            variant="primaryButton"
            text="Register"
            type="submit"
            disabled={!formValid}
          />
        </Col>
      </Row>
      {isRegistered && (
        <Message text="You Registered Successfully" type="success" />
      )}
    </Form>
  );
};

export default EmployerRegisterationForm;
