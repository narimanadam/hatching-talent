import React from "react";
import { Container } from "react-grid-system";
import SectionHeading from "../components/SectionHeading";
import CandidateRegistertaionForm from "../components/CandidateRegisterationForm";

const CandidateRegisterationPage = () => {
  return (
    <div className="main-colored">
      <Container>
        <SectionHeading boldText="Candidate" normalText="Registeration" />
        <CandidateRegistertaionForm />
      </Container>
    </div>
  );
};

export default CandidateRegisterationPage;
