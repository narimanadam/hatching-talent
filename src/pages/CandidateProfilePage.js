import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import ProfileInfoBox from "../components/ProfileInfoBox";
import Labels from "../components/Labels";
import Box from "../components/Box";
import { MainOutlineButton, MainButton } from "../styles/Button";
import InputField from "../components/InputField";
import { InlineList, InlineListItem } from "../styles/ListStyle";
import { Form } from "../styles/FormStyles";
import ITSkills from "../components/CandidateProfile/ITSkills";
import JobPreference from "../components/CandidateProfile/JobPreference";
import WorkExperience from "../components/CandidateProfile/WorkExperience";
import Skills from "../components/CandidateProfile/Skills";
import EducationalDetails from "../components/CandidateProfile/EducationalDetails";
import Projects from "../components/CandidateProfile/Projects";
import CoursesAndCertification from "../components/CandidateProfile/CoursesAndCertification";
import PersonalDetails from "../components/CandidateProfile/PersonalDetails";
import OnlinePresence from "../components/CandidateProfile/OnlinePresence";
import AwardsAndAchievements from "../components/CandidateProfile/AwardsAndAchievements";
import LanguagesKnown from "../components/CandidateProfile/LanguagesKnown";

class CandidateProfilePage extends Component {
  state = {
    candidate: []
  };

  render() {
    return (
      <Container style={{ marginBottom: "40px", marginTop: "40px" }}>
        <h2 className="page__title">Profile</h2>
        <Row>
          <Col sm={4} className="bg-gray">
            <ProfileInfoBox />
          </Col>
          <Col sm={8}>
            <Form>
              <Box heading="Resume">hhhh</Box>
              <Skills />
              <JobPreference />
              <WorkExperience />
              <EducationalDetails />
              <Projects />
              <CoursesAndCertification />
              <PersonalDetails />
              <LanguagesKnown />
              <AwardsAndAchievements />
              <OnlinePresence />
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CandidateProfilePage;
