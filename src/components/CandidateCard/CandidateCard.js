import React from "react";
import * as Styled from "./CandidateCard.styles";
import { Link } from "@reach/router";

const CandidateCard = ({
  imgSrc,
  firstName,
  lastName,
  email,
  id,
  jobTitle
}) => {
  return (
    <Link to={`/candidate-profile/${id}`} style={{ color: "#333" }}>
      <Styled.Card>
        <Styled.Img src={imgSrc} alt={firstName} />
        <Styled.Title>
          {firstName} {lastName}
        </Styled.Title>
        <Styled.Body>{jobTitle}</Styled.Body>
      </Styled.Card>
    </Link>
  );
};

export default CandidateCard;
