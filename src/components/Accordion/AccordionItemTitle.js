import React, { Component } from "react";
import { Container } from "react-grid-system";

class AccordionItemTitle extends Component {
  state = {
    opened: false,
    disabled: false
  };
  handleClick = e => {
    this.setState({
      opened: !this.state.opened
    });
    if (this.props.active) {
      this.setState({
        opened: !this.state.opened
      });
    }
  };

  componentDidMount() {
    if (this.props.active) {
      this.setState({
        opened: true
      });
    } else {
      this.setState({
        disabled: true
      });
    }
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        className={`accordion__header  ${this.state.opened ? "opened" : ""} ${
          this.state.disabled ? "disabled" : ""
        }`}
      >
        <Container>
          <h5 className="accordion__subtitle">{this.props.step}</h5>
          <h2 className="accordion__title">{this.props.title}</h2>
        </Container>
      </div>
    );
  }
}

export default AccordionItemTitle;
