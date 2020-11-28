import React from "react";
import ProfileInfoBox from "../components/ProfileInfoBox";
// import ITSkills from "../components/CandidateProfile/ITSkills";
import JobPreference from "../components/CandidateProfile/JobPreference";
import WorkExperience from "../components/CandidateProfile/work-experience/work-experience";
import Skills from "../components/CandidateProfile/Skills";
import EducationalDetails from "../components/CandidateProfile/education/education";
// import Projects from "../components/CandidateProfile/Projects";
import CoursesAndCertification from "../components/CandidateProfile/courses/courses";
import PersonalDetails from "../components/CandidateProfile/PersonalDetails";
import AwardsAndAchievements from "../components/CandidateProfile/awards/awards";
import Languages from "../components/CandidateProfile/languages/languages";
import Bio from "../components/CandidateProfile/bio/bio";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";
import { SidebarLayoutContainer } from "../Layout/SidebarLayout/SidebarLayout";

const CandidateProfilePage = props => {
  return (
    <SidebarLayoutContainer>
      <ProfileInfoBox userId={props.userId} />
      {/* <Box heading="Resume">hhhh</Box> */}
      <Bio userId={props.userId} />
      <Skills userId={props.userId} />
      {/* <JobPreference userId={props.userId} /> */}
      <WorkExperience userId={props.userId} />
      <EducationalDetails userId={props.userId} />
      {/* <Projects userId={props.userId} /> */}

      <CoursesAndCertification userId={props.userId} />
      {/* <PersonalDetails userId={props.userId} /> */}
      <Languages userId={props.userId} />
      <AwardsAndAchievements userId={props.userId} />
    </SidebarLayoutContainer>
  );
};

export default WithSidebarLayout(CandidateProfilePage);
