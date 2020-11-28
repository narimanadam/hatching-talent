import React from "react";
import AboutTabs from "../components/Tabs/AboutTabs";
import { Container } from "react-grid-system";
import PageHeader from "../common/components/PageHeader";
import useDocumentTitle from "../common/hooks/useDocumentTitle";
import withMainLayout from "../Layout/MainLayout/WithMainLayout";

const AboutPage = () => {
  useDocumentTitle("About | Hatching Talent");
  return (
    <Container>
      <PageHeader boldText="About" normalText="Hatching Talent"></PageHeader>
      <AboutTabs />
    </Container>
  );
};

export default withMainLayout(AboutPage);
