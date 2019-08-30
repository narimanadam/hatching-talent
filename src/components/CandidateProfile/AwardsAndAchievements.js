import React, { Component } from "react";
import Box from "../Box";
import { MainOutlineButton, MainButton } from "../../styles/Button";
import InputField from "../InputField";
import { InlineList, InlineListItem } from "../../styles/ListStyle";
import Labels from "../Labels";

class AwardsAndAchievements extends Component {
  state = {
    award: "",
    awards: [],
    showAddNewAward: false
  };

  showAddNewInput = () => {
    this.setState({
      showAddNewAward: true
    });
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  submit = () => {
    this.state.awards.push(this.state.award);
    this.setState({
      ...this.state
    });
  };

  render() {
    return (
      <Box
        heading="Awards &amp; Achievements"
        body="Enter details of any awards you may have received"
      >
        {this.state.awards.map((award, index) => (
          <Labels key={index} title={award} />
        ))}
        {this.state.showAddNewAward && (
          <InputField
            type="text"
            name="award"
            placeholder="Add New Award"
            handleInputChange={this.handleInputChange}
          />
        )}
        <InlineList>
          <InlineListItem>
            <MainOutlineButton onClick={this.showAddNewInput} type="button">
              Add New Award
            </MainOutlineButton>
          </InlineListItem>
          {this.state.showAddNewAward && (
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

export default AwardsAndAchievements;
