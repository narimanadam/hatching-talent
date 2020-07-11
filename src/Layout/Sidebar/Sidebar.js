import React, { useContext } from "react";
import { Link, navigate } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../assets/logo.png";

import AuthContext from "../../common/context/AuthContext";
import { LOGOUT } from "../../common/actions/Types";
import * as Styled from "./Sidebar.styles";
import NavLink from "../../common/components/NavLink/NavLink";

const Sidebar = () => {
  const { AuthState, AuthDispatch } = useContext(AuthContext);

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
    AuthDispatch({ type: LOGOUT });
  };
  return (
    <Styled.Sidebar>
      <Link to="/">
        <Styled.Logo src={logo} alt="Logo" />
      </Link>
      {AuthState.isLoggedIn && AuthState.type == "Employer" && (
        <>
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
      {AuthState.isLoggedIn && AuthState.type == "Candidate" && (
        <>
          <Styled.Item>
            <Link to={`/candidate-dashboard/${AuthState.userID}`}>
              Dashboard
            </Link>
          </Styled.Item>
          <Styled.Item>
            <Link to="/job-search">Find a Job</Link>
          </Styled.Item>
          <Styled.Item>
            <Link to="/review">Write a Review</Link>
          </Styled.Item>
          <Styled.Item>
            <Link to="/articles">Blog</Link>
          </Styled.Item>
        </>
      )}

      {AuthState.isLoggedIn && AuthState.type == "Admin" && (
        <>
          <Styled.Item>
            <Link to="/post-article">Post an article</Link>
          </Styled.Item>
          <Styled.Item>
            <Link to="/approve-review">Approve-review</Link>
          </Styled.Item>
          <Styled.Item>
            <Link to="/jobs-overview">Jobs Overview</Link>
          </Styled.Item>
          <Styled.Item>
            <Link to="/lookups">Lookups</Link>
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
