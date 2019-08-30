import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import SectionHeading from "../components/SectionHeading";
import InputField from "../components/InputField";
import { Grid, GridItem } from "../styles/gridStyle";
import Card from "../components/Card";

class PressOverviewPage extends Component {
  state = {
    press: [],
    query: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          press: data
        });
      })
      .catch(error => console.error(error));
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { press, query } = this.state;
    let newPress = press.filter(press => press.userId === 1);
    let filteredPress = newPress.filter(
      press => press.title.toLowerCase().indexOf(query) != -1
    );
    return (
      <div>
        <div className="main-colored">
          <Container>
            <SectionHeading boldText="Press" normalText="Overview" />
            <form action="">
              <Row>
                <Col sm={8}>
                  <InputField
                    type="text"
                    placeholder="Search Press By keyword"
                    name="query"
                    handleInputChange={this.handleInputChange}
                  />
                </Col>
              </Row>
            </form>
          </Container>
        </div>
        <Container>
          <Grid>
            {filteredPress.map(press => (
              <GridItem sm={4}>
                <Card
                  title={press.title}
                  body={press.body}
                  key={press.id}
                  pressId={press.id}
                  type="image"
                  route="press"
                />
              </GridItem>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default PressOverviewPage;
