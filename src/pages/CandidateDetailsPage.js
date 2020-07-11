import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import ProfileInfoBox from "../components/ProfileInfoBox";
import Box from "../common/components/Box";

const CandidateDetailsPage = () => {
  const [candidate, setCandidate] = useState("");

  const getCandidateInfo = () => {
    fetch("http://www.somaku.com/users/", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        let candidate = data.filter(candidate => candidate.id == this.props.id);
        this.setState({
          candidate: candidate[0]
        });
      })
      .catch(error => console.log(error));
  };
  useEffect(() => {
    getCandidateInfo();
  }, []);
  const { name, email } = candidate;
  return (
    <Container>
      <Row style={{ marginTop: "40px" }}>
        <Col sm={4} className="bg-gray">
          <ProfileInfoBox name={name} email={email} />
        </Col>
        <Col sm={8}>
          <Box heading="Skills" text={["HTML", "CSS"]} />
        </Col>
      </Row>
    </Container>
  );
};

export default CandidateDetailsPage;
