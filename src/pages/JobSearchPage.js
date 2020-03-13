import React, { useState, useContext } from "react";
import { Container, Row, Col } from "react-grid-system";

import SectionHeading from "../components/SectionHeading";
import InputField from "../components/InputField";
import { DefaultButtonOutline } from "../styles/Button";
import JobResults from "../components/JobResults";
import { Form } from "../styles/FormStyles";
import { SEARCH_JOBS } from "../helpers/apiUrls";
import AuthContext from "../context/AuthContext";

const JobSearchPage = () => {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [authenticated] = useContext(AuthContext);

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
      <div className="main-colored">
        <Container>
          <SectionHeading boldText="Job" normalText="Search" />
          <Form onSubmit={searchJob}>
            <Row>
              <Col md={10}>
                <InputField
                  type="text"
                  placeholder="Search Keyword ..."
                  handleInputChange={e => setQuery(e.target.value)}
                />
              </Col>
              {/* <Col md={4}>
                <InputField type="text" placeholder="Newyork, NY" />
              </Col> */}
              <Col md={2}>
                <DefaultButtonOutline type="submit">
                  Search
                </DefaultButtonOutline>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
      <Container>
        <JobResults />
      </Container>
    </>
  );
};
export default JobSearchPage;
