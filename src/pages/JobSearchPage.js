import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";

import Input from "../common/components/Input";
import { DefaultButtonOutline } from "../styles/Button";
import JobResults from "../components/JobResults";
import { Form } from "../styles/FormStyles";
import { SEARCH_JOBS } from "../common/helpers/apiUrls";
import PageHeader from "../common/components/PageHeader";

const JobSearchPage = () => {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");

  const searchJob = () => {
    fetch(`${SEARCH_JOBS}`, {
      method: "POST",
      headers: {
        keyWord: query,
        jobLocation: null,
        jobIndustry: null
      }
    })
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(error => console.log(error));
  };

  return (
    <>
      <PageHeader boldText="Job" normalText="Search">
        <Form onSubmit={searchJob}>
          <Row>
            <Col md={10}>
              <Input
                type="text"
                placeholder="Search Keyword ..."
                handleInputChange={e => setQuery(e.target.value)}
              />
            </Col>
            {/* <Col md={4}>
                <Input type="text" placeholder="Newyork, NY" />
              </Col> */}
            <Col md={2}>
              <DefaultButtonOutline type="submit">Search</DefaultButtonOutline>
            </Col>
          </Row>
        </Form>
      </PageHeader>
      <Container>
        <JobResults />
      </Container>
    </>
  );
};
export default JobSearchPage;
