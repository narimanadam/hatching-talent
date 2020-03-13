import React, { useState, useEffect, useContext } from "react";
import Modal from "../Modal";
import Box from "../Box";
import DefinitionList from "../DefinitionList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-grid-system";
import { Button, DefaultButtonOutline } from "../../styles/Button";
import { Title } from "../../styles/ModalStyles";
import { Form } from "../../styles/FormStyles";
import InputField from "../InputField";
import { EDIT_USER_INFO, GET_USER_INFO } from "../../helpers/apiUrls";
import AuthContext from "../../context/AuthContext";

const JobPreference = () => {
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [industry, setIndustry] = useState("");
  const [jobFunction, setJobFunction] = useState("");
  const [role, setRole] = useState("");
  const [jobType, setJobType] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [preferredShift, setPreferredShift] = useState("");
  const [preferredLocation, setPreferredLocation] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [isSixSaysWork, setIsSixSaysWork] = useState("");
  const [isEarlyStage, setIsEarlyStage] = useState("");
  const [authenticated] = useContext(AuthContext);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const EditJobPreference = e => {
    e.preventDefault();
    fetch(`${EDIT_USER_INFO}`, {
      method: "POST",
      headers: {
        userId: authenticated.userID,
        // employemntType: employmentType,
        // prferedShift: preferredShift,
        // prferedLocation: preferredLocation,
        expectedSalary: expectedSalary
        // isSixSaysWork: isSixSaysWork,
        // isEarlyStage: isEarlyStage
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error));
  };

  const getUserInfo = () => {
    fetch(`${GET_USER_INFO}`, {
      method: "POST",
      headers: {
        userId: authenticated.userID
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("getuserinfo", data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    setIndustry("IT/Computer-Software");
    setJobFunction("IT, Finance & Accounts");
    setRole("Business Analyst, ERP, Project Manager, CRM Functional");
    setJobType("Permenant");
    setEmploymentType("Full Time");
    setPreferredShift("any");
    setPreferredLocation("UAE, Abu Dhabi");
    setExpectedSalary("12,000");
    setIsSixSaysWork("Yes");
    setIsEarlyStage("No");
    getUserInfo();
  }, []);

  return (
    <Box heading="Job Preferences">
      <Row>
        <Col sm={6}>
          <DefinitionList term="industry" desc={industry} />
        </Col>
        <Col sm={6}>
          <DefinitionList term="function" desc={jobFunction} />
        </Col>
        <Col sm={6}>
          <DefinitionList term="Role" desc={role} />
        </Col>
        <Col sm={6}>
          <DefinitionList term="job type" desc={jobType} />
        </Col>
        <Col sm={6}>
          <DefinitionList
            term="employment type"
            desc={userInfo.employemnt_type ? userInfo.employemnt_type : "-"}
          />
        </Col>
        <Col sm={6}>
          <DefinitionList
            term="preferred shift"
            desc={userInfo.prfered_shift ? userInfo.prferedShift : "-"}
          />
        </Col>
        <Col sm={6}>
          <DefinitionList term="preferred location" desc={preferredLocation} />
        </Col>
        <Col sm={6}>
          <DefinitionList
            term="Expected Salary"
            desc={
              userInfo.expected_salary !== null ? userInfo.expected_salary : "-"
            }
          />
        </Col>
        <Col sm={6}>
          <DefinitionList
            term="Are you willing to work 6 days a week?"
            desc={userInfo.is_six_days_work ? userInfo.is_six_days_work : "-"}
          />
        </Col>
        <Col sm={6}>
          <DefinitionList
            term="Are you open to joining early stage startup?"
            desc={userInfo.is_early_stage ? userInfo.is_early_stage : "-"}
          />
        </Col>
      </Row>

      {showModal && (
        <Modal handleClose={toggleModal}>
          <Title>Edit Job Preference</Title>
          <Form onSubmit={EditJobPreference}>
            <Row>
              <Col md={6}>
                <InputField
                  type="text"
                  placeholder="Industry"
                  value={industry}
                  handleInputChange={e => setIndustry(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <InputField
                  type="text"
                  placeholder="Job Function"
                  value={jobFunction}
                  handleInputChange={e => setJobFunction(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <InputField
                  type="text"
                  placeholder="Role"
                  value={role}
                  handleInputChange={e => setRole(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <InputField
                  type="text"
                  placeholder="Job Type"
                  value={jobType}
                  handleInputChange={e => setJobType(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <InputField
                  type="text"
                  placeholder="Employment Type"
                  value={employmentType}
                  handleInputChange={e => setEmploymentType(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <InputField
                  type="text"
                  placeholder="Preferred Shift"
                  value={preferredShift}
                  handleInputChange={e => setPreferredShift(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <InputField
                  type="text"
                  placeholder="Preferred Location"
                  value={preferredLocation}
                  handleInputChange={e => setPreferredLocation(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <InputField
                  type="text"
                  placeholder="Expected Salary"
                  value={expectedSalary}
                  handleInputChange={e => setExpectedSalary(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <InputField
                  type="text"
                  placeholder="Availability to work 6 days"
                  value={isSixSaysWork}
                  handleInputChange={e => setIsSixSaysWork(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <InputField
                  type="text"
                  placeholder="Join Early Stage Startup"
                  value={isEarlyStage}
                  handleInputChange={e => setIsEarlyStage(e.target.value)}
                />
              </Col>
            </Row>
            <DefaultButtonOutline type="submit">Submit</DefaultButtonOutline>
          </Form>
        </Modal>
      )}
      <Button colored onClick={toggleModal} type="button">
        <FontAwesomeIcon icon="edit" size="1x" />
      </Button>
    </Box>
  );
};

export default JobPreference;
