import React, { Component } from "react";

const JobResultsContext = React.createContext();

class JobResultsProvider extends Component {
  state = {
    jobs: [],
    currentItem: 0,
    currentJob: {}
  };

  handleJobThumbnailClick = itemIndex => {
    this.setState({
      currentItem: itemIndex,
      currentJob: this.state.jobs[itemIndex]
    });
  };

  componentDidMount() {
    fetch("http://127.0.0.1:8080/app/resources/jobs/getEmployerJob", {
      method: "POST",
      headers: {
        employerId: 1,
        jobStatus: "active"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          jobs: data,
          currentJob: data[0]
        });
        console.log(data);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          handleJobThumbnailClick: this.handleJobThumbnailClick
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export const Provider = JobResultsContext.Provider;
export const Consumer = JobResultsContext.Consumer;
export default JobResultsProvider;
