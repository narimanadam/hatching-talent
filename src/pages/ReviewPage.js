import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-grid-system";
import { List, ListItem } from "../styles/ListStyle";
import { Form } from "../styles/FormStyles";
import RadioInput from "../components/RadioInput";
import { BoxStyles, Heading, Text } from "../styles/BoxStyles";
import RadioButton from "../components/RadioButton";
import { RadioButtonHeading } from "../styles/RadioButtonStyles";
import InputField from "../components/InputField";
import { MainButton } from "../styles/Button";
import Box from "../components/Box";

class ReviewPage extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col md={8}>
              <Box
                heading="Post one of the follwing to get unlimited access:"
                text={[
                  "Glassdoor has millions of salaries and company reviews shared by real employees, It only takes a minute to get unlimited access to all our content for 12 months."
                ]}
              >
                <Text>
                  <strong>Add your anonymous ..</strong>
                </Text>
                <List>
                  <Form>
                    <ListItem>
                      <RadioInput
                        label="Company Review"
                        name="review"
                        colored
                      />
                    </ListItem>
                    <ListItem>
                      <RadioInput
                        label="Interview Review"
                        name="review"
                        colored
                      />
                    </ListItem>
                  </Form>
                </List>
                <Form>
                  <RadioButtonHeading>Employer Status</RadioButtonHeading>
                  <RadioButton label="Current" name="employerStatus" button />
                  <RadioButton label="Former" name="employerStatus" button />
                  <Row>
                    <Col sm={6}>
                      <InputField
                        type="text"
                        placeholder="Employer Name"
                        name="employername"
                        label="Employer Name"
                      />
                    </Col>
                  </Row>
                  <MainButton type="submit">Next</MainButton>
                </Form>
              </Box>
            </Col>
            <Col md={4}>
              <Box
                heading="Help the Community"
                text={[
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, non.",
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, non."
                ]}
              />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ReviewPage;
