import React, { Component } from "react";

class MyErrorBoundary extends Component {
  state = {
    hasError: ""
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("infoooo", info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <h1>This is an error</h1>;
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;
