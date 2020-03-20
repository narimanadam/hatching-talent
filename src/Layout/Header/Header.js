import React, { useContext, useEffect, useState } from "react";
import {
  HeaderStyle,
  HeaderTop,
  Logo,
  Slogan,
  Navigation,
  NavigationList,
  NavigationItem
} from "./HeaderStyle";
import { InlineList, InlineListItem } from "../../styles/ListStyle";
import { MainOutlineButton, Button } from "../../styles/Button";
import logo from "../../assets/logo.png";
import { Container, Row, Col } from "react-grid-system";
import { Link, navigate } from "@reach/router";
import AuthContext from "../../context/AuthContext";
import Thumbnail from "../../components/Thumbnail";
import { GET_USER_INFO } from "../../helpers/apiUrls";

const Header = () => {
  const [authenticated, setAuthenticated] = useContext(AuthContext);
  const [userFullName, setUserFullName] = useState("");

  const logout = () => {
    window.localStorage.clear();
    let userData = { id: "", type: "" };
    window.localStorage.setItem("userData", JSON.stringify(userData));
    setAuthenticated(
      Object.assign({}, authenticated, {
        isLoggedIn: false
      })
    );
    navigate("/");
  };

  const getUserData = () => {
    fetch(`${GET_USER_INFO}`, {
      method: "POST",
      headers: {
        userId: authenticated.userID
      }
    })
      .then(res => res.json())
      .then(data => {
        if ((data[0] && data[0].user_type === "Canidate") || "Employer") {
          let fullName = `${data[0].first_name && data[0].first_name} ${data[0]
            .last_name && data[0].last_name}`;
          setUserFullName(fullName);
        }
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getUserData();
  });

  return (
    <HeaderStyle>
      <HeaderTop>
        <Container>
          <Row>
            <Col sm={7}>
              <Link to="/">
                <Logo src={logo} alt="Logo" />
              </Link>
              <Slogan>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet.
              </Slogan>
            </Col>
            {authenticated.isLoggedIn && authenticated.type == "Candidate" && (
              <Link to={`/candidate-profile/${authenticated.userID}`}>
                <Thumbnail
                  imgSrc="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1302&q=80"
                  title={userFullName}
                  body="Front End developer"
                />
              </Link>
            )}
            {authenticated.isLoggedIn && authenticated.type == "Employer" && (
              <Link to={`/employer-profile/${authenticated.userID}`}>
                <Thumbnail
                  imgSrc="https://media.glassdoor.com/sqll/142089/majid-al-futtaim-group-squarelogo-1531112944476.png"
                  title={userFullName}
                  body=""
                />
              </Link>
            )}
            {!authenticated.isLoggedIn && (
              <Col sm={5} align="right">
                <InlineList>
                  <InlineListItem>
                    <h2>Employers</h2>
                    <Link to="/post-job" className="black-link">
                      Post a job for free
                    </Link>
                  </InlineListItem>
                  <InlineListItem>
                    <MainOutlineButton type="button">Recruit</MainOutlineButton>
                  </InlineListItem>
                </InlineList>
              </Col>
            )}
          </Row>
        </Container>
      </HeaderTop>
      <Navigation>
        <Container>
          <Row>
            <Col sm={7} align="left">
              {authenticated.isLoggedIn && authenticated.type == "Candidate" && (
                <NavigationList>
                  <NavigationItem>
                    <Link
                      to={`/candidate-dashboard/${authenticated.userID}`}
                      className="white-link"
                    >
                      Dashboard
                    </Link>
                  </NavigationItem>
                  <NavigationItem>
                    <Link to="/job-search" className="white-link">
                      Find a Job
                    </Link>
                  </NavigationItem>
                  <NavigationItem>
                    <Link to="/review" className="white-link">
                      Write a Review
                    </Link>
                  </NavigationItem>
                  <NavigationItem>
                    <Link to="/articles" className="white-link">
                      Blog
                    </Link>
                  </NavigationItem>
                </NavigationList>
              )}

              {authenticated.isLoggedIn && authenticated.type == "Employer" && (
                <NavigationList>
                  <NavigationItem>
                    <Link
                      to={`/employer-dashboard/${authenticated.userID}`}
                      className="white-link"
                    >
                      Dashboard
                    </Link>
                  </NavigationItem>
                  <NavigationItem>
                    <Link to="/post-job" className="white-link">
                      Post a Job
                    </Link>
                  </NavigationItem>
                  <NavigationItem>
                    <Link to="/find-candidate" className="white-link">
                      Find a candidate
                    </Link>
                  </NavigationItem>
                </NavigationList>
              )}
              {authenticated.isLoggedIn && authenticated.type == "Admin" && (
                <NavigationList>
                  <NavigationItem>
                    <Link to="/post-article" className="white-link">
                      Post an article
                    </Link>
                  </NavigationItem>
                  <NavigationItem>
                    <Link to="/approve-review" className="white-link">
                      Approve-review
                    </Link>
                  </NavigationItem>
                  <NavigationItem>
                    <Link to="/jobs-overview" className="white-link">
                      Jobs Overview
                    </Link>
                  </NavigationItem>
                  <NavigationItem>
                    <Link to="/lookups" className="white-link">
                      Lookups
                    </Link>
                  </NavigationItem>
                </NavigationList>
              )}
            </Col>
            <Col sm={5} align="right">
              {authenticated.isLoggedIn ? (
                <NavigationList>
                  <Button className="white-link" onClick={logout} type="button">
                    Log out
                  </Button>
                </NavigationList>
              ) : (
                <NavigationList>
                  <NavigationItem>
                    <Link to="/login" className="white-link">
                      Login
                    </Link>
                  </NavigationItem>
                  <NavigationItem>
                    <Link to="/register" className="white-link">
                      Sign Up
                    </Link>
                  </NavigationItem>
                  <NavigationItem>
                    <Link to="/employer-register" className="white-link">
                      Employer? Register Here
                    </Link>
                  </NavigationItem>
                </NavigationList>
              )}
            </Col>
          </Row>
        </Container>
      </Navigation>
    </HeaderStyle>
  );
};

export default Header;
