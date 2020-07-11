import React from "react";
import RecentArticles from "../components/RecentArticles/RecentArticles";
import useDocumentTitle from "../common/hooks/useDocumentTitle";
import HeroBanner from "../components/HeroBanner";
import FeaturedEmployers from "../components/FeaturedEmployers";
import HelpSection from "../components/HelpSection/HelpSection";
import withMainLayout from "../Layout/MainLayout/WithMainLayout";

const LandingPage = () => {
  useDocumentTitle("Hatching Talent");
  return (
    <>
      <HeroBanner />
      <FeaturedEmployers />
      <HelpSection />
      <RecentArticles />
    </>
  );
};

export default withMainLayout(LandingPage);
