import React, { Component, Fragment } from "react";
import { Container } from "react-grid-system";
import ReviewDetails from "../components/ReviewDetails";

class AdminReviewOverviewPage extends Component {
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
      <Container style={{ marginTop: "30px" }}>
        <Fragment>
          {this.state.reviews.map(review => (
            <ReviewDetails name={review.name} />
          ))}
        </Fragment>
      </Container>
    );
  }
}

export default AdminReviewOverviewPage;
