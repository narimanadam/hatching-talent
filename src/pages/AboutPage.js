import React from "react";
import AboutTabs from "../components/Tabs/AboutTabs";
import { Container } from "react-grid-system";
import { SectionHeadingStyle } from "../components/SectionHeading";

const AboutPage = () => {
  return (
    <Container>
      <SectionHeadingStyle dark>Employers</SectionHeadingStyle>
      <AboutTabs />
    </Container>
  );
};

export default AboutPage;
