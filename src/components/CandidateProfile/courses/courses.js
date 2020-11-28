import React, { useState, useContext, useEffect } from "react";
// import Labels from "../Labels";
import Box from "../../../common/components/Box";
import { ADD_EDUCATION, GET_EDUCATIONS } from "../../../common/helpers/apiUrls";
import AuthContext from "../../../common/context/AuthContext";
import Message from "../../../common/components/Message/Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../../common/components/Modal/Modal";
import Input from "../../../common/components/Input";
import { Form } from "../../../styles/FormStyles";
import Textarea from "../../../common/components/Textarea/Textarea";
import CoursesAndCertificationItem from "./courses-item";
import Button from "../../../common/components/Button";
import * as Styled from "../../../common/components/Modal/Modal.styles";
import CoursesLoader from "./courses-loader";

const CoursesAndCertification = ({ userId }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    setIsLoading(true);
    fetch(`${GET_EDUCATIONS}`, {
      method: "POST",
      headers: {
        forUser: userId,
        type: "course"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setCourses(data);
          setIsLoading(false);
        }
      })
      .catch(error => console.log(error));
  }, []);

  if (isLoading) return <CoursesLoader />;

  return (
    <>
      <Box heading="Courses &amp; Certification">
        {!courses.length && <Message text="No Courses Added yet" />}
        {courses.map(
          ({ place_name, name, description, id, graduation_year }) => (
            <CoursesAndCertificationItem
              desc={description}
              courseName={name}
              schoolName={place_name}
              gradYear={graduation_year}
              id={id}
              key={id}
              creatorUser={userId}
            />
          )
        )}

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
              <Button type="submit" text="Add Course" variant="primaryButton" />
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
            text="Add New Course / Certificate"
            icon={<FontAwesomeIcon icon="plus" />}
            mt={3}
          />
        )}
      </Box>
    </>
  );
};

export default CoursesAndCertification;
