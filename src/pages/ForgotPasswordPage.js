import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import SectionHeading from "../components/SectionHeading";
import InputField from "../components/InputField";
import { DefaultButtonOutline } from "../styles/Button";
import { Link } from "@reach/router";

class ForgotPasswordPage extends Component {
  render() {
    return (
      <div className="main-colored">
        <Container>
          <SectionHeading boldText="Forgot" normalText="Password" />
          <form action="">
            <Row>
              <Col sm={4}>
                <InputField
                  type="email"
                  placeholder="Enter your Email Address"
                  name="email"
                />
              </Col>
              <Col sm={4}>
                <Link to="/reset-password">
                  <DefaultButtonOutline>Send to my email</DefaultButtonOutline>
                </Link>
              </Col>
            </Row>
            <Link to="/reset-password" />
          </form>
        </Container>
      </div>
    );
  }
}

export default ForgotPasswordPage;
