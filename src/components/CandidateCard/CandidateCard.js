import React from "react";
import { Link } from "@reach/router";

import Button from "../../common/components/Button";
import * as Styled from "./CandidateCard.styles";

const CandidateCard = ({
  imgSrc,
  firstName,
  lastName,
  email,
  id,
  jobTitle
}) => {
  return (
    <Styled.Card>
      <Styled.Img src={imgSrc} alt={firstName} />
      <Styled.Title>
        {firstName} {lastName}
      </Styled.Title>
      <Styled.Body>{jobTitle}</Styled.Body>
      <Link to={`/candidate-profile/${id}`}>
        <Button text="View Candidate" variant="primaryButton" />
      </Link>
    </Styled.Card>
  );
};

export default CandidateCard;
