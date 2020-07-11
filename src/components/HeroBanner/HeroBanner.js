import React from "react";
import * as Styled from "./HeroBanner.styles";
import { Input } from "../../common/components/Input/Input.styles";
import { Form } from "../../styles/FormStyles";
import Button from "../../common/components/Button";

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
        <Form inline>
          <Input type="text" placeholder="Search your dream job" />
          <Button text="Search" type="submit" variant="defaultOutlineButton" />
        </Form>
      </Styled.Content>
      <Styled.Img src="../../../assets/bannerImg1.png" />
    </Styled.HeroBanner>
  );
};

export default HeroBanner;
