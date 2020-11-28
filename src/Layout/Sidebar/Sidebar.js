import React, { useState, useEffect, useContext } from "react";
import { Link, navigate } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex } from "reflexbox";

import logo from "../../assets/logo.png";

import AuthContext from "../../common/context/AuthContext";
import { LOGOUT } from "../../common/actions/Types";
import * as Styled from "./Sidebar.styles";
import NavLink from "../../common/components/NavLink/NavLink";
import Thumbnail from "../../components/user-thumbnail/user-thumbnail";
import { GET_USER_INFO } from "../../common/helpers/apiUrls";
import SideBarLoader from "./sidebar-loader";

const Sidebar = () => {
  const { AuthState, AuthDispatch } = useContext(AuthContext);
  const [userFullName, setUserFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${GET_USER_INFO}`, {
      method: "POST",
      headers: {
        userId: AuthState.userID
      }
    })
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        if (data[0] && data[0].user_type === "Candidate") {
          let fullName = `${data[0].first_name} ${data[0].last_name}`;
          let jobTitle = data[0].job_title;
          setUserFullName(fullName);
          setJobTitle(jobTitle);
        } else if (data[0] && data[0].user_type === "Employer") {
          let fullName = `${data[0].company_name} `;
          setUserFullName(fullName);
        }
      })
      .catch(error => console.log(error));
  }, []);

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
    AuthDispatch({ type: LOGOUT });
  };

  if (isLoading) return <SideBarLoader />;

  return (
    <Styled.Sidebar
    // sx={{ transform: ["translateX(-400px)", "translateX(0)", null] }}
    >
      <Flex>
        <Link to="/" flex="1">
          <Styled.Logo src={logo} alt="Logo" />
        </Link>
        {/* <button
          flex="1"
          justifyContent="flex-end"
          onClick={() => console.log("ahahah")}
        >
          <FontAwesomeIcon icon="times" size="2x" style={{ color: "#333" }} />
        </button> */}
      </Flex>
      {AuthState.isLoggedIn && AuthState.type === "Employer" && (
        <>
          <Styled.Item>
            <Link to={`/employer-profile/${AuthState.userID}`}>
              <Thumbnail
                imgSrc="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1302&q=80"
                title={userFullName}
              />
            </Link>
          </Styled.Item>
          <Styled.Item className="active">
            <NavLink to={`/employer-dashboard/${AuthState.userID}`}>
              Dashboard
            </NavLink>
          </Styled.Item>
          <Styled.Item>
            <NavLink to="/post-job">Post a Job</NavLink>
          </Styled.Item>
          <Styled.Item>
            <NavLink to="/find-candidate">Find a candidate</NavLink>
          </Styled.Item>
        </>
      )}
      {AuthState.isLoggedIn && AuthState.type === "Candidate" && (
        <>
          {/* <Styled.Item>
            <NavLink to={`/candidate-profile/${AuthState.userID}`}>
              My Profile
            </NavLink>
          </Styled.Item> */}
          <Styled.Item>
            <Link to={`/candidate-profile/${AuthState.userID}`}>
              <Thumbnail
                imgSrc="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1302&q=80"
                title={userFullName}
                body={jobTitle}
              />
            </Link>
          </Styled.Item>
          <Styled.Item>
            <NavLink to={`/candidate-dashboard/${AuthState.userID}`}>
              My Dashboard
            </NavLink>
          </Styled.Item>
          <Styled.Item>
            <NavLink to="/job-search">Find a Job</NavLink>
          </Styled.Item>
          <Styled.Item>
            <NavLink to="/review">Write a Review</NavLink>
          </Styled.Item>
          <Styled.Item>
            <NavLink to="/articles">Blog</NavLink>
          </Styled.Item>
        </>
      )}

      {AuthState.isLoggedIn && AuthState.type === "Admin" && (
        <>
          <Styled.Item>
            <NavLink to="/post-article">Post an article</NavLink>
          </Styled.Item>
          <Styled.Item>
            <NavLink to="/approve-review">Approve-review</NavLink>
          </Styled.Item>
          <Styled.Item>
            <NavLink to="/jobs-overview">Jobs Overview</NavLink>
          </Styled.Item>
          <Styled.Item>
            <NavLink to="/lookups">Lookups</NavLink>
          </Styled.Item>
        </>
      )}
      <Styled.Item onClick={logout} className="logout-button">
        <FontAwesomeIcon icon="power-off" style={{ marginRight: "8px" }} />
        logout
      </Styled.Item>
    </Styled.Sidebar>
  );
};

export default Sidebar;
