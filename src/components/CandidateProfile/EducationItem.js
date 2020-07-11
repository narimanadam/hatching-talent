import React, { useState, useContext } from "react";
import {
  EducationItemStyled,
  Degree,
  SchoolName,
  GraduationYear,
  Grade,
  Desc,
  Info,
  Actions
} from "../../styles/EducationItemStyles";
import { InlineList, InlineListItem } from "../../styles/ListStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, DefaultButtonOutline } from "../../styles/Button";
import {
  DELETE_EDUCATION,
  UPDATE_EDUCATION
} from "../../common/helpers/apiUrls";

import Modal from "../../common/components/Modal/Modal";
import { Form } from "../../styles/FormStyles";
import Input from "../../common/components/Input";
import Textarea from "../../common/components/Textarea/Textarea";
import * as Styled from "../../common/components/Modal/Modal.styles";
import { Row, Col } from "react-grid-system";
import AuthContext from "../../common/context/AuthContext";

const EducationItem = ({
  schoolName,
  graduationYear,
  grade,
  degree,
  desc,
  id,
  creatorUser
}) => {
  const [showModal, setShowModal] = useState(false);
  const [schoolNameState, setSchoolName] = useState(schoolName);
  const [graduationYearState, setGraduationYear] = useState(graduationYear);
  const [gradeState, setGrade] = useState(grade);
  const [degreeState, setDegree] = useState(degree);
  const [descState, setDesc] = useState(desc);
  const { AuthState } = useContext(AuthContext);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const deleteItem = () => {
    fetch(`${DELETE_EDUCATION}`, {
      method: "POST",
      headers: {
        id
      }
    })
      .then(res => res.json())
      .then(data => window.location.reload())
      .catch(error => console.log(error));
  };

  const updateEducation = e => {
    e.preventDefault();
    fetch(`${UPDATE_EDUCATION}`, {
      method: "POST",
      headers: {
        id: id,
        name: degreeState,
        placeName: schoolNameState,
        description: descState,
        grade: gradeState,
        graduationYear: graduationYearState
      }
    })
      .then(res => res.json())
      .then(data => window.location.reload())
      .catch(error => console.log("errorrrr", error.message));
  };

  return (
    <EducationItemStyled>
      <Info>
        <Degree>{degree}</Degree>
        <SchoolName>{schoolName}</SchoolName>
        <GraduationYear>({graduationYear})</GraduationYear>
        <Grade>Grade: {grade}</Grade>
        <Desc>{desc}</Desc>
      </Info>
      {AuthState.userID == creatorUser && (
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

      {showModal && (
        <Modal>
          <Styled.Title>Edit Educational Details</Styled.Title>
          <Form style={{ marginTop: "25px" }} onSubmit={updateEducation}>
            <Row>
              <Col md={12}>
                <Input
                  type="text"
                  placeholder="Degree"
                  label="Degree"
                  value={degreeState}
                  handleInputChange={e => setDegree(e.target.value)}
                />
              </Col>
              <Col md={12}>
                <Input
                  type="text"
                  placeholder="School Name"
                  label="School Name"
                  value={schoolNameState}
                  handleInputChange={e => setSchoolName(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <Input
                  type="text"
                  placeholder="Grade"
                  label="Grade"
                  value={gradeState}
                  handleInputChange={e => setGrade(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <Input
                  type="text"
                  placeholder="Graduation Year"
                  label="Graduation Year"
                  value={graduationYearState}
                  handleInputChange={e => setGraduationYear(e.target.value)}
                />
              </Col>
              <Col md={12}>
                <Textarea
                  placeholder="Description"
                  label="Description"
                  value={descState}
                  handleInputChange={e => setDesc(e.target.value)}
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
    </EducationItemStyled>
  );
};

export default EducationItem;
