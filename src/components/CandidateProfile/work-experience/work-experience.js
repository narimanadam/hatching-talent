import React, { useState, useEffect, useContext, useCallback } from "react";
import Modal from "../../../common/components/Modal/Modal";
import Box from "../../../common/components/Box";
import { Form } from "../../../styles/FormStyles";
import Input from "../../../common/components/Input";
import Textarea from "../../../common/components/Textarea/Textarea";
import DatePicker from "react-datepicker";
import * as Styled from "../../../common/components/Modal/Modal.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-datepicker/dist/react-datepicker.css";
import { Row, Col } from "react-grid-system";
import {
  ADD_EXPERIENCE,
  GET_EXPERIENCE
} from "../../../common/helpers/apiUrls";
import AuthContext from "../../../common/context/AuthContext";
import WorkExperienceItem from "./work-experience-item";
import Message from "../../../common/components/Message/Message";
import Button from "../../../common/components/Button";
import WorkExperienceLoader from "./work-experience-loader";

const WorkExperience = ({ userId }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [formattedStartDate, setFormattedStartDate] = useState("");
  const [formattedEndDate, setFormattedEndDate] = useState("");
  const { AuthState } = useContext(AuthContext);
  const [workExperience, setWorkExperience] = useState([]);

  let formatStartDate;
  let formatEndDate;

  const toggleModal = useCallback(() => setShowModal(!showModal), [showModal]);

  useEffect(() => {
    formatStartDate = startDate
      .toISOString()
      .split("T")[0]
      .split("-");

    formatEndDate = endDate
      .toISOString()
      .split("T")[0]
      .split("-");

    let startDateFormatted = `${formatStartDate[0]}-${formatStartDate[1]}- ${formatStartDate[2]}`;

    let endDateFormatted = `${formatEndDate[0]}-${formatEndDate[1]}-${formatEndDate[2]}`;

    setFormattedStartDate(startDateFormatted);
    setFormattedEndDate(endDateFormatted);
  }, [startDate, endDate]);

  const submitWorkExperience = e => {
    e.preventDefault();
    fetch(`${ADD_EXPERIENCE}`, {
      method: "POST",
      headers: {
        forUser: AuthState.userID,
        type: "workExperience",
        name: companyName,
        jobTitle: jobTitle,
        fromDate: formattedStartDate,
        toDate: formattedEndDate,
        description: jobDesc,
        notes: noticePeriod
      }
    })
      .then(res => res.json())
      .then(data => window.location.reload())
      .catch(error => console.log(error));
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`${GET_EXPERIENCE}`, {
      method: "POST",
      headers: {
        forUser: userId,
        type: "workExperience"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setWorkExperience(data);
          setIsLoading(false);
        }
      })
      .catch(error => console.log(error));
  }, []);

  if (isLoading) return <WorkExperienceLoader />;

  return (
    <>
      <Box heading="Work Experience">
        {!workExperience.length && (
          <Message text="No work experience added yet" />
        )}
        {workExperience.map(experience => (
          <WorkExperienceItem
            desc={experience.description}
            startDate={experience.from_date}
            endDate={experience.to_date}
            title={experience.job_title}
            companyName={experience.name}
            noticePeriod={experience.notes}
            id={experience.id}
            key={experience.id}
            creator={userId}
          />
        ))}
        {showModal && (
          <Modal>
            <Styled.Title>Add Work Experience</Styled.Title>
            <Form style={{ marginTop: "25px" }} onSubmit={submitWorkExperience}>
              <Row>
                <Col md={12}>
                  <Input
                    type="text"
                    placeholder="Job Title"
                    label="Job Title"
                    handleInputChange={e => setJobTitle(e.target.value)}
                  />
                </Col>
                <Col md={12}>
                  <Input
                    type="text"
                    placeholder="Company Name"
                    label="Company Name"
                    handleInputChange={e => setCompanyName(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <div className="form__group">
                    <label className="form__label">Start Date</label>
                    <DatePicker
                      selected={startDate}
                      onChange={data => setStartDate(data)}
                      dateFormat="MMMM d, yyyy"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form__group">
                    <label className="form__label">End Date</label>
                    <DatePicker
                      selected={endDate}
                      onChange={data => setEndDate(data)}
                      dateFormat="MMMM d, yyyy"
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <Input
                    type="text"
                    placeholder="Notice Period"
                    label="Notice Period"
                    handleInputChange={e => setNoticePeriod(e.target.value)}
                  />
                </Col>
                <Col md={12}>
                  <Textarea
                    placeholder="Job Description"
                    label="Job Description"
                    handleInputChange={e => setJobDesc(e.target.value)}
                  />
                </Col>
              </Row>
              <Button type="submit" text="Submit" variant="primaryButton" />
            </Form>
            <Styled.Close>
              <Button
                type="button"
                variant="linkButton"
                icon={
                  <FontAwesomeIcon
                    icon="times"
                    size="1x"
                    style={{ color: "#333" }}
                  />
                }
                onClick={toggleModal}
              />
            </Styled.Close>
          </Modal>
        )}
        {AuthState.userID === +userId && (
          <Button
            type="button"
            variant="primaryOutlineButton"
            onClick={toggleModal}
            colored
            block
            text="Add New Work Experience"
            icon={<FontAwesomeIcon icon="plus" />}
            mt={3}
          />
        )}
      </Box>
    </>
  );
};

export default WorkExperience;
