import React, { Component } from "react";
import Box from "../Box";
import { MainOutlineButton, MainButton } from "../../styles/Button";
import InputField from "../InputField";
import { InlineList, InlineListItem } from "../../styles/ListStyle";
import Labels from "../Labels";

class OnlinePresence extends Component {
  state = {
    link: "",
    links: [],
    showAddNewLink: false
  };

  showAddNewInput = () => {
    this.setState({
      showAddNewLink: true
    });
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  submit = () => {
    this.state.links.push(this.state.link);
    this.setState({
      ...this.state
    });
  };

  render() {
    return (
      <Box
        heading="Online Presence"
        body="Add link to your social profiles(linkedin, facebook, ...etc)"
      >
        {this.state.links.map((link, index) => (
          <Labels key={index} title={link} />
        ))}
        {this.state.showAddNewLink && (
          <InputField
            type="text"
            name="link"
            placeholder="Add New Link"
            handleInputChange={this.handleInputChange}
          />
        )}
        <InlineList>
          <InlineListItem>
            <MainOutlineButton onClick={this.showAddNewInput} type="button">
              Add New Link
            </MainOutlineButton>
          </InlineListItem>
          {this.state.showAddNewLink && (
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

export default OnlinePresence;
