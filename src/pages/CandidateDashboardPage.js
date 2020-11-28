import React, { useState, useEffect, useContext } from "react";
import { Row } from "react-grid-system";
import ProfileInfoBox from "../components/ProfileInfoBox";
import CandidateStats from "../components/CandidateStats";
import ViewedProfile from "../assets/view-profile.png";
import ContactedYou from "../assets/contacted-you.png";
import CompaniesFollowed from "../assets/companies-followed.png";
import { GET_USER_INFO, SEARCH_JOBS } from "../common/helpers/apiUrls";
import AuthContext from "../common/context/AuthContext";
import useDocumentTitle from "../common/hooks/useDocumentTitle";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";
import { SidebarLayoutContainer } from "../Layout/SidebarLayout/SidebarLayout";
import JobResults from "../components/JobResults";
import Input from "../common/components/Input";
import { Form } from "../styles/FormStyles";

const CandidateDashboardPage = props => {
  const [jobs, setJobs] = useState([]);
  const { AuthState } = useContext(AuthContext);
  const [authUser, setAuthUser] = useState({});
  const [query, setQuery] = useState("");

  useDocumentTitle(
    `${authUser && authUser.first_name} ${authUser &&
      authUser.last_name} | Dashboard`
  );

  useEffect(() => {
    console.log("queryy", query);
    fetch(`${SEARCH_JOBS}`, {
      method: "POST",
      headers: {
        keyWord: query,
        jobLocation: "",
        jobIndustry: ""
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setJobs(data);
        }
      })
      .catch(error => console.log(error));
  }, [query]);

  useEffect(() => {
    fetch(`${GET_USER_INFO}`, {
      method: "POST",
      headers: {
        userId: AuthState.userID
      }
    })
      .then(res => res.json())
      .then(data => setAuthUser(data[0]))
      .catch(error => console.log(error));
  }, []);

  return (
    <SidebarLayoutContainer>
      <Row>
        {/* <Col sm={3}>
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
        </Col> */}
        {/* <Col sm={3}>
            <CandidateStats
              icon={RecruitersFollowed}
              number="08"
              text="Recruiters Followed"
            />
          </Col> */}
      </Row>

      <Form>
        <Input
          type="text"
          placeholder="Search Keyword ..."
          handleInputChange={e => setQuery(e.target.value)}
        />
      </Form>
      <h3 className="page__subtitle">Recommended Jobs for You</h3>
      <JobResults query={AuthState.jobTitle} />
    </SidebarLayoutContainer>
  );
};

export default WithSidebarLayout(CandidateDashboardPage);
