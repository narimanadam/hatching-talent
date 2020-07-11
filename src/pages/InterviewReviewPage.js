import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";

import { Container, Row, Col } from "react-grid-system";
import { Form } from "../styles/FormStyles";
import RadioButton from "../common/components/RadioButton";
import Input from "../common/components/Input";
import Textarea from "../common/components/Textarea/Textarea";
import { MainButton } from "../styles/Button";
import Checkbox from "../common/components/Checkbox/Checkbox";
import Box from "../common/components/Box";
import SelectLookup from "../components/SelectLookup";
import { SelectDefaultStyles } from "../styles/SelectStyles";
import { ADD_REVIEW } from "../common/helpers/apiUrls";
import AuthContext from "../common/context/AuthContext";

const InterviewReviewPage = () => {
  const [role, setRole] = useState("");
  const [interviewProcess, setInterviewProcess] = useState("");
  const [interviewQuestion, setInterviewQuestion] = useState("");
  const [interviewAnswer, setInterviewAnswer] = useState("");
  const [interviewDifficulty, setInterviewDifficulty] = useState("");
  const [reviewTitle, setReviewTitle] = useState("");
  const [pros, setPros] = useState("");
  const [cons, setCons] = useState("");
  const [advice, setAdvice] = useState("");
  const [employerId, setEmployerId] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const { AuthState } = useContext(AuthContext);

  const interviewLevel = [
    { label: "Easy", value: "medium" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" }
  ];

  const handleJobRoleChange = ({ value }) => {
    setRole(value);
  };

  const selectInterViewDifficulty = ({ value }) => {
    setInterviewDifficulty(value);
  };
  const submitInterviewReview = e => {
    e.preventDefault();
    fetch(`${ADD_REVIEW}`, {
      method: "POST",
      headers: {
        role,
        reviewTitle,
        pros,
        cons,
        advice,
        empType: interviewProcess,
        questions: interviewQuestion,
        answers: interviewAnswer,
        difficulty: interviewDifficulty,
        employemntStatus: employmentStatus,
        toEmployer: employerId,
        createUser: AuthState.userID
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    let reviewInfo = JSON.parse(window.sessionStorage.getItem("reviewType"));

    setEmploymentStatus(reviewInfo.employmentStatus);
    setEmployerId(reviewInfo.employerId);
  }, []);

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Box
            heading="Tell us about your recent job interview"
            text={[
              "It only take a minute! And your anonymous review will help other job seekers."
            ]}
          >
            <Form onSubmit={submitInterviewReview}>
              <Row>
                <Col md={8}>
                  <SelectLookup
                    name="jobLocation"
                    placeholder="Select Job Role"
                    typeId="Industries"
                    handleSelectChange={handleJobRoleChange}
                    type="default"
                  />
                </Col>
              </Row>
              <Textarea
                placeholder="Briefly describe the hiring and interview process"
                label="Describe the interview process"
                name="interviewProcess"
                handleInputChange={e => setInterviewProcess(e.target.value)}
              />
              <Textarea
                placeholder="What are the thing they asked you?"
                label="Interview Question"
                name="interviewQuestions"
                handleInputChange={e => setInterviewQuestion(e.target.value)}
              />
              <Textarea
                placeholder="How did you answer this question(optional)?"
                name="interviewAnswer"
                handleInputChange={e => setInterviewAnswer(e.target.value)}
              />
              <Row>
                <Col md={8}>
                  <Select
                    options={interviewLevel}
                    placeholder="Interview Difficulty"
                    styles={SelectDefaultStyles}
                    onChange={selectInterViewDifficulty}
                  />
                </Col>
              </Row>
              <Input
                placeholder="Title"
                label="Review Title"
                name="reviewTitle"
                handleInputChange={e => setReviewTitle(e.target.value)}
              />
              <Textarea
                placeholder="Share Some of the best reasons to work at MBC Group"
                label="Pros"
                name="pros"
                handleInputChange={e => setPros(e.target.value)}
              />
              <Textarea
                placeholder="Share som eof the downsides of working at MBC Group"
                label="Cons"
                name="cons"
                handleInputChange={e => setCons(e.target.value)}
              />
              <Textarea
                placeholder="Write your advice that you would like to give to Interview management"
                label="Advice To Management"
                name="adviceToManagement"
                handleInputChange={e => setAdvice(e.target.value)}
              />
              {/* <Checkbox
                label="I agree to this platform Terms of Use. This Review of my experience at my current or former employer."
                name="agreeTermsAndConditions"
              /> */}
              <MainButton type="submit">Submit</MainButton>
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
  );
};

export default InterviewReviewPage;
