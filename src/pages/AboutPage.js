import React, { Component } from "react";
import AboutTabs from "../components/Tabs/AboutTabs";
import { Container } from "react-grid-system";
import { SectionHeadingStyle } from "../components/SectionHeading";
import App from "../App";

class AboutPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <SectionHeadingStyle dark>Employers</SectionHeadingStyle>
          <AboutTabs />
        </Container>
      </div>
    );
  }
}

export default AboutPage;
