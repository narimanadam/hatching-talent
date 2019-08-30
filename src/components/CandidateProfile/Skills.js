import React, { Component } from "react";
import Labels from "../Labels";
import Box from "../Box";
import { MainOutlineButton, MainButton } from "../../styles/Button";
import InputField from "../InputField";
import { InlineList, InlineListItem } from "../../styles/ListStyle";
class Skills extends Component {
  state = {
    skill: "",
    skills: [],
    showAddNewSkillInput: false
  };

  showAddNewSkillInput = () => {
    this.setState({
      showAddNewSkill: true
    });
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  submitSkill = () => {
    this.state.skills.push(this.state.skill);
    console.log(this.state);
    this.setState({
      ...this.state
    });
  };

  render() {
    const { skills, showAddNewSkill } = this.state;
    return (
      <Box heading="Skills">
        {skills.map((skill, index) => (
          <Labels key={index} title={skill} />
        ))}
        {showAddNewSkill && (
          <InputField
            type="text"
            name="skill"
            placeholder="Add New Skill"
            handleInputChange={this.handleInputChange}
          />
        )}
        <InlineList>
          <InlineListItem>
            <MainOutlineButton
              onClick={this.showAddNewSkillInput}
              type="button"
            >
              Add New Skill
            </MainOutlineButton>
          </InlineListItem>
          {showAddNewSkill && (
            <InlineListItem>
              <MainButton onClick={this.submitSkill} type="button">
                Submit
              </MainButton>
            </InlineListItem>
          )}
        </InlineList>
      </Box>
    );
  }
}

export default Skills;
