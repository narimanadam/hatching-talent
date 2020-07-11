import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback
} from "react";
import * as Styled from "./Header.styles";
import { MainOutlineButton, Button } from "../../styles/Button";
import logo from "../../assets/logo.png";
import { Link, navigate } from "@reach/router";
import AuthContext from "../../common/context/AuthContext";
import Thumbnail from "../../components/Thumbnail";
import { GET_USER_INFO } from "../../common/helpers/apiUrls";
import { LOGOUT } from "../../common/actions/Types";
import Logo from "../../assets/logo.png";
import Modal from "../../common/components/Modal/";
import LoginRegisterModal from "../../pages/LoginRegisterModal";

const Header = () => {
  const { AuthState, AuthDispatch } = useContext(AuthContext);
  const [userFullName, setUserFullName] = useState("");
  const modalRef = useRef();

  const toggleModal = useCallback(() => modalRef.current.toggleModal(), [
    AuthState
  ]);

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
    AuthDispatch({ type: LOGOUT });
  };

  const getUserData = () => {
    fetch(`${GET_USER_INFO}`, {
      method: "POST",
      headers: {
        userId: AuthState.userID
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data[0] && data[0].user_type === "Canidate") {
          let fullName = `${data[0].first_name && data[0].first_name} ${data[0]
            .last_name && data[0].last_name}`;
          setUserFullName(fullName);
        } else if (data[0] && data[0].user_type === "Employer") {
          let fullName = `${data[0].first_name && data[0].first_name} `;
          setUserFullName(fullName);
        }
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getUserData();
  });

  return (
    <>
      {/* <HeaderTop>
        <Container>
          <Row>
            <Col sm={7}>
              <Slogan>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet.
              </Slogan>
            </Col>
            {AuthState.isLoggedIn && AuthState.type == "Candidate" && (
              <Link to={`/candidate-profile/${AuthState.userID}`}>
                <Thumbnail
                  imgSrc="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1302&q=80"
                  title={userFullName}
                  body="Front End developer"
                />
              </Link>
            )}
            {AuthState.isLoggedIn && AuthState.type == "Employer" && (
              <Link to={`/employer-profile/${AuthState.userID}`}>
                <Thumbnail
                  imgSrc="https://media.glassdoor.com/sqll/142089/majid-al-futtaim-group-squarelogo-1531112944476.png"
                  title={userFullName}
                  body=""
                />
              </Link>
            )}
            {!AuthState.isLoggedIn && (
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
      </HeaderTop> */}
      <Styled.Header>
        {AuthState.isLoggedIn && AuthState.type == "Candidate" && (
          <Styled.List>
            <Styled.Link>
              <Link
                to={`/candidate-dashboard/${AuthState.userID}`}
                className="white-link"
              >
                Dashboard
              </Link>
            </Styled.Link>
            <Styled.Link>
              <Link to="/job-search" className="white-link">
                Find a Job
              </Link>
            </Styled.Link>
            <Styled.Link>
              <Link to="/review" className="white-link">
                Write a Review
              </Link>
            </Styled.Link>
            <Styled.Link>
              <Link to="/articles" className="white-link">
                Blog
              </Link>
            </Styled.Link>
          </Styled.List>
        )}

        {AuthState.isLoggedIn && AuthState.type == "Admin" && (
          <Styled.List>
            <Styled.Link>
              <Link to="/post-article" className="white-link">
                Post an article
              </Link>
            </Styled.Link>
            <Styled.Link>
              <Link to="/approve-review" className="white-link">
                Approve-review
              </Link>
            </Styled.Link>
            <Styled.Link>
              <Link to="/jobs-overview" className="white-link">
                Jobs Overview
              </Link>
            </Styled.Link>
            <Styled.Link>
              <Link to="/lookups" className="white-link">
                Lookups
              </Link>
            </Styled.Link>
          </Styled.List>
        )}

        {AuthState.isLoggedIn && AuthState.type == "Employer" && (
          <Styled.List>
            <Styled.Link className="active">
              <Link
                to={`/employer-dashboard/${AuthState.userID}`}
                className="white-link"
              >
                Dashboard
              </Link>
            </Styled.Link>
            <Styled.Link>
              <Link to="/post-job" className="white-link">
                Post a Job
              </Link>
            </Styled.Link>
            <Styled.Link>
              <Link to="/find-candidate" className="white-link">
                Find a candidate
              </Link>
            </Styled.Link>
          </Styled.List>
        )}
        {AuthState.isLoggedIn ? (
          <Styled.List>
            <Button className="white-link" onClick={logout} type="button">
              Log out
            </Button>
          </Styled.List>
        ) : (
          <>
            {/* <Link to="/">
              <Styled.Logo src={logo} alt="Logo" />
            </Link> */}
            <Styled.List>
              <Styled.Link onClick={toggleModal}>Log in / Register</Styled.Link>
              <Styled.Link>
                <Link to="/job-search" className="white-link">
                  Search jobs
                </Link>
              </Styled.Link>
              <Styled.Link>
                <Link to="/employer-register" className="white-link">
                  Employer? Register Here
                </Link>
              </Styled.Link>
            </Styled.List>
          </>
        )}
      </Styled.Header>

      <Modal boldText="Login" variant="light" img={Logo} ref={modalRef}>
        <LoginRegisterModal />
      </Modal>
    </>
  );
};

export default Header;
