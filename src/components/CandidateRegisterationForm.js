import React, { useEffect, useRef, useState } from "react";
import { Flex, Box } from "reflexbox";
import Select from "react-select";
import SelectLookup from "./SelectLookup";
import Input from "../common/components/Input";
import Button from "../common/components/Button";
import { Form } from "../styles/FormStyles";
import { GET_LOOKUPs, REGISTER_URL } from "../common/helpers/apiUrls";
import { useForm, Controller } from "react-hook-form";
import { SelectStyles } from "../styles/SelectStyles";
import Message from "../common/components/Message";

const CandidateRegistertaionForm = () => {
  const { register, handleSubmit, errors, watch, control } = useForm();
  const [locationsLookupValues, setLocationsLookupValues] = useState([]);
  let locationSelectOptions = [];
  const password = useRef({});
  password.current = watch("password", "");

  const email = useRef({});
  email.current = watch("email", "");

  const getLocationsLookups = type => {
    fetch(`${GET_LOOKUPs}`, {
      method: "POST",
      headers: {
        lookTypeName: "Locations"
      }
    })
      .then(res => res.json())
      .then(data => setLocationsLookupValues(data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getLocationsLookups();
  }, []);

  const CandidateRegister = data => {
    fetch(`${REGISTER_URL}`, {
      method: "POST",
      headers: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        userPassword: data.password,
        userType: "Candidate",
        adress: data.location,
        jobTitle: data.jobTitle
      }
    })
      .then(res => res.json())
      .then(data => window.location.reload())
      .catch(error => console.log(error));
  };

  locationSelectOptions = locationsLookupValues.map(option => ({
    value: option.value,
    label: option.value
  }));

  return (
    <Form onSubmit={handleSubmit(CandidateRegister)}>
      <Flex flexWrap="wrap" justifyContent="space-between">
        <Box width={[1, 1 / 2]}>
          <Input
            type="text"
            placeholder="First Name"
            name="firstName"
            label="First Name"
            variant="darkFormField"
            register={register({ required: "First Name is Required" })}
            error={errors.firstName}
          />
        </Box>
        <Box width={[1, 1 / 2]}>
          <Input
            type="text"
            placeholder="Last Name"
            name="lastName"
            label="Last Name"
            register={register({ required: "Last Name is Required" })}
            error={errors.lastName}
          />
        </Box>
        <Box width={[1, 1 / 2]}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            label="Email"
            register={register({
              required: "Email is required.",
              pattern: {
                value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                message: "Invalid Email Format"
              }
            })}
            error={errors.email}
          />
        </Box>
        <Box width={[1, 1 / 2]}>
          <Input
            type="email"
            placeholder="Confirm Email"
            name="confirmEmail"
            label="Confirm Email"
            register={register({
              validate: value =>
                value === email.current || "The Email does not match"
            })}
            error={errors.confirmEmail}
          />
        </Box>
        <Box width={[1, 1 / 2]}>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            label="password"
            register={register({
              required: "Password is Required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
              }
            })}
            error={errors.password}
          />
        </Box>
        <Box width={[1, 1 / 2]}>
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            label="Confirm Password"
            register={register({
              validate: value =>
                value === password.current || "The password does not match"
            })}
            error={errors.confirmPassword}
          />
        </Box>
        <Box width={[1, 1 / 2]}>
          <Input
            type="text"
            placeholder="Job Title"
            name="jobTitle"
            label="JobTitle"
            register={register({ required: "Job Title is Required" })}
            error={errors.jobTitle}
          />
        </Box>
        <Box width={[1, 1 / 2]}>
          <div className="form__group">
            <label className="form__label">Job Location</label>
            <Controller
              name="jobLocation"
              control={control}
              options={locationSelectOptions}
              as={Select}
              styles={SelectStyles}
              rules={{ required: "Job Location is Required" }}
            />
            {errors.jobLocation && (
              <Message type="error" text={errors.jobLocation.message} />
            )}
          </div>
        </Box>
        {/* <Box width={[1, 1 / 2]}>
          <Controller
            as={<SelectLookup label="Your Location" />}
            typeId="Locations"
            name="location"
            rules={{ required: "Location is required" }}
            control={control}
            error={errors.location}
            defaultValue=""
          />
        </Box> */}
      </Flex>
      <Button text="Register" type="submit" variant="primaryButton" />
    </Form>
  );
};

export default CandidateRegistertaionForm;
