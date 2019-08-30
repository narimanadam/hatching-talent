import React from "react";
import styled from "styled-components";

export const SectionHeadingStyle = styled.h1`
  font-size: 40px;
  color: ${props => (props.dark ? props.theme.black : props.theme.white)};
  font-weight: normal;
  text-align: left;
  margin-top: ${props => (props.dark ? "30px" : "")};
  margin-bottom: ${props => (props.dark ? "30px" : "20px")};
`;

function SectionHeading(props) {
  return (
    <div>
      <SectionHeadingStyle>
        <strong>{props.boldText}</strong> {props.normalText}
      </SectionHeadingStyle>
    </div>
  );
}

export default SectionHeading;
