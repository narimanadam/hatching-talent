import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import {
  EmployerLogo,
  EmployerName,
  Jobtitle,
  JobLevel,
  JobDesc
} from "../styles/JobDetails";
import { InlineList, InlineListItem } from "../styles/ListStyle";
import { MainOutlineButton, MainButton } from "../styles/Button";
import { AuthConsumer } from "../context/AuthContext";

class JobDetailsPage extends Component {
  state = {
    job: {}
  };
  componentDidMount() {
    fetch("http://www.somaku.com/users/", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        let job = data.filter(job => job.id == this.props.id);
        this.setState({
          job: job[0]
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    const { name } = this.state.job;
    return (
      <AuthConsumer>
        {Auth => (
          <Container style={{ marginTop: "30px" }}>
            <Row>
              <Col sm={3} border>
                <EmployerLogo
                  src="https://freemuse.org/wp-content/uploads/2017/06/mbc-logo-590x300.jpg"
                  alt=""
                />
                <EmployerName>{name}</EmployerName>
              </Col>
              <Col sm={9}>
                <Jobtitle>Front End Developer</Jobtitle>
                <JobLevel>Mid Level</JobLevel>
                <JobDesc>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facilis perferendis similique iusto, magnam tempore amet velit
                  totam omnis nihil sunt iste voluptatem repellendus deserunt
                  delectus, provident ratione voluptates. Dolores temporibus
                  repudiandae maxime. Error molestiae dolores consequuntur
                  debitis velit possimus maxime voluptatem reprehenderit
                  voluptate fuga impedit quos eum, deleniti amet corrupti vel ut
                  voluptatum enim voluptates eaque ratione sit doloremque.
                  Animi, eveniet minima? Dolorem laudantium ipsum praesentium.
                  Veritatis, quos repudiandae molestias ab ea cupiditate
                  voluptate deleniti magni reprehenderit aspernatur doloremque
                  nam delectus perferendis veniam! Excepturi, rerum odit fuga
                  tempora reprehenderit nemo delectus temporibus, ipsa mollitia
                  amet vel voluptatibus dignissimos facilis quam quasi deleniti
                  magni. Veniam vero, voluptatibus fuga ipsam deleniti ex
                  placeat tenetur neque sapiente! Quia maiores similique
                  debitis, hic dolores aliquid eligendi harum numquam voluptate!
                  Assumenda reiciendis perferendis perspiciatis modi voluptatem,
                  nam quibusdam tempore aperiam numquam obcaecati iusto
                  temporibus unde eos fugit doloribus fugiat? Sequi nihil
                  dolores voluptas tempore quia! Et neque nemo tempore libero
                  rem natus beatae eaque architecto ut culpa perferendis ducimus
                  provident fuga nostrum non, incidunt eum veniam. Amet culpa
                  illo animi qui cupiditate ullam, cum consequatur iste debitis
                  earum tempore quia nihil harum sapiente dolores deserunt rem
                  iure provident accusamus blanditiis? Neque nemo modi ea odit.
                </JobDesc>
              </Col>
              {Auth.state.isLoggedIn && Auth.state.type == "candidate" && (
                <InlineList>
                  <InlineListItem>
                    <MainOutlineButton>Apply to this job</MainOutlineButton>
                  </InlineListItem>
                </InlineList>
              )}

              {Auth.state.isLoggedIn && Auth.state.type == "admin" && (
                <InlineList>
                  <InlineListItem>
                    <MainButton>Approve</MainButton>
                  </InlineListItem>
                  <InlineListItem>
                    <MainOutlineButton>Reject</MainOutlineButton>
                  </InlineListItem>
                </InlineList>
              )}
            </Row>
          </Container>
        )}
      </AuthConsumer>
    );
  }
}

export default JobDetailsPage;
