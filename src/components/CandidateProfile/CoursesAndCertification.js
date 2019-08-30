import React, { Component } from "react";
import Box from "../Box";
import { MainOutlineButton, MainButton } from "../../styles/Button";
import InputField from "../InputField";
import { InlineList, InlineListItem } from "../../styles/ListStyle";
import Labels from "../Labels";

class CoursesAndCertification extends Component {
  state = {
    course: "",
    courses: [],
    showAddNewCourse: false
  };

  showAddNewInput = () => {
    this.setState({
      showAddNewCourse: true
    });
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  submit = () => {
    this.state.courses.push(this.state.course);
    this.setState({
      ...this.state
    });
  };

  render() {
    return (
      <Box
        heading="Courses &amp; Certification"
        body="Enter details of any professional course or certification you may have done"
      >
        {this.state.courses.map((course, index) => (
          <Labels key={index} title={course} />
        ))}
        {this.state.showAddNewCourse && (
          <InputField
            type="text"
            name="course"
            placeholder="Add New Course"
            handleInputChange={this.handleInputChange}
          />
        )}
        <InlineList>
          <InlineListItem>
            <MainOutlineButton onClick={this.showAddNewInput} type="button">
              Add New Course
            </MainOutlineButton>
          </InlineListItem>
          {this.state.showAddNewCourse && (
            <InlineListItem>
              <MainButton onClick={this.submit} type="button">
                Submit
              </MainButton>
            </InlineListItem>
          )}
        </InlineList>
      </Box>
    );
  }
}

export default CoursesAndCertification;
