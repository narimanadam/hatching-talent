import React from "react";
import {
  ReviewDetailsStyles,
  CandidateImg,
  Title,
  Body,
  CandidateName,
  Subtitle
} from "../styles/ReviewDetailsStyles";

import { AuthConsumer } from "../context/AuthContext";
import { InlineList, InlineListItem } from "../styles/ListStyle";
import { MainButton, MainOutlineButton } from "../styles/Button";
import { Row, Col } from "react-grid-system";

const ReviewDetails = ({ name }) => {
  return (
    <AuthConsumer>
      {Auth => (
        <ReviewDetailsStyles>
          <Row>
            <Col sm={3}>
              <CandidateImg
                src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1302&q=80"
                alt=""
              />
              <CandidateName>Nariman Adam</CandidateName>
            </Col>
            <Col sm={9}>
              <Title>{name}</Title>
              <Subtitle>Pros</Subtitle>
              <Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                explicabo?
              </Body>
              <Subtitle>Cons</Subtitle>
              <Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                explicabo?
              </Body>
              <Subtitle>Advice to Management</Subtitle>
              <Body>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Expedita doloribus nesciunt corporis hic similique vel quisquam
                quos rem? Delectus in, natus mollitia magnam cum quaerat
                pariatur amet sed neque optio ab quo. Doloremque totam neque
                deserunt. Alias, harum cum? Facere soluta beatae recusandae
                dolorum accusamus ex hic voluptates neque aperiam?
              </Body>
            </Col>
          </Row>
          {Auth.state.isLoggedIn && Auth.state.type == "admin" && (
            <InlineList>
              <InlineListItem>
                <MainButton>Approve</MainButton>
              </InlineListItem>
              <InlineListItem>
                <MainOutlineButton>Reject</MainOutlineButton>
              </InlineListItem>
            </InlineList>
          )}
        </ReviewDetailsStyles>
      )}
    </AuthConsumer>
  );
};

export default ReviewDetails;
