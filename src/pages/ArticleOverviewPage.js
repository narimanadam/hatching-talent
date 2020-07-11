import React, { useState } from "react";
import Card from "../common/components/Card";
import { Container, Row, Col } from "react-grid-system";
import Input from "../common/components/Input";
import Loading from "../common/components/Loading";
import { Grid, GridItem } from "../styles/gridStyle";
import { GET_ARTICLES } from "../common/helpers/apiUrls";
import useFetch from "../common/hooks/useFetch";
import PageHeader from "../common/components/PageHeader";
import useDocumentTitle from "../common/hooks/useDocumentTitle";
import Message from "../common/components/Message/Message";
import * as Styled from "../common/components/Card/Card.styles";
import withMainLayout from "../Layout/MainLayout/WithMainLayout";

const ArticleOverViewPage = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState({ name: "", quantity: 0, unitCost: 0 });
  const { data, loading } = useFetch(GET_ARTICLES);
  useDocumentTitle("Blog");

  const handleInputChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
    setQuery(value);
  };

  let FilteredArticles = data.filter(
    article => article.title.toLowerCase().indexOf(query) !== -1
  );
  return (
    <Container>
      <PageHeader boldText="Search" normalText="Blog">
        <form action="">
          <Row>
            <Col sm={8}>
              <Input
                type="text"
                placeholder="Search blog By keyword"
                name="query"
                handleInputChange={handleInputChange}
              />
            </Col>
          </Row>
        </form>
      </PageHeader>

      <Styled.Wrapper mb="30px">
        {FilteredArticles.map(
          ({ title, article_description, views_no, article_id }) => (
            <Card
              title={title}
              body={article_description}
              viewsNo={views_no}
              articleId={article_id}
              type="image"
              key={article_id}
              hasImg="true"
            />
          )
        )}
      </Styled.Wrapper>
      {!FilteredArticles.length && !loading && (
        <Message
          text="No articles found matching your search"
          type="default"
        ></Message>
      )}
      {loading && <Loading />}
    </Container>
  );
};

export default withMainLayout(ArticleOverViewPage);
