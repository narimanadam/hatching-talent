import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import SectionHeading from "../components/SectionHeading";
import InputField from "../components/InputField";
import { DefaultButtonOutline } from "../styles/Button";
import Textarea from "../components/Textarea";
import { Form } from "../styles/FormStyles";

class ContactPage extends Component {
  state = {
    fullname: "",
    email: "",
    message: "",
    touched: {}
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  sendMessage = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.fullname,
        email: this.state.email,
        message: this.state.message
      })
    })
      .then(function(data) {
        console.log("Request success: ", data);
      })
      .catch(function(error) {
        console.log("Request failure: ", error);
      });
  };

  validateFullName = () => {
    return this.state.fullname != "";
  };

  validateEmail = () => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email);
  };

  validateMessage = () => {
    return this.state.message != "";
  };

  handleBlur = ({ target: { name } }) => {
    this.setState({
      touched: { ...this.state.touched, [name]: true }
    });
  };

  render() {
    const { touched } = this.state;
    const fullnameIsValid = this.validateFullName();
    const emailIsValid = this.validateEmail();
    const messageIsValid = this.validateMessage();
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
                  handleInputChange={this.handleInputChange}
                  handleBlur={this.handleBlur}
                />
                {touched.fullname && !fullnameIsValid && (
                  <p>Full Name is required</p>
                )}
              </Col>
              <Col sm={6}>
                <InputField
                  type="email"
                  placeholder="Email"
                  name="email"
                  handleInputChange={this.handleInputChange}
                  handleBlur={this.handleBlur}
                />
                {touched.email && !emailIsValid && (
                  <p>Please Enter a Valid Email Address</p>
                )}
              </Col>
              <Col sm={12}>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  handleInputChange={this.handleInputChange}
                  handleBlur={this.handleBlur}
                />
                {touched.message && !messageIsValid && (
                  <p>Message is required</p>
                )}
              </Col>
            </Row>
            <DefaultButtonOutline
              style={{ marginTop: "20px", float: "right" }}
              onClick={this.sendMessage}
              disabled={!formIsValid}
            >
              Send Message
            </DefaultButtonOutline>
          </Form>
        </Container>
      </div>
    );
  }
}

export default ContactPage;
