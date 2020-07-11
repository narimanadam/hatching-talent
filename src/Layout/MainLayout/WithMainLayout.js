import React from "react";
import MainLayout from "./MainLayout";

const withMainLayout = Component => props => {
  return (
    <MainLayout>
      <Component {...props} />
    </MainLayout>
  );
};

export default withMainLayout;
