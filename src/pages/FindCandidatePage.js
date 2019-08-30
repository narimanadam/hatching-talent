import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import SectionHeading from "../components/SectionHeading";
import InputField from "../components/InputField";
import { DefaultButtonOutline } from "../styles/Button";
import CandidateBox from "../components/CandidateBox";

class FindCandidatePage extends Component {
  state = {
    candidates: []
  };
  componentDidMount() {
    fetch("http://www.somaku.com/users", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          candidates: data
        });
        console.log(data);
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
        <div className="main-colored">
          <Container>
            <SectionHeading boldText="Find" normalText="Candidate" />
            <form action="">
              <Row>
                <Col md={5}>
                  <InputField type="text" placeholder="Search Keyword ..." />
                </Col>
                <Col md={4}>
                  <InputField type="text" placeholder="Newyork, NY" />
                </Col>
                <Col md={2}>
                  <DefaultButtonOutline>Search</DefaultButtonOutline>
                </Col>
              </Row>
            </form>
          </Container>
        </div>
        <Container style={{ marginTop: "20px" }}>
          <Row>
            {this.state.candidates.map(candidate => (
              <Col md={3}>
                <CandidateBox
                  imgSrc="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                  id={candidate.id}
                  name={candidate.name}
                  email={candidate.username}
                  key={candidate.id}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default FindCandidatePage;
