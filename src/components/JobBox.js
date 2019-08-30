import React from "react";
import {
  JobBoxStyles,
  Title,
  CompanyInfo,
  Description,
  ActionsList,
  ActionsListItem,
  Share,
  Favorite
} from "../styles/JobBoxStyles";
import { MainOutlineButton } from "../styles/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DefinitionList from "../components/DefinitionList";
import { AuthConsumer } from "../context/AuthContext";
import { Link } from "@reach/router";

function JobBox({ id, name }) {
  return (
    <AuthConsumer>
      {Auth => (
        <JobBoxStyles>
          <Link
            to={`/job-details/${id}`}
            style={{ textDecoration: "none", color: "#333" }}
          >
            <Title>{name}</Title>
            <CompanyInfo>TCS Software - USA - May 10</CompanyInfo>
            <DefinitionList term="career level" desc="Mid Level" />
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
              laboriosam unde et id blanditiis veniam eaque rem dignissimos eius
              animi!
            </Description>
            {Auth.state.isLoggedIn && Auth.state.type === "candidate" && (
              <ActionsList>
                <ActionsListItem>
                  <Favorite>
                    <FontAwesomeIcon icon={["far", "star"]} />
                  </Favorite>
                </ActionsListItem>
                <ActionsListItem>
                  <MainOutlineButton>Apply to this Job</MainOutlineButton>
                </ActionsListItem>
              </ActionsList>
            )}
          </Link>
        </JobBoxStyles>
      )}
    </AuthConsumer>
  );
}

export default JobBox;
