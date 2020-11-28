import React, { useState, useEffect, useContext } from "react";
import Modal from "../../../common/components/Modal/Modal";
import Box from "../../../common/components/Box";
import { Form } from "../../../styles/FormStyles";
import Input from "../../../common/components/Input";
import Textarea from "../../../common/components/Textarea/Textarea";
import * as Styled from "../../../common/components/Modal/Modal.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-datepicker/dist/react-datepicker.css";
import { Row, Col } from "react-grid-system";
import { ADD_EDUCATION, GET_EDUCATIONS } from "../../../common/helpers/apiUrls";
import AuthContext from "../../../common/context/AuthContext";
import EducationItem from "./education-item";
import Button from "../../../common/components/Button";
import Message from "../../../common/components/Message";
import EducationLoader from "./education-loader";

const EducationalDetails = ({ userId }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    fetch(`${GET_EDUCATIONS}`, {
      method: "POST",
      headers: {
        type: "education",
        forUser: userId
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setIsLoading(false);
          setEducations(data);
        }
      })
      .catch(error => console.log(error));
  }, []);

  if (isLoading) return <EducationLoader />;

  return (
    <>
      <Box heading="Educational Details">
        {!educations.length && <Message text="No Education Details" />}
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
            />
          )
        )}
        {showModal && (
          <Modal title="Add Educational Details">
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
            text="Add New Educational Detail"
            icon={<FontAwesomeIcon icon="plus" />}
            mt={3}
          />
        )}
      </Box>
    </>
  );
};

export default EducationalDetails;
