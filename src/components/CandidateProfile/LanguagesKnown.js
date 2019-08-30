import React, { Component } from "react";
import Labels from "../Labels";
import Box from "../Box";
import { MainOutlineButton, MainButton } from "../../styles/Button";
import InputField from "../InputField";
import { InlineList, InlineListItem } from "../../styles/ListStyle";

class LanguagesKnown extends Component {
  state = {
    language: "",
    languages: [],
    showAddNewLanguage: false
  };

  showAddNewLanguageInput = () => {
    this.setState({
      showAddNewLanguage: true
    });
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  submitLangugae = () => {
    this.state.languages.push(this.state.language);
    this.setState({
      ...this.state
    });
  };

  render() {
    return (
      <Box heading="Languages Known" body="Add the languages you know">
        {this.state.languages.map((language, index) => (
          <Labels key={index} title={language} />
        ))}
        {this.state.showAddNewLanguage && (
          <InputField
            type="text"
            name="language"
            placeholder="Add New Language"
            handleInputChange={this.handleInputChange}
          />
        )}
        <InlineList>
          <InlineListItem>
            <MainOutlineButton
              onClick={this.showAddNewLanguageInput}
              type="button"
            >
              Add New Language
            </MainOutlineButton>
          </InlineListItem>
          {this.state.showAddNewLanguage && (
            <InlineListItem>
              <MainButton onClick={this.submitLangugae} type="button">
                Submit
              </MainButton>
            </InlineListItem>
          )}
        </InlineList>
      </Box>
    );
  }
}

export default LanguagesKnown;
