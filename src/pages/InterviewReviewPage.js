import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";

import { Form } from "../styles/FormStyles";
import Input from "../common/components/Input";
import Textarea from "../common/components/Textarea/Textarea";
import Box from "../common/components/Box";
import { SelectDefaultStyles } from "../styles/SelectStyles";
import { ADD_REVIEW } from "../common/helpers/apiUrls";
import AuthContext from "../common/context/AuthContext";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";
import { SidebarLayoutContainer } from "../Layout/SidebarLayout/SidebarLayout";
import Button from "../common/components/Button/";
import { navigate } from "@reach/router";

const InterviewReviewPage = () => {
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
  const [jobRole, setJobRole] = useState("");
  const { AuthState } = useContext(AuthContext);

  const interviewLevel = [
    { label: "Easy", value: "medium" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" }
  ];

  // const handleJobRoleChange = ({ value }) => {
  //   setRole(value);
  // };

  const selectInterViewDifficulty = ({ value }) => {
    setInterviewDifficulty(value);
  };
  const submitInterviewReview = e => {
    e.preventDefault();
    fetch(`${ADD_REVIEW}`, {
      method: "POST",
      headers: {
        role: jobRole,
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
      .then(data => {
        if (data[0].value === "Ok") {
          navigate("/review");
        }
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    let reviewInfo = JSON.parse(window.sessionStorage.getItem("reviewType"));

    setEmploymentStatus(reviewInfo.employmentStatus);
    setEmployerId(reviewInfo.employerId);
  }, []);

  return (
    <SidebarLayoutContainer>
      <Box
        heading="Tell us about your recent job interview"
        text={[
          "It only take a minute! And your anonymous review will help other job seekers."
        ]}
      />

      <Form onSubmit={submitInterviewReview} hasBgColor>
        {/* <SelectLookup
          name="jobLocation"
          placeholder="Select Job Role"
          typeId="Roles"
          handleSelectChange={handleJobRoleChange}
          type="default"
        /> */}
        <Input
          placeholder="Job Role"
          label="Job Role"
          name="jobRole"
          handleInputChange={e => setJobRole(e.target.value)}
        />
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
        <Select
          options={interviewLevel}
          placeholder="Interview Difficulty"
          styles={SelectDefaultStyles}
          onChange={selectInterViewDifficulty}
        />
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
        <Button type="submit" text="Submit" variant="primaryButton" />
      </Form>
    </SidebarLayoutContainer>
  );
};

export default WithSidebarLayout(InterviewReviewPage);
