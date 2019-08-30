import React, { Component } from "react";
import { DefaultButtonOutline } from "../styles/Button";
import InputField from "../components/InputField";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";
import { Row, Col } from "react-grid-system";
import { Form } from "../styles/FormStyles";
import AuthContext from "../context/AuthContext";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  // componentDidMount() {
  //   this.props.context.checkUserStatus(localStorage.getItem("isLoggedIn"));
  // }

  login = e => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", true);
    fetch("http://127.0.0.1:8080/app/resources/users/CheckUser", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
        email: this.state.email,
        pass: this.state.password
      },
      body: null
    })
      .then(resp => resp.json()) // Transform the data into json
      .then(data => {
        console.log(data);
        if (data) {
          this.setState({
            isLoggedIn: true
          });
          navigate("/candidate-dashboard");
          console.log("authorized");
        } else {
          this.setState({
            isLoggedIn: false
          });
          console.log("not authorized");
        }
      })
      .catch(function(error) {
        console.log("Request failure: ", error);
      });
  };
  render() {
    return (
      <Form onSubmit={this.login}>
        <Row>
          <Col sm={4}>
            <InputField
              type="text"
              placeholder="Your Email"
              name="email"
              handleInputChange={this.handleInputChange}
            />
          </Col>
          <Col sm={4}>
            <InputField
              type="password"
              placeholder="Password"
              name="password"
              handleInputChange={this.handleInputChange}
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
      </Form>
    );
  }
}
LoginForm.contextType = AuthContext;
export default LoginForm;
