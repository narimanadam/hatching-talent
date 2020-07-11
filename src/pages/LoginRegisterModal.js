import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import CandidateRegisterationForm from "../components/CandidateRegisterationForm";
import { Button } from "../styles/Button";
import * as Styled from "../common/components/Modal/Modal.styles";

const LoginRegisterModal = () => {
  const [newUser, setNewUser] = useState(false);
  return (
    <>
      {!newUser ? (
        <>
          <Styled.Title>Welcome Back</Styled.Title>
          <Styled.SubTitle>Login to get started</Styled.SubTitle>
        </>
      ) : (
        <>
          <Styled.Title>Sign Up</Styled.Title>
          <Styled.SubTitle>
            Fill the details and create your account
          </Styled.SubTitle>
        </>
      )}
      {newUser ? <CandidateRegisterationForm /> : <LoginForm />}
      <p
        style={{
          color: "#333",
          textAlign: "center",
          width: "100%",
          fontSize: "14px",
          marginTop: "16px"
        }}
      >
        {!newUser ? (
          <>
            New User?
            <Button
              style={{ color: "#f7ac06" }}
              onClick={() => setNewUser(true)}
            >
              Create an account
            </Button>
          </>
        ) : (
          <>
            Already Have an account?{" "}
            <Button
              style={{ color: "#f7ac06" }}
              onClick={() => setNewUser(false)}
            >
              login
            </Button>
          </>
        )}
      </p>
    </>
  );
};

export default LoginRegisterModal;
