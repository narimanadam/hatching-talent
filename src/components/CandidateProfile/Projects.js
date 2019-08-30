import React, { Component } from "react";
import Box from "../Box";
import { MainOutlineButton, MainButton } from "../../styles/Button";
import InputField from "../InputField";
import { InlineList, InlineListItem } from "../../styles/ListStyle";
import Labels from "../Labels";

class Projects extends Component {
  state = {
    project: "",
    projects: [],
    showAddNewProject: false
  };

  showAddNewInput = () => {
    this.setState({
      showAddNewProject: true
    });
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  submit = () => {
    this.state.projects.push(this.state.project);
    this.setState({
      ...this.state
    });
  };

  render() {
    return (
      <Box heading="Projects" body="Add projects that you want to show case">
        {this.state.projects.map((project, index) => (
          <Labels key={index} title={project} />
        ))}
        {this.state.showAddNewProject && (
          <InputField
            type="text"
            name="project"
            placeholder="Add New Project"
            handleInputChange={this.handleInputChange}
          />
        )}
        <InlineList>
          <InlineListItem>
            <MainOutlineButton onClick={this.showAddNewInput} type="button">
              Add New Project
            </MainOutlineButton>
          </InlineListItem>
          {this.state.showAddNewProject && (
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

export default Projects;
