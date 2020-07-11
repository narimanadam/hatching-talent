import React from "react";
import { Row, Col } from "react-grid-system";
import Input from "../common/components/Input";
import { DefaultButtonOutline } from "../styles/Button";
import { Link } from "@reach/router";
import PageHeader from "../common/components/PageHeader";
import useDocumentTitle from "../common/hooks/useDocumentTitle";

const ResetPasswordPage = () => {
  useDocumentTitle("Reset Password | Hatching Talent");
  return (
    <PageHeader boldText="Reset" normalText="Password">
      <form action="">
        <Row>
          <Col sm={4}>
            <Input type="email" placeholder="New Password" name="newPassword" />
          </Col>
          <Col sm={4}>
            <Input
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
    </PageHeader>
  );
};

export default ResetPasswordPage;
