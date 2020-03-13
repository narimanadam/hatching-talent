import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import SectionHeading from "../components/SectionHeading";
import InputField from "../components/InputField";
import { DefaultButtonOutline } from "../styles/Button";
import Textarea from "../components/Textarea";
import { Form } from "../styles/FormStyles";
import Message from "../components/Message";

const ContactPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [bluredInputs, setBluredInputs] = useState(false);

  const setBlurred = e => {
    setBluredInputs({ ...bluredInputs, [e.target.name]: true });
  };

  const sendMessage = e => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        fullName,
        email,
        message
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  const validateFullName = () => {
    return fullName != "";
  };

  const validateEmail = () => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  const validateMessage = () => {
    return message != "";
  };

  const fullnameIsValid = validateFullName();
  const emailIsValid = validateEmail();
  const messageIsValid = validateMessage();
  const formIsValid = fullnameIsValid && emailIsValid && messageIsValid;

  return (
    <div className="main-colored">
      <Container>
        <SectionHeading boldText="Contact" normalText="Us" />
        <Form action="">
          <Row>
            <Col sm={6}>
              <InputField
                type="text"
                placeholder="Full Name"
                name="fullname"
                handleInputChange={e => setFullName(e.target.value)}
                handleBlur={setBlurred}
              />
              {bluredInputs.fullname && !fullnameIsValid && (
                <Message text="Full Name is Required" type="error"></Message>
              )}
            </Col>
            <Col sm={6}>
              <InputField
                type="email"
                placeholder="Email"
                name="email"
                handleInputChange={e => setEmail(e.target.value)}
                handleBlur={setBlurred}
              />
              {bluredInputs.email && !emailIsValid && (
                <Message
                  text="Please Enter a Valid Email Address"
                  type="error"
                ></Message>
              )}
            </Col>
            <Col sm={12}>
              <Textarea
                name="message"
                placeholder="Your Message"
                handleInputChange={e => setMessage(e.target.value)}
                handleBlur={setBlurred}
              />
              {bluredInputs.message && !messageIsValid && (
                <Message text="Message is required" type="error"></Message>
              )}
            </Col>
          </Row>
          <DefaultButtonOutline
            style={{ marginTop: "20px", float: "right" }}
            onClick={sendMessage}
            disabled={!formIsValid}
          >
            Send Message
          </DefaultButtonOutline>
        </Form>
      </Container>
    </div>
  );
};

export default ContactPage;
