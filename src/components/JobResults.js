import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-grid-system";
// import axios from 'axios';
import JobThumbnail from "./JobThumbnail";
import JobResultsProvider, {
  Provider,
  Consumer
} from "../context/JobResultsContext";
import JobResultsTab from "./Tabs/JobResultsTab";
import {
  InlineList,
  InlineListItem,
  InlineListIcon
} from "../styles/ListStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../styles/Button";

class JobResults extends Component {
  applyJob = () => {
    fetch("http://127.0.0.1:8080/app/resources/jobs/applySaveJob", {
      method: "POST",
      headers: {
        jobId: 1,
        userId: 1,
        action: "Apply"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <Container>
          <Row style={{ marginTop: "50px", marginBottom: "50px" }}>
            <Consumer>
              {context => (
                <Fragment>
                  <Col md={4}>
                    <h3>Jobs</h3>
                    {context.state.jobs.map((job, index) => (
                      <JobThumbnail
                        key={job.id}
                        job={job}
                        handleJobThumbnailClick={context.handleJobThumbnailClick.bind(
                          this,
                          index
                        )}
                      >
                        {" "}
                        {job.job_name}
                      </JobThumbnail>
                    ))}
                  </Col>
                  <Col md={8} align="left">
                    <Row>
                      <Col md={6}>
                        <h3>{context.state.currentJob.job_name}</h3>
                      </Col>
                      <Col md={6} align="right">
                        <InlineList>
                          <InlineListItem center>
                            <InlineListIcon>
                              <FontAwesomeIcon
                                className=""
                                icon={["far", "heart"]}
                              />
                            </InlineListIcon>
                            <p>Favourite</p>
                          </InlineListItem>
                          <InlineListItem center>
                            <Button onClick={this.applyJob}>
                              <InlineListIcon>
                                <FontAwesomeIcon icon={["far", "edit"]} />
                              </InlineListIcon>
                              <span>Apply</span>
                            </Button>
                          </InlineListItem>
                        </InlineList>
                      </Col>
                    </Row>
                    <JobResultsTab currentJob={context.state.currentJob} />
                  </Col>
                </Fragment>
              )}
            </Consumer>
          </Row>
        </Container>
      </div>
    );
  }
}

export default JobResults;
