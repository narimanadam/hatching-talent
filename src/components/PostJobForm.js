import React, { useCallback, useContext, useEffect, useState } from "react";
import Button from "../common/components/Button";
import Input from "../common/components/Input";
import Textarea from "../common/components/Textarea";
import { GET_LOOKUPs, POST_JOB_URL } from "../common/helpers/apiUrls";
import { Form } from "../styles/FormStyles";
import { navigate } from "@reach/router";
import AuthContext from "../common/context/AuthContext";
import { useForm, Controller } from "react-hook-form";
import SelectLookup from "./SelectLookup";
import { Box } from "reflexbox";
import { SidebarLayoutContainer } from "../Layout/SidebarLayout/SidebarLayout";
import Select from "react-select";
import { SelectStyles } from "../styles/SelectStyles";
import Message from "../common/components/Message";

const PostJobForm = () => {
  const { AuthState } = useContext(AuthContext);
  const { register, handleSubmit, errors, control } = useForm();
  const [jobRoleLookupValues, setJobRoleLookupValues] = useState([]);
  const [locationsLookupValues, setLocationsLookupValues] = useState([]);
  let jobRoleSelectOptions = [];
  let locationSelectOptions = [];

  const getIndustriesLookups = type => {
    fetch(`${GET_LOOKUPs}`, {
      method: "POST",
      headers: {
        lookTypeName: "Industries"
      }
    })
      .then(res => res.json())
      .then(data => setJobRoleLookupValues(data))
      .catch(error => console.log(error));
  };

  const getLocationsLookups = type => {
    fetch(`${GET_LOOKUPs}`, {
      method: "POST",
      headers: {
        lookTypeName: "Locations"
      }
    })
      .then(res => res.json())
      .then(data => setLocationsLookupValues(data))
      .catch(error => console.log(error));
  };

  const postJob = useCallback(data => {
    fetch(`${POST_JOB_URL}`, {
      method: "POST",
      headers: {
        employerId: AuthState.userID,
        jobName: data.jobTitle,
        jobDescription: data.jobDescription,
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
  }, []);

  useEffect(() => {
    getIndustriesLookups();
    getLocationsLookups();
  }, []);
  jobRoleSelectOptions = jobRoleLookupValues.map(option => ({
    value: option.value,
    label: option.value
  }));

  locationSelectOptions = locationsLookupValues.map(option => ({
    value: option.value,
    label: option.value
  }));

  return (
    <SidebarLayoutContainer>
      <Form onSubmit={handleSubmit(postJob)} hasBgColor noValidate>
        <Input
          type="text"
          placeholder="Job Title"
          name="jobTitle"
          label="Job Title"
          register={register({ required: "Job Title is Required" })}
          error={errors.jobTitle}
        />
        <Textarea
          type="text"
          placeholder="Job Description"
          name="jobDescription"
          label="Job Description"
          register={register({ required: "Job Description is Required" })}
          error={errors.jobDescription}
        />

        <div className="form__group">
          <label className="form__label">Job Role</label>
          <Box width={1}>
            <Controller
              name="jobRole"
              control={control}
              options={jobRoleSelectOptions}
              as={Select}
              styles={SelectStyles}
              rules={{ required: "Job Location is Required" }}
            />
          </Box>
          {errors.jobRole && (
            <Message type="error" text={errors.jobRole.message} />
          )}
        </div>

        <div className="form__group">
          <label className="form__label">Job Location</label>
          <Box width={1}>
            <Controller
              name="jobLocation"
              control={control}
              options={locationSelectOptions}
              as={Select}
              styles={SelectStyles}
              rules={{ required: "Job Location is Required" }}
            />
          </Box>
          {errors.jobLocation && (
            <Message type="error" text={errors.jobLocation.message} />
          )}
        </div>
        {/* <Box width={1}>
          <Controller
            name="jobLocation"
            control={control}
            options={jobRoleLookupValues}
            as={Select}
            styles={SelectStyles}
          />
        </Box> */}

        {/* <Controller
          as={SelectLookup}
          name="jobRole"
          label="Job Role"
          typeId="Industries"
          rules={{ required: "Job Role is required" }}
          control={control}
          error={errors.jobRole}
          defaultValue=""
        /> */}
        {/* <Controller
          as={<SelectLookup label="Job Location" />}
          typeId="Locations"
          name="jobLocation"
          rules={{ required: "Job Location is required" }}
          control={control}
          error={errors.jobLocation}
          defaultValue=""
        /> */}
        <Button text="Post Job" variant="primaryButton" type="submit" />
      </Form>
    </SidebarLayoutContainer>
  );
};

export default PostJobForm;
