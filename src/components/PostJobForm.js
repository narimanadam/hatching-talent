import React, { useState, useContext } from "react";
import { Col, Row } from "react-grid-system";
import InputField from "../components/InputField";
import Textarea from "../components/Textarea";
import { Form } from "../styles/FormStyles";
import { DefaultButtonOutline } from "../styles/Button";
import { navigate } from "@reach/router";
import { POST_JOB_URL } from "../helpers/apiUrls";
import AuthContext from "../context/AuthContext";
import SelectLookup from "./SelectLookup";

const PostJobForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [bluredInputs, setBluredInputs] = useState(false);

  const [authenticated] = useContext(AuthContext);

  const setBlurred = e => {
    setBluredInputs({ ...bluredInputs, [e.target.name]: true });
  };

  // const handleSelectBlur = name => {
  //   this.setState({
  //     touched: { ...this.state.touched, [name]: true }
  //   });
  // };

  const handleJobRoleChange = selectedOption => {
    setJobRole({ selectedOption });
  };

  const handleJobLocationChange = ({ value }) => {
    setJobLocation({ value });
  };

  const validateJobTitle = () => {
    return jobTitle != "";
  };

  const validateJobDescription = () => {
    return jobDescription != "";
  };

  const validateJobRole = () => {
    return jobRole != "";
  };

  const validateJobLocation = () => {
    return jobLocation != "";
  };

  const postJob = employerId => e => {
    e.preventDefault();
    fetch(`${POST_JOB_URL}`, {
      method: "POST",
      headers: {
        employerId: authenticated.userID,
        jobName: jobTitle,
        jobDescription: jobDescription,
        jobStatus: "Pending",
        jobLocation: 1,
        jobIndustry: 3,
        jobRole: 5
      }
    })
      .then(data => {
        navigate(`/employer-dashboard/${authenticated.userID}`);
        console.log(data);
      })
      .catch(error => console.log(error));
  };

  const jobTitleIsValid = validateJobTitle();
  const jobDescriptionIsValid = validateJobDescription();
  const jobRoleIsValid = validateJobRole();
  const jobLocationIsValid = validateJobLocation();
  const formIsValid =
    jobTitleIsValid &&
    jobDescriptionIsValid &&
    jobRoleIsValid &&
    jobLocationIsValid;
  return (
    <Form onSubmit={postJob()}>
      <Row>
        <Col sm={8}>
          <InputField
            type="text"
            placeholder="Job Title"
            name="jobTitle"
            label="Job Title"
            handleInputChange={e => setJobTitle(e.target.value)}
            handleBlur={setBlurred}
          />
          {bluredInputs.jobTitle && !jobTitleIsValid && (
            <p>Job Title is Required</p>
          )}
        </Col>
        <Col sm={8}>
          <Textarea
            type="text"
            placeholder="Job Description"
            name="jobDescription"
            label="Job Description"
            handleInputChange={e => setJobDescription(e.target.value)}
            handleBlur={setBlurred}
          />
          {bluredInputs.jobDescription && !jobDescriptionIsValid && (
            <p>Job Description is Required</p>
          )}
        </Col>
        <Col md={8}>
          <div className="form__group">
            <label className="form__label">Job Role</label>
            <SelectLookup
              name="jobRole"
              placeholder="Select Job Role"
              typeId="Industries"
              handleSelectChange={handleJobRoleChange}
              type="dark"
            ></SelectLookup>
          </div>
          {bluredInputs.jobRole && !jobRoleIsValid && (
            <p>Job Role is Required</p>
          )}
        </Col>
        <Col sm={8}>
          <div className="form__group">
            <label className="form__label">Job Location</label>
            <SelectLookup
              name="jobLocation"
              placeholder="Select Job Location"
              typeId="Locations"
              handleSelectChange={handleJobLocationChange}
              type="dark"
            ></SelectLookup>
          </div>
          {bluredInputs.jobLocation && !jobLocationIsValid && (
            <p>Job Location is Required</p>
          )}
        </Col>
      </Row>
      <DefaultButtonOutline type="submit" disabled={!formIsValid}>
        Post Job
      </DefaultButtonOutline>
    </Form>
  );
};

export default PostJobForm;
