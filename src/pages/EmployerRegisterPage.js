import React from "react";
import EmployerRegisterationForm from "../components/EmployerRegisterationForm";
import PageHeader from "../common/components/PageHeader";
import withMainLayout from "../Layout/MainLayout/WithMainLayout";
import { Container } from "react-grid-system";

const EmployerRegisterPage = () => {
  return (
    <Container>
      <PageHeader
        boldText="Register"
        normalText="as New Employer"
        desc={`After Sign up you can start the process of posting a job by providing
    the company name with the <br />
    possibility of hiding the name, the job title and the description of
    the job.`}
      >
        <EmployerRegisterationForm />
      </PageHeader>
    </Container>
  );
};

export default withMainLayout(EmployerRegisterPage);
