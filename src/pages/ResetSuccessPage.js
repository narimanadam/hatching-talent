import React, { Component } from "react";
import Box from "../components/Box";

class ResetSuccessPage extends Component {
  render() {
    return (
      <div>
        <Box
          type="success"
          heading="Your password has been reseted Successfully"
        />
      </div>
    );
  }
}

export default ResetSuccessPage;
