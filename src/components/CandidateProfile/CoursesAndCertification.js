import React, { useState, useContext, useEffect } from "react";
import Labels from "../Labels";
import Box from "../Box";
import {
  MainOutlineButton,
  MainButton,
  Button,
  DefaultButtonOutline
} from "../../styles/Button";
import { InlineList, InlineListItem } from "../../styles/ListStyle";
import { ADD_EDUCATION, GET_EDUCATIONS } from "../../helpers/apiUrls";
import AuthContext from "../../context/AuthContext";
import Message from "../Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../Modal";
import { Title } from "../../styles/ModalStyles";
import InputField from "../InputField";
import { Form } from "../../styles/FormStyles";
import Textarea from "../Textarea";
import CoursesAndCertificationItem from "./CoursesAndCertificationItem";

const CoursesAndCertification = ({ userId }) => {
  const [showModal, setShowModal] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseGraduationYear, setCourseGraduationYear] = useState("");
  const [courseSchoolName, setCourseSchoolName] = useState("");
  const [courses, setCourses] = useState([]);
  const [authenticated] = useContext(AuthContext);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const submitCourse = e => {
    e.preventDefault();
    fetch(`${ADD_EDUCATION}`, {
      method: "POST",
      headers: {
        forUser: authenticated.userID,
        name: courseName,
        description: courseDescription,
        graduationYear: courseGraduationYear,
        placeName: courseSchoolName,
        type: "course"
      }
    })
      .then(res => res.json())
      .then(data => window.location.reload())
      .catch(error => console.log(error));
  };

  const getCourses = () => {
    fetch(`${GET_EDUCATIONS}`, {
      method: "POST",
      headers: {
        forUser: userId,
        type: "course"
      }
    })
      .then(res => res.json())
      .then(data => {
        setCourses(data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getCourses();
  }, [courseName]);

  return (
    <Box heading="Courses &amp; Certification">
      {!courses.length && (
        <Message text="Enter details of any professional course or certification you may have done"></Message>
      )}

      {courses.map(({ place_name, name, description, id, graduation_year }) => (
        <CoursesAndCertificationItem
          desc={description}
          courseName={name}
          schoolName={place_name}
          gradYear={graduation_year}
          id={id}
          key={id}
          creatorUser={userId}
        />
      ))}

      {showModal && (
        <Modal>
          <Title>Add New Course / Certificate</Title>
          <Form onSubmit={submitCourse}>
            <InputField
              type="text"
              name="courseName"
              placeholder="Course / Certificate Name"
              handleInputChange={e => setCourseName(e.target.value)}
            />
            <InputField
              type="text"
              name="courseSchoolName"
              placeholder="Where did you take this course/ certificate ?"
              handleInputChange={e => setCourseSchoolName(e.target.value)}
            />
            <InputField
              type="text"
              name="courseGraduationYear"
              placeholder="Course Graduation Year"
              handleInputChange={e => setCourseGraduationYear(e.target.value)}
            />
            <Textarea
              name="courseDescription"
              placeholder="Tell us more about this course / certificate"
              handleInputChange={e => setCourseDescription(e.target.value)}
            />
            <DefaultButtonOutline type="submit">
              Add Course
            </DefaultButtonOutline>
          </Form>
        </Modal>
      )}
      {authenticated.userID == userId && (
        <Button type="button" onClick={toggleModal} colored block>
          <FontAwesomeIcon icon="plus" />
          Add New Course
        </Button>
      )}
    </Box>
  );
};

export default CoursesAndCertification;
