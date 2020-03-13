import React from "react";
import ProfileInfoBox from "../components/ProfileInfoBox";
import { Container, Row, Col } from "react-grid-system";
import EmployerDescription from "../components/EmployerProfile/EmployerDescription";
import EmployerReviews from "../components/EmployerProfile/EmployerReviews";

const EmployerProfilePage = props => {
  return (
    <Container style={{ marginBottom: "40px", marginTop: "40px" }}>
      <Row>
        <Col sm={3} className="bg-gray">
          <ProfileInfoBox userId={props.employerId} />
        </Col>
        <Col sm={9}>
          <EmployerDescription userId={props.employerId} />
          <EmployerReviews userId={props.employerId} />
        </Col>
      </Row>
    </Container>
  );
};

export default EmployerProfilePage;
