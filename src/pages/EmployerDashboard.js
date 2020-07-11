import React from "react";
import EmployerDashboardTabs from "../components/Tabs/EmployerDashboardTabs";
import withSecondaryLayout from "../Layout/SecondaryLayout/WithSecondaryLayout";

const EmployerDashboard = () => {
  return (
    <>
      <EmployerDashboardTabs />
    </>
  );
};

export default withSecondaryLayout(EmployerDashboard);
