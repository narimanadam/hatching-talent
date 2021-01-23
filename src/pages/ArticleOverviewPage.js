import React, { useState } from "react";
import Card from "../common/components/Card";
import Input from "../common/components/Input";
import Loading from "../common/components/Loading";
import { GET_ARTICLES } from "../common/helpers/apiUrls";
import useFetch from "../common/hooks/useFetch";
import useDocumentTitle from "../common/hooks/useDocumentTitle";
import Message from "../common/components/Message/Message";
import * as Styled from "../common/components/Card/Card.styles";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";
import { SidebarLayoutContainer } from "../Layout/SidebarLayout/SidebarLayout";
import { Form } from "../styles/FormStyles";

const ArticleOverViewPage = () => {
  const [query, setQuery] = useState("");
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
    <SidebarLayoutContainer>
      <Form>
        <Input
          type="text"
          placeholder="Search blog By keyword"
          name="query"
          handleInputChange={handleInputChange}
        />
      </Form>

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
        <Message text="No articles found matching your search" type="default" />
      )}
      {loading && <Loading />}
    </SidebarLayoutContainer>
  );
};

export default WithSidebarLayout(ArticleOverViewPage);
