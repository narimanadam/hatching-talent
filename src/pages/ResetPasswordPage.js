import React from "react";
import { Container, Row, Col } from "react-grid-system";
import SectionHeading from "../components/SectionHeading";
import InputField from "../components/InputField";
import { DefaultButtonOutline } from "../styles/Button";
import { Link } from "@reach/router";

const ResetPasswordPage = () => {
  return (
    <div className="main-colored">
      <Container>
        <SectionHeading boldText="Reset" normalText="Password" />
        <form action="">
          <Row>
            <Col sm={4}>
              <InputField
                type="email"
                placeholder="New Password"
                name="newPassword"
              />
            </Col>
            <Col sm={4}>
              <InputField
                type="email"
                placeholder="Confirm Password"
                name="confirmPassword"
              />
            </Col>
            <Col sm={4}>
              <Link to="/reset-success">
                <DefaultButtonOutline>Reset Password</DefaultButtonOutline>
              </Link>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default ResetPasswordPage;
