import React, { useState } from "react";
import Select from "react-select";
import RadioInput from "../components/RadioInput";
import { InlineList, InlineListItem } from "../styles/ListStyle";
// import {
//   FacebookButton,
//   LinkedInButton,
//   SocialButtonText
// } from "../styles/SocialButtonsStyles";
import SelectLookup from "./SelectLookup";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputField from "../components/InputField";
import { RadioInputHeading } from "../styles/RadioInputStyles";
import { DefaultButtonOutline } from "../styles/Button";
import { Form } from "../styles/FormStyles";
import { SelectStyles } from "../styles/SelectStyles";
import { Row, Col } from "react-grid-system";
import Message from "../components/Message";
import { REGISTER_URL } from "../helpers/apiUrls";

const CandidateRegistertaionForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [privacy, setPrivacy] = useState("");
  const [passwordMatching, setPasswordMatching] = useState(true);
  const [emailMatching, setEmailMatching] = useState(true);
  const [bluredInputs, setBluredInputs] = useState(false);

  const validateFirstName = () => {
    return firstName != "";
  };

  const validateLastName = () => {
    return lastName != "";
  };

  const validateEmail = () => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  const validateLocation = () => {
    return location != "";
  };

  const validateDay = () => {
    return day != "";
  };

  const validateMonth = () => {
    return month != "";
  };

  const validateYear = () => {
    return year != "";
  };

  const validatePassword = () => {
    return password.length > 8;
  };

  const validateJobTitle = () => {
    return jobTitle != "";
  };

  const validateMobileNumber = () => {
    return phone.length > 8;
  };

  const validateGender = () => {
    return gender != "";
  };

  const validateMaritalStatus = () => {
    return maritalStatus != "";
  };

  const validateProfilePrivacy = () => {
    return privacy != "";
  };

  const handleJobLocationChange = ({ value }) => {
    setLocation({ value });
  };

  const handleDayChange = selectedOption => {
    setDay({ selectedOption });
  };

  const handleMonthChange = selectedOption => {
    setMonth({ selectedOption });
  };

  const handleYearChange = selectedOption => {
    setYear({ selectedOption });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${REGISTER_URL}`, {
      method: "POST",
      headers: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        userPassword: password,
        userType: "Candidate",
        adress: location,
        gender: gender,
        maritalStatus: maritalStatus,
        profilePrivacy: privacy,
        phoneNo: phone,
        jobTitle: jobTitle
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  const handlePasswordMatching = () => {
    if (password === confirmPassword) {
      setPasswordMatching(true);
    } else {
      setPasswordMatching(false);
    }
  };

  const handleEmailMatching = () => {
    if (email === confirmEmail) {
      setEmailMatching(true);
    } else {
      setEmailMatching(false);
    }
  };

  const setBlurred = e => {
    setBluredInputs({ ...bluredInputs, [e.target.name]: true });
  };

  const jobLocationsOptions = [
    { value: "morocco", label: "Morocco" },
    { value: "vanilla", label: "Vanilla" },
    { value: "egypt", label: "Egypt" }
  ];

  const firstNameIsValid = validateFirstName();
  const lastNameIsValid = validateLastName();
  const emailIsValid = validateEmail();
  const passwordIsValid = validatePassword();
  const jobTitleIsValid = validateJobTitle();
  const genderIsValid = validateGender();
  const locationIsValid = validateLocation();
  const dayIsValid = validateDay();
  const monthIsValid = validateMonth();
  const yearIsValid = validateYear();
  const mobileNumberIsValid = validateMobileNumber();
  const maritalStatusIsValid = validateMaritalStatus();
  const profilePrivacyIsValid = validateProfilePrivacy();
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
    mobileNumberIsValid &&
    jobTitleIsValid;

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={4}>
          <InputField
            type="text"
            placeholder="First Name"
            name="firstName"
            label="First Name"
            handleInputChange={e => setFirstName(e.target.value)}
            handleBlur={setBlurred}
          />
          {bluredInputs.firstName && !firstNameIsValid && (
            <Message text="First Name is Required" type="error"></Message>
          )}
        </Col>
        <Col md={4}>
          <InputField
            type="text"
            placeholder="Last Name"
            name="lastName"
            label="Last Name"
            handleInputChange={e => setLastName(e.target.value)}
            handleBlur={setBlurred}
          />
          {bluredInputs.lastName && !lastNameIsValid && (
            <Message text="Last Name is Required" type="error"></Message>
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
            handleInputChange={e => setEmail(e.target.value)}
            handleBlur={setBlurred}
          />
          {bluredInputs.email && !emailIsValid && (
            <Message
              text="Please enter a valid Email Address"
              type="error"
            ></Message>
          )}
        </Col>
        <Col md={4}>
          <InputField
            type="email"
            placeholder="Confirm Email"
            name="confirmEmail"
            label="Confirm Email"
            handleInputChange={e => setConfirmEmail(e.target.value)}
            onBlur={handleEmailMatching}
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
            handleInputChange={e => setPassword(e.target.value)}
            handleBlur={setBlurred}
          />
          {bluredInputs.password && !passwordIsValid && (
            <Message
              text="Password should be at least 8 characters"
              type="error"
            ></Message>
          )}
        </Col>
        <Col md={4}>
          <InputField
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            label="Confirm Password"
            handleInputChange={e => setConfirmPassword(e.target.value)}
            onBlur={handlePasswordMatching}
          />
          {!passwordMatching && (
            <Message text="Password is not matching" type="error" />
          )}
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <InputField
            type="text"
            placeholder="Job Title"
            name="jobTitle"
            label="JobTitle"
            handleInputChange={e => setJobTitle(e.target.value)}
            onBlur={setBlurred}
          />
          {!bluredInputs.jobTitle && !jobTitleIsValid && (
            <Message text="Job title is Required" type="error" />
          )}
        </Col>
        <Col md={4}>
          <div className="form__group">
            <label className="form__label">Your Location</label>
            <SelectLookup
              name="jobLocation"
              placeholder="Select Job Location"
              typeId="Locations"
              handleSelectChange={handleJobLocationChange}
              type="dark"
            ></SelectLookup>
            {bluredInputs.location && !locationIsValid && (
              <Message text="Location is Required" type="error" />
            )}
          </div>
        </Col>
        <Col md={4}>
          <InputField
            type="tel"
            placeholder="Phone"
            name="phone"
            label="Mobile Number"
            handleInputChange={e => setPhone(e.target.value)}
            handleBlur={setBlurred}
          />
          {bluredInputs.phone && !mobileNumberIsValid && (
            <Message
              text="Mobile Number should be at least 8 characters"
              type="error"
            />
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
            onChange={handleDayChange}
            // onBlur={handleSelectBlur.bind(this, "day")}
          />
          {bluredInputs.day && !dayIsValid && (
            <Message text="Day is Required" type="error" />
          )}
        </Col>
        <Col md={4}>
          <Select
            options={jobLocationsOptions}
            placeholder="Month"
            styles={SelectStyles}
            name="month"
            onChange={handleMonthChange}
            // onBlur={handleSelectBlur.bind(this, "month")}
          />
          {bluredInputs.month && !monthIsValid && (
            <Message text="Month is Required" type="error" />
          )}
        </Col>
        <Col md={4}>
          <Select
            options={jobLocationsOptions}
            placeholder="Year"
            styles={SelectStyles}
            name="year"
            onChange={handleYearChange}
            // onBlur={handleSelectBlur.bind(this, "year")}
          />
          {bluredInputs.year && !yearIsValid && (
            <Message text="Year is Required" type="error" />
          )}
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
                handleInputChange={e => setGender("M")}
              />
            </InlineListItem>
            <InlineListItem>
              <RadioInput
                label="Female"
                name="gender"
                value="female"
                handleInputChange={e => setGender(7)}
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
                handleInputChange={e => setMaritalStatus(8)}
              />
            </InlineListItem>
            <InlineListItem>
              <RadioInput
                label="Married"
                name="maritalStatus"
                value="married"
                handleInputChange={e => setMaritalStatus("M")}
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
                handleInputChange={e => setPrivacy("N")}
              />
            </InlineListItem>
            <InlineListItem>
              <RadioInput
                label="Public"
                name="privacy"
                value="public"
                handleInputChange={e => setPrivacy(9)}
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
};

export default CandidateRegistertaionForm;
