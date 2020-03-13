import React from "react";
import { Row, Col } from "react-grid-system";
import { JobsStatsStyled } from "../styles/JobStatsStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../styles/Button";
import { InlineList, InlineListItem } from "../styles/ListStyle";
import { Link } from "@reach/router";

const JobStats = ({
  name,
  desc,
  applicants,
  closed,
  rejected,
  pending,
  closeJob
}) => {
  return (
    <JobsStatsStyled>
      <Row>
        <Col md={6}>
          <div className="job-stats__info">
            <h3 className="job-stats__title">{name}</h3>
            <p className="job-stats__company">{desc}</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="job-stats__wrapper">
            {!pending && !rejected && !closed && (
              <InlineList>
                <InlineListItem>
                  {/* <Button sm>
                    <FontAwesomeIcon
                      icon={["far", "edit"]}
                      size="1x"
                      className="tab__icon"
                    />
                    Edit Job
                  </Button> */}
                </InlineListItem>
                <InlineListItem>
                  <Button sm onClick={closeJob}>
                    <FontAwesomeIcon
                      icon={["far", "trash-alt"]}
                      size="1x"
                      className="tab__icon"
                    />
                    Close Job
                  </Button>
                </InlineListItem>
              </InlineList>
            )}
            {!pending && (
              <ul className="job-stats__list">
                <li className="job-stats__item">
                  <p className="job-stats__count">{applicants}</p>
                  <p className="job-stats__name">Candidates Applied</p>
                </li>
              </ul>
            )}
          </div>
        </Col>
      </Row>
    </JobsStatsStyled>
  );
};

export default JobStats;
