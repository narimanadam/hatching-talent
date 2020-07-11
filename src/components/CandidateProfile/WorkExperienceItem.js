import React, { useState, useEffect, useContext } from "react";
import {
  WorkExperienceItemStyles,
  Title,
  Desc,
  Wrapper,
  Info,
  Dates,
  NoticePeriod,
  CompanyName,
  Actions
} from "../../styles/WorkExperienceItemStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InlineList, InlineListItem } from "../../styles/ListStyle";
import {
  DELETE_EXPERIENCE,
  UPDATE_EXPERIENCE
} from "../../common/helpers/apiUrls";
import Modal from "../../common/components/Modal/Modal";
import { Form } from "../../styles/FormStyles";
import Input from "../../common/components/Input";
import Textarea from "../../common/components/Textarea/Textarea";
import DatePicker from "react-datepicker";
import * as Styled from "../../common/components/Modal/Modal.styles";
import { Row, Col } from "react-grid-system";
import { Button, DefaultButtonOutline } from "../../styles/Button";
import AuthContext from "../../common/context/AuthContext";

const WorkExperienceItem = ({
  desc,
  startDate,
  endDate,
  noticePeriod,
  companyName,
  title,
  id,
  creator
}) => {
  const [showModal, setShowModal] = useState(false);
  const [jobTitle, setJobTitle] = useState(title);
  const [companyNameState, setCompanyNameState] = useState(companyName);
  const [jobDesc, setJobDesc] = useState(desc);
  const [noticePeriodState, setNoticePeriod] = useState(noticePeriod);
  const [startDateState, setStartDateState] = useState(startDate);
  const [endDateState, setEndDateState] = useState(endDate);
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const { AuthState } = useContext(AuthContext);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (selectedStartDate) {
      let selectedStartDateFormatted = selectedStartDate
        .toISOString()
        .split("T")[0]
        .split("-");
      let start = `${selectedStartDateFormatted[0]}-${selectedStartDateFormatted[1]}-${selectedStartDateFormatted[2]}`;
      setStartDateState(start);
    }

    if (selectedEndDate) {
      let endDateformatted = selectedEndDate
        .toISOString()
        .split("T")[0]
        .split("-");
      let end = `${endDateformatted[0]}-${endDateformatted[1]}-${endDateformatted[2]}`;
      setEndDateState(end);
    }
  }, [startDateState, endDateState, selectedEndDate, selectedStartDate]);

  const updateWorkExperience = e => {
    e.preventDefault();
    fetch(`${UPDATE_EXPERIENCE}`, {
      method: "POST",
      headers: {
        id,
        jobTitle: jobTitle,
        name: companyNameState,
        description: jobDesc,
        notes: noticePeriodState,
        fromDate: startDateState,
        toDate: endDateState
      }
    })
      .then(res => res.json())
      .then(data => window.location.reload())
      .catch(error => console.log(error));
  };

  const deleteItem = () => {
    fetch(`${DELETE_EXPERIENCE}`, {
      method: "POST",
      headers: {
        id
      }
    })
      .then(res => res.json())
      .then(data => window.location.reload())
      .catch(error => console.log(error));
  };

  return (
    <WorkExperienceItemStyles>
      <Wrapper>
        <Info>
          <Title>{title}</Title>
          <CompanyName>{companyName}</CompanyName>
        </Info>
        <Dates>
          {startDate} - {endDate}
        </Dates>
        {AuthState.userID == creator && (
          <Actions>
            <InlineList>
              <InlineListItem>
                <Button colored onClick={toggleModal}>
                  <FontAwesomeIcon icon="edit" size="1x" />
                </Button>
              </InlineListItem>
              <InlineListItem>
                <Button colored icon onClick={deleteItem}>
                  <FontAwesomeIcon icon="trash" size="1x" />
                </Button>
              </InlineListItem>
            </InlineList>
          </Actions>
        )}
      </Wrapper>
      <NoticePeriod>{noticePeriod} Notice Period Required</NoticePeriod>
      <Desc>{desc}</Desc>

      {showModal && (
        <Modal>
          <Title>Edit Work Experience</Title>
          <Form style={{ marginTop: "25px" }} onSubmit={updateWorkExperience}>
            <Row>
              <Col md={12}>
                <Input
                  type="text"
                  placeholder="Job Title"
                  label="Job Title"
                  value={jobTitle}
                  handleInputChange={e => setJobTitle(e.target.value)}
                />
              </Col>
              <Col md={12}>
                <Input
                  type="text"
                  placeholder="Company Name"
                  label="Company Name"
                  value={companyNameState}
                  handleInputChange={e => setCompanyNameState(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <div className="form__group">
                  <label className="form__label">Start Date</label>
                  <DatePicker
                    selected={selectedStartDate}
                    onChange={data => setSelectedStartDate(data)}
                    value={startDateState}
                    dateFormat="yyyy-MMMM-dd"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form__group">
                  <label className="form__label">End Date</label>
                  <DatePicker
                    selected={selectedEndDate}
                    onChange={data => setSelectedEndDate(data)}
                    value={endDateState}
                    dateFormat="yyyy-MMMM-dd"
                  />
                </div>
              </Col>
              <Col md={12}>
                <Input
                  type="text"
                  placeholder="Notice Period"
                  label="Notice Period"
                  value={noticePeriodState}
                  handleInputChange={e => setNoticePeriod(e.target.value)}
                />
              </Col>
              <Col md={12}>
                <Textarea
                  placeholder="Job Description"
                  label="Job Description"
                  value={jobDesc}
                  handleInputChange={e => setJobDesc(e.target.value)}
                />
              </Col>
            </Row>
            <DefaultButtonOutline type="submit">Submit</DefaultButtonOutline>
          </Form>
          <Styled.Close>
            <Button type="button" onClick={toggleModal}>
              <FontAwesomeIcon
                icon="times"
                size="1x"
                style={{ color: "#333" }}
              />
            </Button>
          </Styled.Close>
        </Modal>
      )}
    </WorkExperienceItemStyles>
  );
};

export default WorkExperienceItem;
