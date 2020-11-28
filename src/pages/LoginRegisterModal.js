import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import CandidateRegisterationForm from "../components/CandidateRegisterationForm";
import Button from "../common/components/Button/";
import * as Styled from "../common/components/Modal/Modal.styles";

const LoginRegisterModal = () => {
  const [newUser, setNewUser] = useState(false);
  return (
    <>
      {!newUser ? (
        <>
          <Styled.Img src="/assets/login.svg" width={200} />
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
              text="Create an account"
              color="#f7ac06"
              onClick={() => setNewUser(true)}
              variant="linkButton"
            />
          </>
        ) : (
          <>
            Already Have an account?
            <Button
              text="Login"
              color="#f7ac06"
              onClick={() => setNewUser(false)}
              variant="linkButton"
            />
          </>
        )}
      </p>
    </>
  );
};

export default LoginRegisterModal;
