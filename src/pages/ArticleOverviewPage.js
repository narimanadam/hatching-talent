import React, { Component } from "react";
import Card from "../components/Card";
import { Container, Row, Col } from "react-grid-system";
import SectionHeading from "../components/SectionHeading";
import InputField from "../components/InputField";
import Loading from "../components/Loading";
import { Grid, GridItem } from "../styles/gridStyle";

class ArticleOverViewPage extends Component {
  state = {
    articles: [],
    query: "",
    filtered: [],
    isLoading: true
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        this.setState({
          filtered: data,
          isLoading: false
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { query, filtered, isLoading } = this.state;
    let newList = filtered.filter(article => article.userId === 1);
    let FilteredArticles = newList.filter(
      article => article.title.toLowerCase().indexOf(query) !== -1
    );
    return (
      <div>
        <div className="main-colored">
          <Container>
            <SectionHeading boldText="Search" normalText="Blog" />
            <form action="">
              <Row>
                <Col sm={8}>
                  <InputField
                    type="text"
                    placeholder="Search blog By keyword"
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
            {FilteredArticles.map(article => (
              <GridItem sm={4}>
                <Card
                  key={article.id}
                  title={article.title}
                  body={article.body}
                  articleId={article.id}
                  type="image"
                />
              </GridItem>
            ))}
          </Grid>
          {isLoading && <Loading />}
        </Container>
      </div>
    );
  }
}

export default ArticleOverViewPage;
