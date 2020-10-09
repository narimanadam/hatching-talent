import React, { useContext } from "react";
import { Link, navigate } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex } from "reflexbox";

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
            <NavLink to={`/candidate-dashboard/${AuthState.userID}`}>
              Dashboard
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

      {AuthState.isLoggedIn && AuthState.type == "Admin" && (
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
