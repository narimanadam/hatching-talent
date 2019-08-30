import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import {
  FooterStyle,
  FooterList,
  FooterListHeading,
  FooterListItem,
  Copyrights
} from "../Footer/FooterStyle";
import { MainOutlineButton } from "../../styles/Button";
import { InputFieldStyle } from "../../styles/FormStyles";
import { Link } from "@reach/router";
import { InlineList, InlineListItem } from "../../styles/ListStyle";

class Footer extends Component {
  render() {
    return (
      <FooterStyle>
        <Container>
          <Row>
            <Col sm={8}>
              <Row>
                <Col sm={4}>
                  <FooterList>
                    <FooterListHeading>Hatching Talent</FooterListHeading>
                    <FooterListItem>
                      <Link to="/about">About</Link>
                    </FooterListItem>
                    <FooterListItem>
                      <Link to="/articles">Blog</Link>
                    </FooterListItem>
                    <FooterListItem>
                      <Link to="/contact">Contact Us</Link>
                    </FooterListItem>
                    <FooterListItem>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </FooterListItem>
                  </FooterList>
                </Col>
                <Col sm={4}>
                  <FooterList>
                    <FooterListHeading>Social</FooterListHeading>
                    <FooterListItem>Facebook</FooterListItem>
                    <FooterListItem>Twitter</FooterListItem>
                    <FooterListItem>Youtube</FooterListItem>
                    <FooterListItem>Instagram</FooterListItem>
                  </FooterList>
                </Col>
                {/* <Col sm={3}>
                                    <FooterList>
                                        <FooterListHeading>Courses</FooterListHeading>
                                        <FooterListItem>By Subject</FooterListItem>
                                        <FooterListItem>By Provider</FooterListItem>
                                        <FooterListItem>Corporate Training</FooterListItem>
                                    </FooterList>
                                </Col> */}
                <Col sm={4}>
                  <FooterList>
                    <FooterListHeading>Services</FooterListHeading>
                    <FooterListItem>For Employers</FooterListItem>
                    <FooterListItem>Career Centers</FooterListItem>
                    <FooterListItem>Advertisers</FooterListItem>
                  </FooterList>
                </Col>
              </Row>
            </Col>
            <Col sm={4}>
              <FooterList>
                <FooterListHeading>Our Newsletter</FooterListHeading>
                <FooterListItem>
                  Please subscribe to our latest news to be updated
                </FooterListItem>
                <InlineList>
                  <InlineListItem>
                    <InputFieldStyle
                      type="text"
                      placeholder="Enter your Email"
                    />
                  </InlineListItem>
                  <InlineListItem>
                    <MainOutlineButton>Send</MainOutlineButton>
                  </InlineListItem>
                </InlineList>
              </FooterList>
            </Col>
          </Row>
        </Container>
        <Copyrights>&copy; Copyrights 2018. Hatching Talent</Copyrights>
      </FooterStyle>
    );
  }
}

export default Footer;
