import React, { useCallback, useRef } from "react";
import { Form } from "../styles/FormStyles";
import Input from "../common/components/Input";
import { REGISTER_URL } from "../common/helpers/apiUrls";
import Button from "../common/components/Button";
import { useForm } from "react-hook-form";

const EmployerRegisterationForm = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const email = useRef({});
  email.current = watch("email", "");

  const employerRegister = useCallback(data => {
    fetch(`${REGISTER_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        firstName: data.firstName,
        companyName: data.companyName,
        email: data.email,
        userPassword: data.password,
        userType: "Employer"
      },
      body: null
    })
      .then(data => {
        console.log("Request success: ", data);
      })
      .catch(error => {
        console.log("Request failure: ", error);
      });
  }, []);

  return (
    <Form onSubmit={handleSubmit(employerRegister)} hasBgColor noValidate>
      <Input
        type="text"
        placeholder="Company Name"
        name="companyName"
        register={register({ required: "Company Name is Required" })}
        error={errors.companyName}
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
      <Input
        type="email"
        placeholder="Confirm Email"
        name="confirmEmail"
        register={register({
          validate: value =>
            value === email.current || "The Email does not match"
        })}
        error={errors.confirmEmail}
      />

      <Input
        type="password"
        placeholder="Enter Password"
        name="password"
        register={register({
          required: "Password is Required",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        })}
        error={errors.password}
      />

      <Input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        register={register({
          validate: value =>
            value === password.current || "The password does not match"
        })}
        error={errors.confirmPassword}
      />
      <Button variant="primaryButton" text="Register" type="submit" />
    </Form>
  );
};

export default EmployerRegisterationForm;
