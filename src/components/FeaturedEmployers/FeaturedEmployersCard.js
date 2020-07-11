import React from "react";
import employerLogo from "../../assets/employer-logo.jpg";
import * as Styled from "./FeaturedEmployers.styles";

const FeaturedEmployersCard = ({ name }) => {
  return (
    <Styled.Card>
      <Styled.Logo src={employerLogo} />
      <Styled.Name>{name}</Styled.Name>
    </Styled.Card>
  );
};

export default FeaturedEmployersCard;
