import React from "react";
import {
  CandidateBoxStyles,
  Img,
  Title,
  Body
} from "../styles/CandidateBoxStyles";
import { Link } from "@reach/router";

const CandidateBox = ({ imgSrc, name, email, id }) => {
  return (
    <Link to={`/candidate/${id}`} style={{ color: "#333" }}>
      <CandidateBoxStyles>
        <Img src={imgSrc} alt={name} />
        <Title>{name}</Title>
        <Body>{email}</Body>
      </CandidateBoxStyles>
    </Link>
  );
};

export default CandidateBox;
