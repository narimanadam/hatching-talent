import React from "react";
import { Flex, Box } from "reflexbox";

import SelectLookup from "./SelectLookup";
import Input from "../common/components/Input";
import { Button } from "../styles/Button";
import { Form } from "../styles/FormStyles";
import { REGISTER_URL } from "../common/helpers/apiUrls";
import useForm from "../common/hooks/useForm";

const CandidateRegistertaionForm = () => {
  const CandidateRegister = () => {
    fetch(`${REGISTER_URL}`, {
      method: "POST",
      headers: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        userPassword: values.password,
        userType: "Candidate",
        adress: values.location,
        phoneNo: values.mobileNumber,
        jobTitle: values.jobTitle
      }
    })
      .then(res => res.json())
      .then(data => window.location.reload())
      .catch(error => console.log(error));
  };

  // const handlePasswordMatching = () => {
  //   if (password === confirmPassword) {
  //     setPasswordMatching(true);
  //   } else {
  //     setPasswordMatching(false);
  //   }
  // };

  // const handleEmailMatching = () => {
  //   if (email === confirmEmail) {
  //     setEmailMatching(true);
  //   } else {
  //     setEmailMatching(false);
  //   }
  // };

  const {
    values,
    errors,
    handleChange,
    handleSelectChange,
    handleBlur,
    handleSelectBlur,
    handleSubmit,
    formIsValid
  } = useForm(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      jobTitle: "",
      location: "",
      mobileNumber: ""
    },
    CandidateRegister
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Flex flexWrap="wrap" justifyContent="space-between">
        <Box width={[1, 1 / 2]}>
          <Input
            type="text"
            placeholder="First Name"
            name="firstName"
            label="First Name"
            handleInputChange={handleChange}
            handleBlur={handleBlur}
            validationMessage={errors.firstName}
            variant="darkFormField"
          />
        </Box>
        <Box width={[1, 1 / 2]}>
          <Input
            type="text"
            placeholder="Last Name"
            name="lastName"
            label="Last Name"
            handleInputChange={handleChange}
            handleBlur={handleBlur}
            validationMessage={errors.lastName}
            variant="darkFormField"
          />
        </Box>
        <Box width={[1, 1 / 2]}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            label="Email"
            handleInputChange={handleChange}
            handleBlur={handleBlur}
            validationMessage={errors.email}
            variant="darkFormField"
          />
        </Box>
        <Box width={[1, 1 / 2]}>
          <Input
            type="email"
            placeholder="Confirm Email"
            name="confirmEmail"
            label="Confirm Email"
            // handleInputChange={handleChange}
            // onBlur={handleEmailMatching}
            variant="darkFormField"
          />
        </Box>
        <Box width={[1, 1 / 2]}>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            label="password"
            handleInputChange={handleChange}
            handleBlur={handleBlur}
            validationMessage={errors.password}
            variant="darkFormField"
          />
        </Box>
        <Box width={[1, 1 / 2]}>
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            label="Confirm Password"
            // handleInputChange={e => setConfirmPassword(e.target.value)}
            // onBlur={handlePasswordMatching}
            variant="darkFormField"
          />
        </Box>
        <Box width={[1, 1 / 2]}>
          <Input
            type="text"
            placeholder="Job Title"
            name="jobTitle"
            label="JobTitle"
            handleInputChange={handleChange}
            handleBlur={handleBlur}
            validationMessage={errors.jobTitle}
            variant="darkFormField"
          />
        </Box>
        <Box width={[1, 1 / 2]}>
          <div className="form__group">
            <label className="form__label">Your Location</label>
            <SelectLookup
              name="location"
              placeholder="Select Job Location"
              typeId="Locations"
              validationMessage={errors.location}
              handleSelectChange={handleSelectChange}
              handleSelectBlur={handleSelectBlur}
            ></SelectLookup>
          </div>
        </Box>
        <Box width={[1, 1 / 2]}>
          <Input
            type="tel"
            placeholder="Phone"
            name="mobileNumber"
            label="Mobile Number"
            handleInputChange={handleChange}
            handleBlur={handleBlur}
            validationMessage={errors.mobileNumber}
            variant="darkFormField"
          />
        </Box>
      </Flex>
      <Button type="submit" disabled={!formIsValid}>
        Register
      </Button>
    </Form>
  );
};

export default CandidateRegistertaionForm;
