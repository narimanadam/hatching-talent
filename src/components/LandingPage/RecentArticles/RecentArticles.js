import React, { useState, useEffect } from "react";
import * as Styled from "./RecentArticles.styles";
import RecentArticlesSlider from "./RecentArticlesSlider";
import { GET_ARTICLES } from "../../../common/helpers/apiUrls";
import Block from "../../../common/components/Block";

const RecentArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${GET_ARTICLES}`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    })
      .then(res => res.json())
      .then(data => {
        setArticles(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Block title="Recent Articles" variant="mainBlock">
      <Styled.Wrapper>
        <Styled.Content>
          <RecentArticlesSlider articles={articles} />
        </Styled.Content>
      </Styled.Wrapper>
    </Block>
  );
};

export default RecentArticles;
