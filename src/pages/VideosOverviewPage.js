import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import SectionHeading from "../components/SectionHeading";
import InputField from "../components/InputField";
import { Grid, GridItem } from "../styles/gridStyle";
import Card from "../components/Card";

class VideosOverviewPage extends Component {
  state = {
    videos: [],
    query: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          videos: data
        });
      })
      .catch(error => console.error(error));
  }
  render() {
    const { videos, query } = this.state;
    let newVideos = videos.filter(video => video.userId === 1);

    let filteredVideos = newVideos.filter(
      article => article.title.toLowerCase().indexOf(query) != -1
    );
    return (
      <div>
        <div className="main-colored">
          <Container>
            <SectionHeading boldText="Vidoes" normalText="Overview" />
            <form action="">
              <Row>
                <Col sm={8}>
                  <InputField
                    type="text"
                    placeholder="Search videos By keyword"
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
            {filteredVideos.map(video => (
              <GridItem sm={4}>
                <Card
                  key={video.id}
                  title={video.title}
                  body={video.body}
                  videoId={video.id}
                  type="video"
                  route="videos"
                />
              </GridItem>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default VideosOverviewPage;
