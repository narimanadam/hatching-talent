import React, { Component } from "react";
import Modal from "../Modal";
import Box from "../Box";

class ITSkills extends Component {
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
      <Box heading="IT Skills">
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          title="Edit IT Skills"
        >
          <p>Hello hello</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Edit
        </button>
      </Box>
    );
  }
}

export default ITSkills;
