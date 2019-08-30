import React, { Component } from "react";
import Select from "react-select";
import RadioInput from "../components/RadioInput";
import { InlineList, InlineListItem } from "../styles/ListStyle";
import {
  FacebookButton,
  LinkedInButton,
  SocialButtonText
} from "../styles/SocialButtonsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputField from "../components/InputField";
import { RadioInputHeading } from "../styles/RadioInputStyles";
import { DefaultButtonOutline } from "../styles/Button";
import { Form } from "../styles/FormStyles";
import { SelectStyles } from "../styles/SelectStyles";
import { Row, Col } from "react-grid-system";
import Message from "../components/Message";

class CandidateRegistertaionForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    phone: "",
    location: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    maritalStatus: "",
    privacy: "",
    passwordMatching: true,
    emailMatching: true,
    touched: {}
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSelectChange = ({ value }, action) => {
    this.setState({
      [action.name]: value
    });
  };

  handleBlur = ({ target: { name } }) => {
    this.setState({
      touched: { ...this.state.touched, [name]: true }
    });
  };

  handleSelectBlur = name => {
    this.setState({
      touched: { ...this.state.touched, [name]: true }
    });
  };

  validateFirstName = () => {
    return this.state.firstName != "";
  };

  validateLastName = () => {
    return this.state.lastName != "";
  };

  validateEmail = () => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email);
  };

  validateLocation = () => {
    return this.state.location != "";
  };

  validateDay = () => {
    return this.state.day != "";
  };

  validateMonth = () => {
    return this.state.month != "";
  };

  validateYear = () => {
    return this.state.year != "";
  };

  validatePassword = () => {
    return this.state.password.length > 8;
  };

  validateMobileNumber = () => {
    return this.state.phone.length > 8;
  };

  validateGender = () => {
    return this.state.gender != "";
  };

  validateMaritalStatus = () => {
    return this.state.maritalStatus != "";
  };

  validateProfilePrivacy = () => {
    return this.state.privacy != "";
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("after submit", this.state);
  };

  handlePasswordMatching = () => {
    const { password, confirmPassword } = this.state;
    if (password === confirmPassword) {
      this.setState({
        passwordMatching: true
      });
    } else {
      this.setState({
        passwordMatching: false
      });
    }
  };

  handleEmailMatching = () => {
    const { email, confirmEmail } = this.state;
    if (email === confirmEmail) {
      this.setState({
        emailMatching: true
      });
    } else {
      this.setState({
        emailMatching: false
      });
    }
  };

  render() {
    const jobLocationsOptions = [
      { value: "morocco", label: "Morocco" },
      { value: "vanilla", label: "Vanilla" },
      { value: "egypt", label: "Egypt" }
    ];
    const {
      selectedOption,
      passwordMatching,
      emailMatching,
      touched
    } = this.state;
    const firstNameIsValid = this.validateFirstName();
    const lastNameIsValid = this.validateLastName();
    const emailIsValid = this.validateEmail();
    const passwordIsValid = this.validatePassword();
    const genderIsValid = this.validateGender();
    const locationIsValid = this.validateLocation();
    const dayIsValid = this.validateDay();
    const monthIsValid = this.validateMonth();
    const yearIsValid = this.validateYear();
    const mobileNumberIsValid = this.validateMobileNumber();
    const maritalStatusIsValid = this.validateMaritalStatus();
    const profilePrivacyIsValid = this.validateProfilePrivacy();
    const formValid =
      firstNameIsValid &&
      lastNameIsValid &&
      emailIsValid &&
      passwordIsValid &&
      genderIsValid &&
      locationIsValid &&
      dayIsValid &&
      monthIsValid &&
      yearIsValid &&
      maritalStatusIsValid &&
      profilePrivacyIsValid &&
      mobileNumberIsValid;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col md={4}>
            <InputField
              type="text"
              placeholder="First Name"
              name="firstName"
              label="First Name"
              handleInputChange={this.handleInputChange}
              handleBlur={this.handleBlur}
            />
            {touched.firstName && !firstNameIsValid && (
              <p>First Name is Required</p>
            )}
          </Col>
          <Col md={4}>
            <InputField
              type="text"
              placeholder="Last Name"
              name="lastName"
              label="Last Name"
              handleInputChange={this.handleInputChange}
              handleBlur={this.handleBlur}
            />
            {touched.lastName && !lastNameIsValid && (
              <p>Last Name is Required</p>
            )}
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <InputField
              type="email"
              placeholder="Email"
              name="email"
              label="Email"
              handleInputChange={this.handleInputChange}
              handleBlur={this.handleBlur}
            />
            {touched.email && !emailIsValid && (
              <p>Please enter a valid Email Address</p>
            )}
          </Col>
          <Col md={4}>
            <InputField
              type="email"
              placeholder="Confirm Email"
              name="confirmEmail"
              label="Confirm Email"
              handleInputChange={this.handleInputChange}
              onBlur={this.handleEmailMatching}
            />
            {!emailMatching && (
              <Message text="Email is not matching" type="error" />
            )}
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <InputField
              type="password"
              placeholder="Password"
              name="password"
              label="password"
              handleInputChange={this.handleInputChange}
              handleBlur={this.handleBlur}
            />
            {touched.password && !passwordIsValid && (
              <p>Password should be at least 8 characters</p>
            )}
          </Col>
          <Col md={4}>
            <InputField
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              label="Confirm Password"
              handleInputChange={this.handleInputChange}
              onBlur={this.handlePasswordMatching}
            />
            {!passwordMatching && (
              <Message text="Password is not matching" type="error" />
            )}
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="form__group">
              <label className="form__label">Your Location</label>
              <Select
                options={jobLocationsOptions}
                placeholder="Select Location"
                styles={SelectStyles}
                name="location"
                value={selectedOption}
                onChange={this.handleSelectChange}
                onBlur={this.handleSelectBlur.bind(this, "location")}
              />
              {touched.location && !locationIsValid && (
                <p>Location is Required</p>
              )}
            </div>
          </Col>
          <Col md={4}>
            <InputField
              type="tel"
              placeholder="Phone"
              name="phone"
              label="Mobile Number"
              handleInputChange={this.handleInputChange}
              handleBlur={this.handleBlur}
            />
            {touched.phone && !mobileNumberIsValid && (
              <p>Mobile Number should be at least 8 characters</p>
            )}
          </Col>
        </Row>
        <label className="form__label">Birth Date</label>
        <Row>
          <Col md={4}>
            <Select
              options={jobLocationsOptions}
              placeholder="Day"
              styles={SelectStyles}
              name="day"
              onChange={this.handleSelectChange}
              onBlur={this.handleSelectBlur.bind(this, "day")}
            />
            {touched.day && !dayIsValid && <p>Day is Required</p>}
          </Col>
          <Col md={4}>
            <Select
              options={jobLocationsOptions}
              placeholder="Month"
              styles={SelectStyles}
              name="month"
              onChange={this.handleSelectChange}
              onBlur={this.handleSelectBlur.bind(this, "month")}
            />
            {touched.month && !monthIsValid && <p>Month is Required</p>}
          </Col>
          <Col md={4}>
            <Select
              options={jobLocationsOptions}
              placeholder="Year"
              styles={SelectStyles}
              name="year"
              onChange={this.handleSelectChange}
              onBlur={this.handleSelectBlur.bind(this, "year")}
            />
            {touched.year && !yearIsValid && <p>Year is Required</p>}
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <RadioInputHeading>Gender</RadioInputHeading>
            <InlineList>
              <InlineListItem>
                <RadioInput
                  label="Male"
                  name="gender"
                  value="male"
                  handleInputChange={this.handleInputChange}
                />
              </InlineListItem>
              <InlineListItem>
                <RadioInput
                  label="Female"
                  name="gender"
                  value="female"
                  handleInputChange={this.handleInputChange}
                />
              </InlineListItem>
            </InlineList>
            {/* {!genderIsValid && <p>Please Select Gender</p>} */}
          </Col>
          <Col md={4}>
            <RadioInputHeading>Marital Status</RadioInputHeading>
            <InlineList>
              <InlineListItem>
                <RadioInput
                  label="Single"
                  name="maritalStatus"
                  value="single"
                  handleInputChange={this.handleInputChange}
                />
              </InlineListItem>
              <InlineListItem>
                <RadioInput
                  label="Married"
                  name="maritalStatus"
                  value="married"
                  handleInputChange={this.handleInputChange}
                />
              </InlineListItem>
            </InlineList>
            {/* {!maritalStatusIsValid && <p>Please Select Marital Status</p>} */}
          </Col>
          <Col md={4}>
            <RadioInputHeading>Profile Privacy</RadioInputHeading>
            <InlineList>
              <InlineListItem>
                <RadioInput
                  label="Private"
                  name="privacy"
                  value="private"
                  handleInputChange={this.handleInputChange}
                />
              </InlineListItem>
              <InlineListItem>
                <RadioInput
                  label="Public"
                  name="privacy"
                  value="public"
                  handleInputChange={this.handleInputChange}
                />
              </InlineListItem>
            </InlineList>
            {/* {!profilePrivacyIsValid && <p>Please Select Your profile Privacy</p>} */}
          </Col>
          {/* <Col md={4}>
                        <p style={{ fontSize: '26px', marginBottom: '5px', marginTop: '15px' }}>Instant Connect</p>
                        <p style={{ fontSize: '12px', marginBottom: '10px' }}>Confidential login. no announcements</p>
                        <FacebookButton type="button"><FontAwesomeIcon icon={['fab', 'facebook-f']} className="social-icon"></FontAwesomeIcon><SocialButtonText>Connect with Facebook</SocialButtonText><FontAwesomeIcon icon="chevron-right" style={{ display: 'inline-block', verticalAlign: 'middle' }}></FontAwesomeIcon></FacebookButton>
                        <LinkedInButton type="button"><FontAwesomeIcon icon={['fab', 'linkedin-in']} className="social-icon"></FontAwesomeIcon><SocialButtonText>Connect with Linkedin</SocialButtonText><FontAwesomeIcon icon="chevron-right" style={{ display: 'inline-block', verticalAlign: 'middle' }}></FontAwesomeIcon></LinkedInButton>
                    </Col> */}
        </Row>
        <DefaultButtonOutline type="submit" disabled={!formValid}>
          Register
        </DefaultButtonOutline>
      </Form>
    );
  }
}

export default CandidateRegistertaionForm;
