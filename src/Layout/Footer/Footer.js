import React from "react";
import { Container, Row, Col } from "react-grid-system";
import * as Styled from "./Footer.styles";
import { Link } from "@reach/router";
import { Input } from "../../common/components/Input/Input.styles";
import { Form } from "../../styles/FormStyles";
import Button from "../../common/components/Button";

const Footer = () => {
  return (
    <Styled.Footer>
      <Container>
        <Row>
          <Col sm={8}>
            <Row>
              <Col sm={4}>
                <Styled.List>
                  <Styled.ListHeading>Hatching Talent</Styled.ListHeading>
                  <Styled.ListItem>
                    <Link to="/about">About</Link>
                  </Styled.ListItem>
                  <Styled.ListItem>
                    <Link to="/articles">Blog</Link>
                  </Styled.ListItem>
                  <Styled.ListItem>
                    <Link to="/contact">Contact Us</Link>
                  </Styled.ListItem>
                  <Styled.ListItem>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </Styled.ListItem>
                </Styled.List>
              </Col>
              <Col sm={4}>
                <Styled.List>
                  <Styled.ListHeading>Social</Styled.ListHeading>
                  <Styled.ListItem>Facebook</Styled.ListItem>
                  <Styled.ListItem>Twitter</Styled.ListItem>
                  <Styled.ListItem>Youtube</Styled.ListItem>
                  <Styled.ListItem>Instagram</Styled.ListItem>
                </Styled.List>
              </Col>
              <Col sm={4}>
                <Styled.List>
                  <Styled.ListHeading>Services</Styled.ListHeading>
                  <Styled.ListItem>For Employers</Styled.ListItem>
                  <Styled.ListItem>Career Centers</Styled.ListItem>
                  <Styled.ListItem>Advertisers</Styled.ListItem>
                </Styled.List>
              </Col>
            </Row>
          </Col>
          <Col sm={4}>
            <Styled.List>
              <Styled.ListHeading>Our Newsletter</Styled.ListHeading>
              <Styled.ListItem>
                Please subscribe to our latest news to be updated
              </Styled.ListItem>

              <Form inline>
                <Input type="text" placeholder="Enter your Email" />
                <Button text="Send" variant="defaultOutlineButton" />
              </Form>
            </Styled.List>
          </Col>
        </Row>
      </Container>
      <Styled.Copyrights>
        &copy; Copyrights 2018. Hatching Talent
      </Styled.Copyrights>
    </Styled.Footer>
  );
};

export default Footer;
