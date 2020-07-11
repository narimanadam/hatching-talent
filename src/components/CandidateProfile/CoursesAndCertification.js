import React, { useState, useContext, useEffect } from "react";
import Labels from "../Labels";
import Box from "../../common/components/Box";
import { Button, DefaultButtonOutline } from "../../styles/Button";
import { ADD_EDUCATION, GET_EDUCATIONS } from "../../common/helpers/apiUrls";
import AuthContext from "../../common/context/AuthContext";
import Message from "../../common/components/Message/Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../common/components/Modal/Modal";
import * as Styled from "../../common/components/Modal/Modal.styles";
import Input from "../../common/components/Input";
import { Form } from "../../styles/FormStyles";
import Textarea from "../../common/components/Textarea/Textarea";
import CoursesAndCertificationItem from "./CoursesAndCertificationItem";

const CoursesAndCertification = ({ userId }) => {
  const [showModal, setShowModal] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseGraduationYear, setCourseGraduationYear] = useState("");
  const [courseSchoolName, setCourseSchoolName] = useState("");
  const [courses, setCourses] = useState([]);
  const { AuthState } = useContext(AuthContext);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const submitCourse = e => {
    e.preventDefault();
    fetch(`${ADD_EDUCATION}`, {
      method: "POST",
      headers: {
        forUser: AuthState.userID,
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
        <Modal title="Add New Course / Certificate">
          <Form onSubmit={submitCourse}>
            <Input
              type="text"
              name="courseName"
              placeholder="Course / Certificate Name"
              handleInputChange={e => setCourseName(e.target.value)}
            />
            <Input
              type="text"
              name="courseSchoolName"
              placeholder="Where did you take this course/ certificate ?"
              handleInputChange={e => setCourseSchoolName(e.target.value)}
            />
            <Input
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
      {AuthState.userID == userId && (
        <Button type="button" onClick={toggleModal} colored block>
          <FontAwesomeIcon icon="plus" />
          Add New Course
        </Button>
      )}
    </Box>
  );
};

export default CoursesAndCertification;
