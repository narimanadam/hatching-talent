import React from "react";
import EmployerDashboardTabs from "../components/Tabs/EmployerDashboardTabs";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";

const EmployerDashboard = () => {
  return (
    <>
      <EmployerDashboardTabs />
    </>
  );
};

export default WithSidebarLayout(EmployerDashboard);
