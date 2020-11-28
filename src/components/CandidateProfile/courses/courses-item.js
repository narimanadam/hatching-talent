import React, { useState, useContext } from "react";
import {
  CoursesAndCertificationItemStyles,
  CourseName,
  SchoolName,
  Desc,
  Info,
  GradYear
} from "./courses.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DELETE_EDUCATION,
  UPDATE_EDUCATION
} from "../../../common/helpers/apiUrls";
import Modal from "../../../common/components/Modal/Modal";
import * as Styled from "../../../common/components/Modal/Modal.styles";
import Input from "../../../common/components/Input";
import { Form } from "../../../styles/FormStyles";
import Textarea from "../../../common/components/Textarea/Textarea";
import AuthContext from "../../../common/context/AuthContext";
import { Flex } from "reflexbox";
import Button from "../../../common/components/Button";

const CoursesAndCertificationItem = ({
  schoolName,
  courseName,
  desc,
  id,
  gradYear,
  creatorUser
}) => {
  const [showModal, setShowModal] = useState(false);
  const [courseNameState, setCourseName] = useState(courseName);
  const [courseSchoolName, setCourseSchoolName] = useState(schoolName);
  const [courseGradYear, setCourseGradYear] = useState(gradYear);
  const [courseDesc, setCourseDesc] = useState(desc);
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

  const updateCourse = e => {
    e.preventDefault();
    fetch(`${UPDATE_EDUCATION}`, {
      method: "POST",
      headers: {
        id: id,
        name: courseNameState,
        placeName: courseSchoolName,
        description: courseDesc,
        graduationYear: courseGradYear
      }
    })
      .then(res => res.json())
      .then(data => window.location.reload())
      .catch(error => console.log("errorrrr", error.message));
  };

  return (
    <CoursesAndCertificationItemStyles>
      <Info>
        <CourseName>{courseName}</CourseName>
        <SchoolName>{schoolName}</SchoolName>
        <GradYear>{gradYear}</GradYear>
        <Desc>{desc}</Desc>
      </Info>
      {AuthState.userID === +creatorUser && (
        <Flex>
          <Button
            variant="linkButton"
            icon={<FontAwesomeIcon icon="edit" size="1x" />}
            onClick={toggleModal}
          />
          <Button
            variant="linkButton"
            icon={<FontAwesomeIcon icon="trash" size="1x" />}
            onClick={deleteItem}
          />
        </Flex>
      )}
      {showModal && (
        <Modal>
          <Styled.Title>Edit Course &amp; Certifications</Styled.Title>
          <Form onSubmit={updateCourse}>
            <Input
              type="text"
              name="courseName"
              placeholder="Course / Certificate Name"
              value={courseNameState}
              handleInputChange={e => setCourseName(e.target.value)}
            />
            <Input
              type="text"
              name="courseSchoolName"
              placeholder="Where did you take this course/ certificate ?"
              value={courseSchoolName}
              handleInputChange={e => setCourseSchoolName(e.target.value)}
            />
            <Input
              type="text"
              name="courseGraduationYear"
              placeholder="Course Graduation Year"
              value={courseGradYear}
              handleInputChange={e => setCourseGradYear(e.target.value)}
            />
            <Textarea
              name="courseDescription"
              placeholder="Tell us more about this course / certificate"
              value={courseDesc}
              handleInputChange={e => setCourseDesc(e.target.value)}
            />
            <Button variant="primaryButton" text="Submit" type="submit" />
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
    </CoursesAndCertificationItemStyles>
  );
};

export default CoursesAndCertificationItem;
