import React from "react";
import employerLogo from "../../../assets/employer-logo.jpg";
import * as Styled from "./featured-employers.styles";

const FeaturedEmployersCard = ({ name }) => (
  <Styled.Card>
    <Styled.Logo src={employerLogo} />
    <Styled.Name>{name}</Styled.Name>
  </Styled.Card>
);

export default FeaturedEmployersCard;
