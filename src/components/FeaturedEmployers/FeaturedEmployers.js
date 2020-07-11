import React, { useState, useEffect } from "react";
import axios from "axios";

import * as Styled from "./FeaturedEmployers.styles";
import { Container } from "react-grid-system";
import FeaturedEmployersCard from "./FeaturedEmployersCard";
import { FEATURED_EMPLOYERS_URL } from "../../common/helpers/apiUrls";
import Block from "../../common/components/Block";

const FeaturedEmployers = () => {
  const [featuredEmployers, setFeaturedEmployers] = useState([]);

  useEffect(() => {
    // GET: Featured Employers
    axios
      .post(`${FEATURED_EMPLOYERS_URL}`)
      .then(({ data }) => setFeaturedEmployers(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Block title="Featured Employers" variant="whiteBlock">
      <Container>
        <Styled.CardList>
          {featuredEmployers.map(featuredEmployer => (
            <FeaturedEmployersCard
              name={featuredEmployer.company_name}
              key={featuredEmployer.user_id}
            ></FeaturedEmployersCard>
          ))}
        </Styled.CardList>
      </Container>
    </Block>
  );
};

export default FeaturedEmployers;
