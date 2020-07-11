import React from "react";
import { Container, Row, Col } from "react-grid-system";
import ProfileInfoBox from "../components/ProfileInfoBox";
import Box from "../common/components/Box";
// import ITSkills from "../components/CandidateProfile/ITSkills";
import JobPreference from "../components/CandidateProfile/JobPreference";
import WorkExperience from "../components/CandidateProfile/WorkExperience";
import Skills from "../components/CandidateProfile/Skills";
import EducationalDetails from "../components/CandidateProfile/EducationalDetails";
// import Projects from "../components/CandidateProfile/Projects";
import CoursesAndCertification from "../components/CandidateProfile/CoursesAndCertification";
import PersonalDetails from "../components/CandidateProfile/PersonalDetails";
import OnlinePresence from "../components/CandidateProfile/OnlinePresence";
import AwardsAndAchievements from "../components/CandidateProfile/AwardsAndAchievements";
import LanguagesKnown from "../components/CandidateProfile/LanguagesKnown";
import ProfileDesc from "../components/CandidateProfile/ProfileDesc";

const CandidateProfilePage = props => {
  return (
    <Container style={{ marginBottom: "40px", marginTop: "40px" }}>
      <Row>
        <Col sm={4} className="bg-gray">
          <ProfileInfoBox userId={props.userId} />
        </Col>
        <Col sm={8}>
          {/* <Box heading="Resume">hhhh</Box> */}
          <ProfileDesc userId={props.userId} />
          <Skills userId={props.userId} />
          <JobPreference userId={props.userId} />
          <WorkExperience userId={props.userId} />
          <EducationalDetails userId={props.userId} />
          {/* <Projects userId={props.userId} /> */}
          <CoursesAndCertification userId={props.userId} />
          <PersonalDetails userId={props.userId} />
          <LanguagesKnown userId={props.userId} />
          <AwardsAndAchievements userId={props.userId} />
          <OnlinePresence userId={props.userId} />
        </Col>
      </Row>
    </Container>
  );
};

export default CandidateProfilePage;
