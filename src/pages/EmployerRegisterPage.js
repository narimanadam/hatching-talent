import React from "react";
import SectionHeading from "../components/SectionHeading";
import { Container } from "react-grid-system";
import styled from "styled-components";
import EmployerRegisterationForm from "../components/EmployerRegisterationForm";

const SectionDesc = styled.p`
  margin-bottom: 20px;
  text-align: left;
  line-height: 22px;
  color: ${props => props.theme.white};
`;

function EmployerRegisterPage() {
  return (
    <div className="main-colored">
      <Container>
        <SectionHeading boldText="Register" normalText="as New Employer" />
        <SectionDesc>
          After Sign up you can start the process of posting a job by providing
          the company name with the <br />
          possibility of hiding the name, the job title and the description of
          the job.
        </SectionDesc>
        <EmployerRegisterationForm />
      </Container>
    </div>
  );
}

export default EmployerRegisterPage;
