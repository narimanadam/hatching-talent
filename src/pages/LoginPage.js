import React from "react";
import SectionHeading from "../components/SectionHeading";
import { Container } from "react-grid-system";
import { AuthConsumer } from "../context/AuthContext";

import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div className="main-colored">
      <Container>
        <SectionHeading boldText="Login" />
        <AuthConsumer>{Auth => <LoginForm context={Auth} />}</AuthConsumer>
      </Container>
    </div>
  );
}

export default LoginPage;
