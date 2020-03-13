import React from "react";
import {
  CandidateBoxStyles,
  Img,
  Title,
  Body
} from "../styles/CandidateBoxStyles";
import { Link } from "@reach/router";

const CandidateCard = ({ imgSrc, firstName, lastName, email, id }) => {
  return (
    <Link to={`/candidate-profile/${id}`} style={{ color: "#333" }}>
      <CandidateBoxStyles>
        <Img src={imgSrc} alt={firstName} />
        <Title>
          {firstName} {lastName}
        </Title>
        <Body>{email}</Body>
      </CandidateBoxStyles>
    </Link>
  );
};

export default CandidateCard;
