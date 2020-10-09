import React from "react";
import SidebarLayout from "./SidebarLayout";

const WithSidebarLayout = Component => props => {
  return (
    <SidebarLayout>
      <Component {...props} />
    </SidebarLayout>
  );
};

export default WithSidebarLayout;
