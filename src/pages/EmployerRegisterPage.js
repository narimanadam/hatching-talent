import React from "react";
import EmployerRegisterationForm from "../components/EmployerRegisterationForm";
import PageHeader from "../common/components/PageHeader";
import withMainLayout from "../Layout/MainLayout/WithMainLayout";
import { Container } from "react-grid-system";

const EmployerRegisterPage = () => {
  return (
    <Container>
      <PageHeader boldText="Register" normalText="as New Employer">
        <EmployerRegisterationForm />
      </PageHeader>
    </Container>
  );
};

export default withMainLayout(EmployerRegisterPage);
