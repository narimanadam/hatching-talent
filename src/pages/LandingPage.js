import React from "react";
import RecentArticles from "../components/LandingPage/RecentArticles/RecentArticles";
import useDocumentTitle from "../common/hooks/useDocumentTitle";
import HeroBanner from "../components/LandingPage/HeroBanner/HeroBanner";
import FeaturedEmployers from "../components/LandingPage/featured-employers";
import HelpSection from "../components/LandingPage/HelpSection/HelpSection";
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
