import React, { Component } from "react";
import Modal from "../Modal";
import Box from "../Box";

class WorkExperience extends Component {
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
      <Box heading="Work Experience">
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          title="Edit Work Experience"
        >
          <p>Work experience</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
      </Box>
    );
  }
}

export default WorkExperience;
