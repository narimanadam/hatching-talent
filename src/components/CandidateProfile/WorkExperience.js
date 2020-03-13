import React, { useState, useEffect, useContext } from "react";
import Modal from "../Modal";
import Box from "../Box";
import { Form } from "../../styles/FormStyles";
import InputField from "../../components/InputField";
import Textarea from "../../components/Textarea";
import DatePicker from "react-datepicker";
import { Close, Title } from "../../styles/ModalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-datepicker/dist/react-datepicker.css";
import { Button, DefaultButtonOutline } from "../../styles/Button";
import { Row, Col } from "react-grid-system";
import { ADD_EXPERIENCE, GET_EXPERIENCE } from "../../helpers/apiUrls";
import AuthContext from "../../context/AuthContext";
import WorkExperienceItem from "./WorkExperienceItem";
import Message from "../Message";

const WorkExperience = ({ userId }) => {
  const [showModal, setShowModal] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [formattedStartDate, setFormattedStartDate] = useState("");
  const [formattedEndDate, setFormattedEndDate] = useState("");
  const [authenticated] = useContext(AuthContext);
  const [workExperience, setWorkExperience] = useState([]);

  let formatStartDate;
  let formatEndDate;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    formatStartDate = startDate
      .toISOString()
      .split("T")[0]
      .split("-");

    formatEndDate = endDate
      .toISOString()
      .split("T")[0]
      .split("-");

    let startDateFormatted = `${formatStartDate[0]}-${formatStartDate[1]}- ${
      formatStartDate[2]
    }`;

    let endDateFormatted = `${formatEndDate[0]}-${formatEndDate[1]}-${
      formatEndDate[2]
    }`;

    setFormattedStartDate(startDateFormatted);
    setFormattedEndDate(endDateFormatted);
  }, [startDate, endDate]);

  const submitWorkExperience = e => {
    e.preventDefault();
    fetch(`${ADD_EXPERIENCE}`, {
      method: "POST",
      headers: {
        forUser: authenticated.userID,
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

  const getWorkExperience = () => {
    fetch(`${GET_EXPERIENCE}`, {
      method: "POST",
      headers: {
        forUser: userId,
        type: "workExperience"
      }
    })
      .then(res => res.json())
      .then(data => {
        setWorkExperience(data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getWorkExperience();
  }, []);

  return (
    <Box heading="Work Experience">
      {!workExperience.length && authenticated.userID != userId && (
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
          <Title>Add Work Experience</Title>
          <p>Work experience</p>
          <Form style={{ marginTop: "25px" }} onSubmit={submitWorkExperience}>
            <Row>
              <Col md={12}>
                <InputField
                  type="text"
                  placeholder="Job Title"
                  label="Job Title"
                  handleInputChange={e => setJobTitle(e.target.value)}
                />
              </Col>
              <Col md={12}>
                <InputField
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
                <InputField
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
            <DefaultButtonOutline type="submit">Submit</DefaultButtonOutline>
          </Form>
          <Close>
            <Button type="button" onClick={toggleModal}>
              <FontAwesomeIcon
                icon="times"
                size="1x"
                style={{ color: "#333" }}
              />
            </Button>
          </Close>
        </Modal>
      )}
      {authenticated.userID == userId && (
        <Button type="button" onClick={toggleModal} colored block>
          <FontAwesomeIcon icon="plus" />
          Add New Work Experience
        </Button>
      )}
    </Box>
  );
};

export default WorkExperience;
