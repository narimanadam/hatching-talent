import React, { Component } from "react";
import Modal from "../Modal";
import Box from "../Box";
import DefinitionList from "../DefinitionList";

class JobPreference extends Component {
  state = {
    show: false
  };

  showModal = () => {
    this.setState({
      show: true
    });
  };

  hideModal = () => {
    this.setState({
      show: false
    });
  };

  render() {
    return (
      <Box heading="Job Preferences">
        <DefinitionList term="industry" desc="IT/Computer-Software" />
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          title="Edit Job Preference"
        >
          <p>Hello hello</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
      </Box>
    );
  }
}

export default JobPreference;
