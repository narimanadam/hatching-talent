import React, { useState, useContext } from "react";
import {
  CoursesAndCertificationItemStyles,
  CourseName,
  SchoolName,
  Desc,
  Info,
  Actions,
  GradYear
} from "../../styles/CoursesAndCertificationItemStyles";
import { InlineList, InlineListItem } from "../../styles/ListStyle";
import { Button, DefaultButtonOutline } from "../../styles/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DELETE_EDUCATION, UPDATE_EDUCATION } from "../../helpers/apiUrls";
import Modal from "../Modal";
import { Title } from "../../styles/ModalStyles";
import InputField from "../InputField";
import { Form } from "../../styles/FormStyles";
import Textarea from "../Textarea";
import AuthContext from "../../context/AuthContext";

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
  const [authenticated] = useContext(AuthContext);

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
      {authenticated.userID == creatorUser && (
        <Actions>
          <InlineList>
            <InlineListItem>
              <Button colored onClick={toggleModal}>
                <FontAwesomeIcon icon="edit" />
              </Button>
            </InlineListItem>
            <InlineListItem>
              <Button colored onClick={deleteItem}>
                <FontAwesomeIcon icon="trash" />
              </Button>
            </InlineListItem>
          </InlineList>
        </Actions>
      )}
      {showModal && (
        <Modal>
          <Title>Edit Course &amp; Certifications</Title>
          <Form onSubmit={updateCourse}>
            <InputField
              type="text"
              name="courseName"
              placeholder="Course / Certificate Name"
              value={courseNameState}
              handleInputChange={e => setCourseName(e.target.value)}
            />
            <InputField
              type="text"
              name="courseSchoolName"
              placeholder="Where did you take this course/ certificate ?"
              value={courseSchoolName}
              handleInputChange={e => setCourseSchoolName(e.target.value)}
            />
            <InputField
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
            <DefaultButtonOutline type="submit">
              Update Course
            </DefaultButtonOutline>
          </Form>
        </Modal>
      )}
    </CoursesAndCertificationItemStyles>
  );
};

export default CoursesAndCertificationItem;
