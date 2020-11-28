import React, { useContext } from "react";
import { MainButton } from "../styles/Button";
import Input from "../common/components/Input";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";
import { Form } from "../styles/FormStyles";
import AuthContext from "../common/context/AuthContext";
import { LOGIN_URL } from "../common/helpers/apiUrls";
import { LOGIN } from "../common/actions/Types";
import useDocumentTitle from "../common/hooks/useDocumentTitle";
import useForm from "../common/hooks/useForm";

const LoginForm = () => {
  const { AuthDispatch } = useContext(AuthContext);

  const login = () => {
    fetch(`${LOGIN_URL}`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
        email: values.email,
        pass: values.password
      },
      body: {}
    })
      .then(res => res.json())
      .then(data => {
        if (data[0].user_type) {
          let userData =
            {
              id: data[0].user_id,
              type: data[0].user_type,
              jobTitle: data[0].job_title
            } || {};
          window.localStorage.setItem("authenticated", true);
          window.localStorage.setItem("userData", JSON.stringify(userData));
          AuthDispatch({
            type: LOGIN,
            payload: {
              type: userData.type,
              userID: userData.id,
              jobTitle: userData.jobTitle
            }
          });

          switch (userData.type) {
            case "Candidate":
              navigate(`/candidate-dashboard/${userData.id}`);
              break;
            case "Employer":
              navigate(`/employer-dashboard/${userData.id}`);
              break;
            case "Admin":
              navigate(`/post-article`);
              break;
            default:
              console.log("hiii");
          }
        }
        window.location.reload();
      })
      .catch(error => console.log("Request failure: ", error));
  };

  useDocumentTitle("Hatching Talent | Login");
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    formIsValid
  } = useForm({ email: "", password: "" }, login);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Your Email"
        name="email"
        handleInputChange={handleChange}
        handleBlur={handleBlur}
        validationMessage={errors.email}
        variant="darkFormField"
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        handleInputChange={handleChange}
        handleBlur={handleBlur}
        validationMessage={errors.password}
        variant="darkFormField"
      />
      <Link
        style={{
          color: "#f7ac06",
          textAlign: "center",
          width: "100%",
          fontSize: "14px",
          marginTop: "8px",
          marginBottom: "16px"
        }}
        to="/forgot-password"
      >
        Forget Password?
      </Link>

      <MainButton type="submit" block disabled={!formIsValid}>
        Sign In
      </MainButton>
    </Form>
  );
};

export default LoginForm;
