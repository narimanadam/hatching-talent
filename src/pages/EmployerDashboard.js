import React from "react";
import { Container } from "react-grid-system";
import SectionHeading from "../components/SectionHeading";
import EmployerDashboardTabs from "../components/Tabs/EmployerDashboardTabs";

const EmployerDashboard = () => {
  return (
    <div>
      <div className="main-colored">
        <Container>
          <SectionHeading boldText="Employer" normalText="Dashboard" />
        </Container>
      </div>
      <EmployerDashboardTabs />
    </div>
  );
};

export default EmployerDashboard;
