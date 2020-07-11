import React, { useState, useEffect, useContext } from "react";
import Modal from "../../common/components/Modal/Modal";
import Box from "../../common/components/Box";
import { Form } from "../../styles/FormStyles";
import Input from "../../common/components/Input";
import Textarea from "../../common/components/Textarea/Textarea";
import * as Styled from "../../common/components/Modal/Modal.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-datepicker/dist/react-datepicker.css";
import { Button, DefaultButtonOutline } from "../../styles/Button";
import { Row, Col } from "react-grid-system";
import { ADD_EDUCATION, GET_EDUCATIONS } from "../../common/helpers/apiUrls";
import AuthContext from "../../common/context/AuthContext";
import EducationItem from "./EducationItem";

const EducationalDetails = ({ userId }) => {
  const [showModal, setShowModal] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [grade, setGrade] = useState("");
  const [graduationYear, setGraduationYear] = useState(new Date());
  const [desc, setDesc] = useState("");
  const [educations, setEducations] = useState([]);
  const { AuthState } = useContext(AuthContext);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const getEducations = () => {
    fetch(`${GET_EDUCATIONS}`, {
      method: "POST",
      headers: {
        type: "education",
        forUser: userId
      }
    })
      .then(res => res.json())
      .then(data => {
        setEducations(data);
      })
      .catch(error => console.log(error));
  };

  const submitEducation = e => {
    e.preventDefault();
    fetch(`${ADD_EDUCATION}`, {
      method: "POST",
      headers: {
        forUser: AuthState.userID,
        type: "education",
        name: degree,
        placeName: schoolName,
        description: desc,
        grade: grade,
        graduationYear: graduationYear
      }
    })
      .then(res => res.json())
      .then(data => window.location.reload())
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getEducations();
  }, []);

  return (
    <Box heading="Educational Details">
      {educations.map(
        ({ place_name, graduation_year, grade, name, description, id }) => (
          <EducationItem
            schoolName={place_name}
            graduationYear={graduation_year}
            grade={grade}
            degree={name}
            desc={description}
            id={id}
            key={id}
            creatorUser={userId}
          ></EducationItem>
        )
      )}
      {showModal && (
        <Modal title="Add Educational Details">
          <p>Work experience</p>
          <Form style={{ marginTop: "25px" }} onSubmit={submitEducation}>
            <Row>
              <Col md={12}>
                <Input
                  type="text"
                  placeholder="Degree"
                  label="Degree"
                  handleInputChange={e => setDegree(e.target.value)}
                />
              </Col>
              <Col md={12}>
                <Input
                  type="text"
                  placeholder="School Name"
                  label="School Name"
                  handleInputChange={e => setSchoolName(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <Input
                  type="text"
                  placeholder="Grade"
                  label="Grade"
                  handleInputChange={e => setGrade(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <Input
                  type="text"
                  placeholder="Graduation Year"
                  label="Graduation Year"
                  handleInputChange={e => setGraduationYear(e.target.value)}
                />
              </Col>
              <Col md={12}>
                <Textarea
                  placeholder="Description"
                  label="Description"
                  handleInputChange={e => setDesc(e.target.value)}
                />
              </Col>
            </Row>
            <DefaultButtonOutline type="submit">Submit</DefaultButtonOutline>
          </Form>
        </Modal>
      )}
      {AuthState.userID == userId && (
        <Button type="button" onClick={toggleModal} colored block>
          <FontAwesomeIcon icon="plus" />
          Add New Educational Detail
        </Button>
      )}
    </Box>
  );
};

export default EducationalDetails;
