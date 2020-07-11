import React from "react";
import SecondaryLayout from "./SecondaryLayout";

const withSecondaryLayout = Component => props => {
  return (
    <SecondaryLayout>
      <Component {...props} />
    </SecondaryLayout>
  );
};

export default withSecondaryLayout;
