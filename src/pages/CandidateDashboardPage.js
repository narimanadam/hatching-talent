import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import JobBox from "../components/JobBox";
import ProfileInfoBox from "../components/ProfileInfoBox";
import CandidateStats from "../components/CandidateStats";
import ViewedProfile from "../assets/view-profile.png";
import ContactedYou from "../assets/contacted-you.png";
import CompaniesFollowed from "../assets/companies-followed.png";
import RecruitersFollowed from "../assets/recruiters-followed.png";

class CandidateDashboardPage extends Component {
  render() {
    return (
      <Container style={{ marginBottom: "40px", marginTop: "40px" }}>
        <Row>
          <Col sm={3}>
            <CandidateStats
              icon={ViewedProfile}
              number="28"
              text="Viewed your profile"
            />
          </Col>
          <Col sm={3}>
            <CandidateStats
              icon={ContactedYou}
              number="12"
              text="Applied Jobs"
            />
          </Col>
          <Col sm={3}>
            <CandidateStats
              icon={CompaniesFollowed}
              number="22"
              text="Saved Jobs"
            />
          </Col>
          {/* <Col sm={3}>
            <CandidateStats
              icon={RecruitersFollowed}
              number="08"
              text="Recruiters Followed"
            />
          </Col> */}
        </Row>
        <h2 className="page__title">Dashboard</h2>
        <Row>
          <Col sm={4} className="bg-gray">
            <ProfileInfoBox />
          </Col>
          <Col sm={8}>
            <h3 className="page__subtitle">Recommended Jobs for You</h3>
            <JobBox />
            <JobBox />
            <JobBox />
            <JobBox />
            <JobBox />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CandidateDashboardPage;
