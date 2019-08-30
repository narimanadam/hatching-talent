import React, { Component } from "react";
import { Container, Row } from "react-grid-system";
import JobBox from "../components/JobBox";

class AdminJobOverview extends Component {
  state = {
    jobs: []
  };
  componentDidMount() {
    fetch("http://www.somaku.com/users", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          jobs: data
        });
        console.log(data);
      })
      .catch(error => console.log(error));
  }
  render() {
    const { name, id } = this.state.jobs;
    return (
      <div>
        <Container>
          <Row>
            {this.state.jobs.map(job => (
              <JobBox name={job.name} id={job.id} key={job.id} />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default AdminJobOverview;
