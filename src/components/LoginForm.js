import React, { useState, useContext } from "react";
import { DefaultButtonOutline } from "../styles/Button";
import InputField from "../components/InputField";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";
import { Row, Col } from "react-grid-system";
import { Form } from "../styles/FormStyles";
import AuthContext from "../context/AuthContext";
import { LOGIN_URL } from "../helpers/apiUrls";
import Message from "../components/Message";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useContext(AuthContext);
  const [loginError, setLoginError] = useState(false);

  const login = e => {
    e.preventDefault();

    fetch(`${LOGIN_URL}`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
        email: email,
        pass: password
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
          setAuthenticated(
            Object.assign({}, authenticated, {
              isLoggedIn: true,
              type: userData.type,
              userID: userData.id,
              jobTitle: userData.jobTitle
            })
          );
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
        } else {
          setLoginError(true);
        }
      })
      .catch(function(error) {
        console.log("Request failure: ", error);
      });
  };
  return (
    <Form onSubmit={login}>
      <Row>
        <Col sm={4}>
          <InputField
            type="text"
            placeholder="Your Email"
            name="email"
            handleInputChange={e => setEmail(e.target.value)}
          />
        </Col>
        <Col sm={4}>
          <InputField
            type="password"
            placeholder="Password"
            name="password"
            handleInputChange={e => setPassword(e.target.value)}
          />
          <Link
            style={{
              color: "#fff",
              textAlign: "left",
              display: "block",
              fontSize: "14px"
            }}
            to="/forgot-password"
          >
            Forget Password?
          </Link>
        </Col>

        <Col col={2} align="left">
          <DefaultButtonOutline type="submit">Sign In</DefaultButtonOutline>
        </Col>
      </Row>
      {loginError && (
        <Message type="error" text="Email or Password is not correct" />
      )}
    </Form>
  );
};

export default LoginForm;
