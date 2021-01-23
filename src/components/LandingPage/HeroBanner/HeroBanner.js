import React from "react";
import * as Styled from "./HeroBanner.styles";
import { Input } from "../../../common/components/Input/Input.styles";
import { Form } from "../../../styles/FormStyles";
import Button from "../../../common/components/Button";
import { Link } from "@reach/router";

const HeroBanner = () => {
  return (
    <Styled.HeroBanner>
      <Styled.Content>
        <Styled.Heading>
          Student or recent grad? <br /> Get to work.
        </Styled.Heading>
        <Styled.Desc>
          Find meaningful jobs. Explore career paths. Check out helpful
          resources.
        </Styled.Desc>
        {/* <Form inline>
          <Input type="text" placeholder="Search your dream job" /> */}
        <Link to="/job-search">
          <Button
            text="Search Jobs"
            type="button"
            variant="defaultButton"
            notRounded
          />
        </Link>
        {/* </Form> */}
      </Styled.Content>
      <Styled.Img src="../../../assets/bannerImg1.png" />
    </Styled.HeroBanner>
  );
};

export default HeroBanner;
