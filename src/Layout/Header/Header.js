import React, { Component } from "react";
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
import { AuthConsumer } from "../../context/AuthContext";
import Thumbnail from "../../components/Thumbnail";

class Header extends Component {
  logout = () => {
    localStorage.setItem("isLoggedIn", false);
    navigate("/");
  };
  render() {
    return (
      <AuthConsumer>
        {Auth => (
          <HeaderStyle>
            <HeaderTop>
              <Container>
                <Row>
                  <Col sm={7}>
                    <Link to="/">
                      <Logo src={logo} alt="Logo" />
                    </Link>
                    <Slogan>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet.
                    </Slogan>
                  </Col>
                  {Auth.state.isLoggedIn && Auth.state.type == "candidate" && (
                    <Thumbnail
                      imgSrc="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1302&q=80"
                      title="Nariman Adam"
                      body="Front End developer"
                    />
                  )}
                  {Auth.state.isLoggedIn && Auth.state.type == "employer" && (
                    <Thumbnail
                      imgSrc="https://media.glassdoor.com/sqll/142089/majid-al-futtaim-group-squarelogo-1531112944476.png"
                      title="Majid Al Futtaim"
                      body=""
                    />
                  )}
                  {!Auth.state.isLoggedIn && (
                    <Col sm={5} align="right">
                      <InlineList>
                        <InlineListItem>
                          <h2>Employers</h2>
                          <Link to="/post-job" className="black-link">
                            Post a job for free
                          </Link>
                        </InlineListItem>
                        <InlineListItem>
                          <MainOutlineButton type="button">
                            Recruit
                          </MainOutlineButton>
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
                    {Auth.state.isLoggedIn && Auth.state.type == "candidate" && (
                      <NavigationList>
                        <NavigationItem>
                          <Link
                            to="/candidate-dashboard"
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

                    {Auth.state.isLoggedIn && Auth.state.type == "employer" && (
                      <NavigationList>
                        <NavigationItem>
                          <Link to="/employer-dashboard" className="white-link">
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
                    {Auth.state.isLoggedIn && Auth.state.type == "admin" && (
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
                          <Link to="/job-overview" className="white-link">
                            Jobs Overview
                          </Link>
                        </NavigationItem>
                      </NavigationList>
                    )}
                  </Col>
                  <Col sm={5} align="right">
                    {!Auth.state.isLoggedIn && (
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
                    {Auth.state.isLoggedIn && (
                      <NavigationList>
                        <Button
                          className="white-link"
                          onClick={this.logout}
                          type="button"
                        >
                          Log out
                        </Button>
                      </NavigationList>
                    )}
                  </Col>
                </Row>
              </Container>
            </Navigation>
          </HeaderStyle>
        )}
      </AuthConsumer>
    );
  }
}

export default Header;
