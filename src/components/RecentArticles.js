import React, { useState, useEffect } from "react";
import {
  SectionHeading,
  SectionSeparator,
  RecentArticlesSection,
  RecentArticlesContent
} from "../pages/LandingPageStyle";
import RecentArticlesSlider from "../components/RecentArticlesSlider";
import { GET_ARTICLES } from "../helpers/apiUrls";

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
    <div>
      <RecentArticlesSection>
        <RecentArticlesContent>
          <SectionHeading>Recent Articles</SectionHeading>
          <SectionSeparator recentArticles />
          <RecentArticlesSlider articles={articles} />
        </RecentArticlesContent>
      </RecentArticlesSection>
    </div>
  );
};

export default RecentArticles;
