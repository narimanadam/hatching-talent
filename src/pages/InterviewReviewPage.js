import React, { Component, Fragment } from "react";
import Select from "react-select";

import { Container, Row, Col } from "react-grid-system";
import { BoxStyles, Heading, Text } from "../styles/BoxStyles";
import { Form } from "../styles/FormStyles";
import RadioButton from "../components/RadioButton";
import { RadioButtonHeading } from "../styles/RadioButtonStyles";
import InputField from "../components/InputField";
import Textarea from "../components/Textarea";
import { MainButton } from "../styles/Button";
import Checkbox from "../components/Checkbox";
import Box from "../components/Box";

class InterviewReviewPage extends Component {
  render() {
    const jobLocationsOptions = [
      { value: "fulltime", label: "Full Time" },
      { value: "parttime", label: "Part Time" },
      { value: "contract", label: "Contract" },
      { value: "intern", label: "Intern" }
    ];

    const SelectDefaultStyles = {
      control: styles => ({
        ...styles,
        backgroundColor: "#fff",
        color: "#fff",
        borderRadius: "none",
        boxShadow: "none",
        border: "none",
        marginBottom: "15px"
      }),
      option: styles => ({
        ...styles,
        transition: "0.3s",
        "&:hover": {
          backgroundColor: "#fff",
          color: "#fff",
          cursor: "pointer"
        },
        "&:checked": { backgroundColor: "#fff" }
      }),
      dropdownIndicator: styles => ({ ...styles, color: "#333" }),
      menu: styles => ({
        ...styles,
        backgroundColor: "#fff",
        color: "#333",
        zIndex: 100
      }),
      placeholder: styles => ({ ...styles, color: "#333" })
    };
    return (
      <Fragment>
        <Container>
          <Row>
            <Col md={8}>
              <Box
                heading="Tell us about your recent job interview"
                text={[
                  "It only take a minute! And your anonymous review will help other job seekers."
                ]}
              >
                <Form>
                  <Row>
                    <Col md={8}>
                      <Select
                        options={jobLocationsOptions}
                        placeholder="What role did you apply for?"
                        styles={SelectDefaultStyles}
                      />
                    </Col>
                  </Row>
                  <Textarea
                    placeholder="Briefly describe the hiring and interview process"
                    label="Describe the interview process"
                    name="interviewProcess"
                  />
                  <Textarea
                    placeholder="What are the thing they asked you?"
                    label="Interview Question"
                    name="interviewQuestions"
                  />
                  <Textarea
                    placeholder="How did you answer this question(optional)?"
                    name="interviewAnswer"
                  />
                  <Row>
                    <Col md={8}>
                      <Select
                        options={jobLocationsOptions}
                        placeholder="Interview Difficulty"
                        styles={SelectDefaultStyles}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <Select
                        options={jobLocationsOptions}
                        placeholder="Select Employment Status"
                        styles={SelectDefaultStyles}
                      />
                    </Col>
                  </Row>
                  <InputField
                    placeholder="Title"
                    label="Review Title"
                    name="reviewTitle"
                  />
                  <Textarea
                    placeholder="Share Some of the best reasons to work at MBC Group"
                    label="Pros"
                    name="pros"
                  />
                  <Textarea
                    placeholder="Share som eof the downsides of working at MBC Group"
                    label="Cons"
                    name="cons"
                  />
                  <Textarea
                    placeholder="Write your advice that you would like to give to Interview management"
                    label="Advice To Management"
                    name="adviceToManagement"
                  />
                  <Checkbox
                    label="I agree to this platform Terms of Use. This Review of my experience at my current or former employer."
                    name="agreeTermsAndConditions"
                  />
                  <MainButton>Submit</MainButton>
                </Form>
              </Box>
            </Col>
            <Col md={4}>
              <Box
                heading="Keep it Real"
                text={[
                  "It only take a minute! And your anonymous review will help other job seekers.",
                  "It only take a minute! And your anonymous review will help other job seekers."
                ]}
              />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default InterviewReviewPage;
