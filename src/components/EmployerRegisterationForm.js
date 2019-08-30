import React, { Component } from "react";
import { Form } from "../styles/FormStyles";
import { Row, Col } from "react-grid-system";
import { DefaultButtonOutline } from "../styles/Button";
import InputField from "../components/InputField";
import Message from "../components/Message";

class EmployerRegisterationForm extends Component {
  state = {
    fullName: "",
    companyName: "",
    email: "",
    password: "",
    isRegistered: false,
    confirmEmail: "",
    touched: {}
  };

  handlePasswordMatching = () => {
    const { password, confirmPassword } = this.state;
    return password === confirmPassword;
  };

  handleEmailMatching = () => {
    const { email, confirmEmail } = this.state;
    return email === confirmEmail;
  };

  handleBlur = ({ target: { name } }) => {
    this.setState({
      touched: { ...this.state.touched, [name]: true }
    });
  };

  validateFullName = () => {
    return this.state.fullName.length > 5;
  };

  validateCompanyName = () => {
    return this.state.companyName !== "";
  };

  validatePassword = () => {
    return this.state.password.length > 8;
  };

  validateEmail = () => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email);
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  register = e => {
    e.preventDefault();
    fetch("http://127.0.0.1:8080/app/resources/users/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        firstName: this.state.fullName,
        companyName: this.state.companyName,
        email: this.state.email,
        userPassword: this.state.password,
        userType: "Employer"
      },
      body: null
    })
      .then(data => {
        console.log("Request success: ", data);
        this.setState({
          isRegistered: true
        });
      })
      .catch(error => {
        this.setState({
          isRegistered: false
        });
        console.log("Request failure: ", error);
      });
  };

  render() {
    const { isRegistered, touched } = this.state;
    const fullNameIsValid = this.validateFullName();
    const companyNameIsValid = this.validateCompanyName();
    const passwordIsValid = this.validatePassword();
    const emailIsValid = this.validateEmail();
    const emailMatching = this.handleEmailMatching();
    const passwordMatching = this.handlePasswordMatching();
    const formValid =
      fullNameIsValid &&
      companyNameIsValid &&
      emailIsValid &&
      passwordIsValid &&
      passwordMatching &&
      emailMatching;

    return (
      <Form onSubmit={this.register}>
        <Row>
          <Col sm={4}>
            <InputField
              type="text"
              placeholder="Full Name"
              name="fullName"
              handleInputChange={this.handleInputChange}
              handleBlur={this.handleBlur}
            />
            {touched.fullName && !fullNameIsValid && (
              <p>Full name should be at least 5 characters</p>
            )}
          </Col>
          <Col sm={4}>
            <InputField
              type="text"
              placeholder="Company Name"
              name="companyName"
              handleInputChange={this.handleInputChange}
              handleBlur={this.handleBlur}
            />
            {touched.companyName && !companyNameIsValid && (
              <p>Comapny Name is Required</p>
            )}
          </Col>
          <Col sm={4}>
            <InputField
              type="email"
              placeholder="Email"
              name="email"
              handleInputChange={this.handleInputChange}
              handleBlur={this.handleBlur}
            />
            {touched.email && !emailIsValid && (
              <p>Email is not valid please fix</p>
            )}
          </Col>
          <Col sm={4}>
            <InputField
              type="email"
              placeholder="Confirm Email"
              name="confirmEmail"
              handleInputChange={this.handleInputChange}
              handleBlur={this.handleEmailMatching}
            />
            {touched.confirmEmail && touched.email && !emailMatching && (
              <Message text="Email is not matching" type="error" />
            )}
          </Col>
          <Col sm={4}>
            <InputField
              type="password"
              placeholder="Enter Password"
              name="password"
              handleInputChange={this.handleInputChange}
              handleBlur={this.handleBlur}
            />
            {touched.password && !passwordIsValid && (
              <p>Password should be at least 8 characters</p>
            )}
          </Col>
          <Col sm={4}>
            <InputField
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              handleInputChange={this.handleInputChange}
              handleBlur={this.handlePasswordMatching}
            />
            {touched.passwordMatching && !passwordMatching && (
              <Message text="Password is not matching" type="error" />
            )}
          </Col>
          <Col col={2} align="right">
            <DefaultButtonOutline type="submit" disabled={!formValid}>
              Register
            </DefaultButtonOutline>
          </Col>
        </Row>
        {isRegistered && (
          <p className="message message-success">You Registered Successfully</p>
        )}
      </Form>
    );
  }
}

export default EmployerRegisterationForm;
