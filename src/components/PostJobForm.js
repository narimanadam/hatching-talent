import React, { Component } from "react";
import { Col, Row } from "react-grid-system";
import InputField from "../components/InputField";
import Textarea from "../components/Textarea";
import Select from "react-select";
import { Form } from "../styles/FormStyles";
import { DefaultButtonOutline } from "../styles/Button";
import { SelectStyles } from "../styles/SelectStyles";
import { AuthConsumer } from "../context/AuthContext";
import { navigate } from "@reach/router";

class PostJobForm extends Component {
  state = {
    jobTitle: "",
    jobDescription: "",
    jobRole: "",
    jobLocation: "",
    touched: {}
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleBlur = ({ target: { name } }) => {
    this.setState({
      touched: { ...this.state.touched, [name]: true }
    });
    console.log("name: ", name);
    console.log(this.state.touched);
  };

  handleSelectBlur = name => {
    this.setState({
      touched: { ...this.state.touched, [name]: true }
    });
  };

  handleSelectChange = ({ value }, action) => {
    this.setState({
      [action.name]: value
    });
  };

  validateJobTitle = () => {
    return this.state.jobTitle != "";
  };

  validateJobDescription = () => {
    return this.state.jobDescription != "";
  };

  validateJobRole = () => {
    return this.state.jobRole != "";
  };

  validateJobLocation = () => {
    return this.state.jobLocation != "";
  };

  postJob = employerId => e => {
    e.preventDefault();
    const { jobTitle, jobDescription, jobRole } = this.state;
    fetch("http://127.0.0.1:8080/app/resources/jobs/addJob", {
      method: "POST",
      headers: {
        employerId: employerId,
        jobName: jobTitle,
        jobDescription: jobDescription,
        jobStatus: "active",
        jobLocation: 1,
        jobIndustry: 1,
        jobRole: 1
      }
    })
      .then(data => {
        navigate("/employer-dashboard");
        console.log(data);
      })
      .catch(error => console.log(error));
  };

  render() {
    const { touched } = this.state;
    const jobLocationsOptions = [
      { value: "morocco", label: "Morocco" },
      { value: "vanilla", label: "Vanilla" },
      { value: "egypt", label: "Egypt" }
    ];

    const jobRoleOptions = [
      { value: "senior", label: "Senior" },
      { value: "midlevel", label: "Mid-Level" },
      { value: "junior", label: "Junior" }
    ];

    const jobTitleIsValid = this.validateJobTitle();
    const jobDescriptionIsValid = this.validateJobDescription();
    const jobRoleIsValid = this.validateJobRole();
    const jobLocationIsValid = this.validateJobLocation();
    const formIsValid =
      jobTitleIsValid &&
      jobDescriptionIsValid &&
      jobRoleIsValid &&
      jobLocationIsValid;
    return (
      <AuthConsumer>
        {Auth => (
          <Form onSubmit={this.postJob(Auth.state.employerId)}>
            <Row>
              <Col sm={8}>
                <InputField
                  type="text"
                  placeholder="Job Title"
                  name="jobTitle"
                  label="Job Title"
                  handleInputChange={this.handleInputChange}
                  handleBlur={this.handleBlur}
                />
                {touched.jobTitle && !jobTitleIsValid && (
                  <p>Job Title is Required</p>
                )}
              </Col>
              <Col sm={8}>
                <Textarea
                  type="text"
                  placeholder="Job Description"
                  name="jobDescription"
                  label="Job Description"
                  handleInputChange={this.handleInputChange}
                  handleBlur={this.handleBlur}
                />
                {touched.jobDescription && !jobDescriptionIsValid && (
                  <p>Job Description is Required</p>
                )}
              </Col>
              <Col md={8}>
                <div className="form__group">
                  <label className="form__label">Job Role</label>
                  <Select
                    options={jobRoleOptions}
                    placeholder="Select Job Role"
                    name="jobRole"
                    styles={SelectStyles}
                    onChange={this.handleSelectChange}
                    onBlur={this.handleSelectBlur.bind(this, "jobRole")}
                  />
                </div>
                {touched.jobRole && !jobRoleIsValid && (
                  <p>Job Role is Required</p>
                )}
              </Col>
              <Col sm={8}>
                <div className="form__group">
                  <label className="form__label">Job Location</label>
                  <Select
                    options={jobLocationsOptions}
                    placeholder="Select Job Location"
                    name="jobLocation"
                    styles={SelectStyles}
                    onChange={this.handleSelectChange}
                    onBlur={this.handleSelectBlur.bind(this, "jobLocation")}
                  />
                </div>
                {touched.jobLocation && !jobLocationIsValid && (
                  <p>Job Location is Required</p>
                )}
              </Col>
            </Row>
            <DefaultButtonOutline type="submit" disabled={!formIsValid}>
              Post Job
            </DefaultButtonOutline>
          </Form>
        )}
      </AuthConsumer>
    );
  }
}

export default PostJobForm;
