import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";

import SectionHeading from "../components/SectionHeading";
import InputField from "../components/InputField";
import { DefaultButtonOutline } from "../styles/Button";
import JobResults from "../components/JobResults";
import JobResultsProvider from "../context/JobResultsContext";
import { SelectStyles } from "../styles/SelectStyles";

class JobSearchPage extends Component {
  render() {
    const jobLocationsOptions = [
      { value: "morocco", label: "Morocco" },
      { value: "vanilla", label: "Vanilla" },
      { value: "egypt", label: "Egypt" }
    ];

    return (
      <div>
        <div className="main-colored">
          <Container>
            <SectionHeading boldText="Job" normalText="Search" />
            <form action="">
              <Row>
                <Col md={5}>
                  <InputField type="text" placeholder="Search Keyword ..." />
                </Col>
                <Col md={4}>
                  <InputField type="text" placeholder="Newyork, NY" />
                </Col>
                {/* <Col md={3}>
                                    <Select options={jobLocationsOptions} placeholder="Jobs" styles={SelectStyles} />
                                </Col> */}
                <Col md={2}>
                  <DefaultButtonOutline>Search</DefaultButtonOutline>
                </Col>
              </Row>
            </form>
          </Container>
        </div>
        <Container>
          <JobResultsProvider>
            <JobResults />
          </JobResultsProvider>
        </Container>
      </div>
    );
  }
}
export default JobSearchPage;
