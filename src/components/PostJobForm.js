import React, { useContext } from "react";
import Input from "../common/components/Input";
import Textarea from "../common/components/Textarea";
import { Form } from "../styles/FormStyles";
import { navigate } from "@reach/router";
import { POST_JOB_URL } from "../common/helpers/apiUrls";
import AuthContext from "../common/context/AuthContext";
import SelectLookup from "./SelectLookup";
import useForm from "../common/hooks/useForm";
import Button from "../common/components/Button";
import { SidebarLayoutContainer } from "../Layout/SidebarLayout/SidebarLayout";

const PostJobForm = () => {
  const { AuthState } = useContext(AuthContext);

  const postJob = () => {
    fetch(`${POST_JOB_URL}`, {
      method: "POST",
      headers: {
        employerId: AuthState.userID,
        jobName: values.jobTitle,
        jobDescription: values.jobDescription,
        jobStatus: "Pending",
        jobLocation: 1,
        jobIndustry: 3,
        jobRole: 5
      }
    })
      .then(data => {
        navigate(`/employer-dashboard/${AuthState.userID}`);
        console.log(data);
      })
      .catch(error => console.log(error));
  };

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    handleSelectChange,
    handleSelectBlur,
    errors,
    formIsValid
  } = useForm(
    { jobTitle: "", jobDescription: "", jobLocation: "", jobRole: "" },
    postJob
  );

  return (
    <SidebarLayoutContainer>
      {/* <PageHeader boldText="Post" normalText="Job" /> */}
      <Form onSubmit={handleSubmit} hasBgColor>
        <Input
          type="text"
          placeholder="Job Title"
          name="jobTitle"
          label="Job Title"
          handleInputChange={handleChange}
          handleBlur={handleBlur}
          validationMessage={errors.jobTitle}
          variant="darkFormField"
        />
        <Textarea
          type="text"
          placeholder="Job Description"
          name="jobDescription"
          label="Job Description"
          handleInputChange={handleChange}
          handleBlur={handleBlur}
          validationMessage={errors.jobDescription}
          variant="darkFormField"
        />
        <div className="form__group">
          <label className="form__label">Job Role</label>
          <SelectLookup
            name="jobRole"
            placeholder="Select Job Role"
            typeId="Industries"
            handleSelectChange={handleSelectChange}
            handleSelectBlur={handleSelectBlur}
            validationMessage={errors.jobRole}
          />
        </div>
        <div className="form__group">
          <label className="form__label">Job Location</label>
          <SelectLookup
            name="jobLocation"
            placeholder="Select Job Location"
            typeId="Locations"
            handleSelectChange={handleSelectChange}
            handleSelectBlur={handleSelectBlur}
            validationMessage={errors.jobLocation}
          />
        </div>
        <Button
          text="Post job"
          variant="primaryButton"
          type="submit"
          disabled={!formIsValid}
        />
      </Form>
    </SidebarLayoutContainer>
  );
};

export default PostJobForm;
