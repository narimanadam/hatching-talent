import React, { Component, Fragment } from "react";
import ReviewDetails from "./ReviewDetails";

class Reviews extends Component {
  state = {
    reviews: []
  };

  componentDidMount() {
    fetch("http://www.somaku.com/users", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviews: data
        });
        console.log(data);
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <Fragment>
        {this.state.reviews.map(review => (
          <ReviewDetails name={review.name} />
        ))}
      </Fragment>
    );
  }
}

export default Reviews;
