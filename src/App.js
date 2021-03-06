import React from "react";
import { Router } from "@reach/router";
import { GlobalStyle } from "./styles";
import LandingPage from "./pages/LandingPage";
import EmployerRegisterPage from "./pages/EmployerRegisterPage";
import ArticleOverViewPage from "./pages/ArticleOverviewPage";
import ArticleDetails from "./pages/ArticleDetailsPage";
import ContactPage from "./pages/ContactPage";
import PostJobPage from "./pages/PostJobPage";
import AboutPage from "./pages/AboutPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ResetSuccessPage from "./pages/ResetSuccessPage";
import PrivacyPage from "./pages/PrivacyPage";
import JobSearchPage from "./pages/JobSearchPage";
import EmployerDashboard from "./pages/EmployerDashboard";
import ReviewPage from "./pages/ReviewPage";
import CompanyReviewPage from "./pages/CompanyReviewPage";
import InterviewReviewPage from "./pages/InterviewReviewPage";
import CandidateDashboardPage from "./pages/CandidateDashboardPage";
import CandidateProfilePage from "./pages/CandidateProfilePage";
import PostArticlePage from "./pages/PostArticlePage";
import FindCandidatePage from "./pages/FindCandidatePage";
import CandidateDetailsPage from "./pages/CandidateDetailsPage";
import AdminJobOverview from "./pages/AdminJobOverview";
import JobDetailsPage from "./pages/JobDetailsPage";
import AdminReviewOverviewPage from "./pages/AdminReviewOverviewPage";
import LookupsPage from "./pages/LookupsPage";
import ViewLookups from "./pages/ViewLookups";
import AdminDashboard from "./pages/AdminDashboard";
import EmployerProfilePage from "./pages/EmployerProfilePage";
import AuthProvider from "./common/context/AuthProvider";
import MyErrorBoundary from "./common/MyErrorBoundary";
// import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";

const App = () => {
  return (
    <div className="App">
      <MyErrorBoundary>
        <AuthProvider>
          <Router>
            <LandingPage path="/" />
            <EmployerRegisterPage path="/employer-register" />
            <ArticleOverViewPage path="/articles" />
            <ArticleDetails path="/articles/:articleId" />
            <ContactPage path="/contact" />
            <PostJobPage path="/post-job" />
            <AboutPage path="/about" />
            <ForgotPasswordPage path="/forgot-password" />
            <ResetPasswordPage path="/reset-password" />
            <ResetSuccessPage path="/reset-success" />
            <PrivacyPage path="/privacy-policy" />
            <ReviewPage path="/review" />
            <JobSearchPage path="/job-search" />
            <EmployerDashboard path="/employer-dashboard/:employerId" />
            <CompanyReviewPage path="/review/company-review" />
            <InterviewReviewPage path="review/interview-review" />
            <CandidateDashboardPage path="/candidate-dashboard/:userId" />
            <CandidateProfilePage path="/candidate-profile/:userId" />
            <EmployerProfilePage path="/employer-profile/:employerId" />
            <PostArticlePage path="/post-article" />
            <FindCandidatePage path="/find-candidate" />
            <CandidateDetailsPage path="/candidate/:id" />
            <AdminJobOverview path="/jobs-overview" />
            <JobDetailsPage path="/jobs-overview/job-details/:type/:id" />
            <AdminReviewOverviewPage path="/approve-review" />
            <LookupsPage path="/lookups" />
            <ViewLookups path="/view-lookups" />
            <AdminDashboard path="/admin-dashboard" />
          </Router>
        </AuthProvider>
      </MyErrorBoundary>
      <GlobalStyle />
    </div>
  );
};

export default App;
