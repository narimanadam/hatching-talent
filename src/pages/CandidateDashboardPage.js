import React, { useState, useEffect, useContext } from "react";
import { Row, Col } from "react-grid-system";
import ProfileInfoBox from "../components/ProfileInfoBox";
import CandidateStats from "../components/CandidateStats";
import ViewedProfile from "../assets/view-profile.png";
import ContactedYou from "../assets/contacted-you.png";
import CompaniesFollowed from "../assets/companies-followed.png";
import { GET_USER_INFO } from "../common/helpers/apiUrls";
import AuthContext from "../common/context/AuthContext";
import RecommendedJobBox from "../components/RecommendedJobBox";
import useDocumentTitle from "../common/hooks/useDocumentTitle";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";

const CandidateDashboardPage = props => {
  const [jobs] = useState([]);
  const { AuthState } = useContext(AuthContext);
  const [authUser, setAuthUser] = useState({});
  useDocumentTitle(
    `${authUser && authUser.first_name} ${authUser &&
      authUser.last_name} | Dashboard`
  );

  const getEmployerInfo = () => {
    fetch(`${GET_USER_INFO}`, {
      method: "POST",
      headers: {
        userId: AuthState.userID
      }
    })
      .then(res => res.json())
      .then(data => setAuthUser(data[0]))
      .catch(error => console.log(error));
  };

  const getRecommendedJobs = () => {
    // fetch(`${SEARCH_JOBS}`, {
    //   method: "POST",
    //   headers: {
    //     keyWord: AuthState.jobTitle,
    //     jobLocation: "",
    //     jobIndustry: ""
    //   }
    // })
    //   .then(res => res.json())
    //   .then(data => setJobs(data))
    //   .catch(error => console.log(error));
  };

  useEffect(() => {
    getRecommendedJobs();
    getEmployerInfo();
  }, []);

  return (
    <>
      <Row>
        <Col sm={3}>
          <CandidateStats
            icon={ViewedProfile}
            number="28"
            text="Viewed your profile"
          />
        </Col>
        <Col sm={3}>
          <CandidateStats icon={ContactedYou} number="12" text="Applied Jobs" />
        </Col>
        <Col sm={3}>
          <CandidateStats
            icon={CompaniesFollowed}
            number="22"
            text="Saved Jobs"
          />
        </Col>
        {/* <Col sm={3}>
            <CandidateStats
              icon={RecruitersFollowed}
              number="08"
              text="Recruiters Followed"
            />
          </Col> */}
      </Row>
      <h2 className="page__title">Dashboard</h2>
      <Row>
        <Col sm={4} className="bg-gray">
          <ProfileInfoBox userId={props.userId} />
        </Col>
        <Col sm={8}>
          <h3 className="page__subtitle">Recommended Jobs for You</h3>
          {jobs.map((job, i) => (
            <RecommendedJobBox
              jobName={job.job_name}
              jobLocation={job.location}
              jobDesc={job.job_description}
              jobRole={job.role}
              employerId={job.employer_id}
              id={job.job_id}
              key={i}
            />
          ))}
        </Col>
      </Row>
    </>
  );
};

export default WithSidebarLayout(CandidateDashboardPage);
