import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { Container, Row, Col } from "react-grid-system";
import SectionHeading from "../components/SectionHeading";
import InputField from "../components/InputField";
import Loading from "../components/Loading";
import { Grid, GridItem } from "../styles/gridStyle";
import NotMatching from "../components/NotMatching";
import { GET_ARTICLES } from "../helpers/apiUrls";

const ArticleOverViewPage = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState({ name: "", quantity: 0, unitCost: 0 });

  useEffect(() => {
    setIsLoading(true);
    fetch(`${GET_ARTICLES}`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(data => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  const handleInputChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
    setQuery(value);
  };

  let FilteredArticles = articles.filter(
    article => article.title.toLowerCase().indexOf(query) !== -1
  );
  return (
    <>
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
                  handleInputChange={handleInputChange}
                />
              </Col>
            </Row>
          </form>
        </Container>
      </div>
      <Container>
        <Grid>
          {FilteredArticles.map(
            ({ title, article_description, views_no, article_id }) => (
              <GridItem sm={4}>
                <Card
                  title={title}
                  body={article_description}
                  viewsNo={views_no}
                  articleId={article_id}
                  type="image"
                  key={article_id}
                />
              </GridItem>
            )
          )}
        </Grid>
        {!FilteredArticles.length && !isLoading && (
          <NotMatching message="No articles found matching your search"></NotMatching>
        )}
        {isLoading && <Loading />}
      </Container>
    </>
  );
};

export default ArticleOverViewPage;
