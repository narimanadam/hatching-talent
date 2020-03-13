import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import SectionHeading from "../components/SectionHeading";
import InputField from "../components/InputField";
import { DefaultButtonOutline } from "../styles/Button";
import CandidateCard from "../components/CandidateCard";
import { FIND_CANDIDATE } from "../helpers/apiUrls";
import { Form } from "../styles/FormStyles";

const FindCandidatePage = () => {
  const [keyword, setKeyword] = useState("");
  const [candidates, setCandidates] = useState([]);
  const findCandidate = e => {
    e.preventDefault();
    fetch(`${FIND_CANDIDATE}`, {
      method: "POST",
      headers: {
        keyword: keyword
      }
    })
      .then(res => res.json())
      .then(data => setCandidates(data))
      .catch(error => console.log(error));
  };
  return (
    <>
      <div className="main-colored">
        <Container>
          <SectionHeading boldText="Find" normalText="Candidate" />
          <Form onSubmit={findCandidate}>
            <Row>
              <Col md={5}>
                <InputField
                  type="text"
                  placeholder="Search Keyword ..."
                  handleInputChange={e => setKeyword(e.target.value)}
                />
              </Col>
              <Col md={4}>
                <InputField type="text" placeholder="Newyork, NY" />
              </Col>
              <Col md={2}>
                <DefaultButtonOutline type="submit">
                  Search
                </DefaultButtonOutline>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          {candidates.map(candidate => (
            <Col md={3}>
              <CandidateCard
                imgSrc="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                id={candidate.user_id}
                firstName={candidate.first_name}
                lastName={candidate.last_name}
                email={candidate.username}
                key={candidate.user_id}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default FindCandidatePage;
