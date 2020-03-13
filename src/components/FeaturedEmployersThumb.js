import React from "react";
import { Col } from "react-grid-system";
import employerCover from "../assets/employer-cover.jpg";
import employerLogo from "../assets/employer-logo.jpg";
import {
  EmployerThumb,
  EmployerThumbCover,
  EmployerThumbInfo,
  EmployerThumbLogo,
  EmployerThumbName,
  EmployerThumbCoverWrapper
} from "../pages/LandingPageStyle";
const FeaturedEmployersThumb = ({ name }) => {
  return (
    <Col md={4}>
      <EmployerThumb>
        <EmployerThumbCoverWrapper>
          <EmployerThumbCover src={employerCover} />
        </EmployerThumbCoverWrapper>
        <EmployerThumbInfo>
          <EmployerThumbName>{name}</EmployerThumbName>
          <EmployerThumbLogo src={employerLogo} />
        </EmployerThumbInfo>
      </EmployerThumb>
    </Col>
  );
};

export default FeaturedEmployersThumb;
