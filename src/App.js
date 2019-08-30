import React, { Component } from "react";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import { Router } from "@reach/router";
import { GlobalStyle } from "./styles";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import CandidateRegisterationPage from "./pages/CadidateRegisterPage";
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
import AuthProvider from "./context/AuthContext";
import PostArticlePage from "./pages/PostArticlePage";
import FindCandidatePage from "./pages/FindCandidatePage";
import CandidateDetailsPage from "./pages/CandidateDetailsPage";
import AdminJobOverview from "./pages/AdminJobOverview";
import JobDetailsPage from "./pages/JobDetailsPage";
import AdminReviewOverviewPage from "./pages/AdminReviewOverviewPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthProvider>
          <Header />
          <Router>
            <LandingPage path="/" />
            <LoginPage path="/login" />
            <CandidateRegisterationPage path="/register" />
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
            <EmployerDashboard path="/employer-dashboard" />
            <CompanyReviewPage path="/company-review" />
            <InterviewReviewPage path="/interview-review" />
            <CandidateDashboardPage path="/candidate-dashboard" />
            <CandidateProfilePage path="/candidate-profile" />
            <PostArticlePage path="/post-article" />
            <FindCandidatePage path="/find-candidate" />
            <CandidateDetailsPage path="/candidate/:id" />
            <AdminJobOverview path="/job-overview" />
            <JobDetailsPage path="/job-details/:id" />
            <AdminReviewOverviewPage path="/approve-review" />
          </Router>
          <Footer />
        </AuthProvider>
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
