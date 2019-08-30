import React, { Component } from "react";
import { JobThumbnailStyled } from "../styles/JobThumbnailStyled";
import PropTypes from "prop-types";

class JobThumbnail extends Component {
  static propTypes = {
    job: PropTypes.object.isRequired
  };
  render() {
    const { job } = this.props;

    return (
      <JobThumbnailStyled onClick={this.props.handleJobThumbnailClick}>
        <div className="grid-thumb__img-wrapper">
          <img
            src="https://vignette.wikia.nocookie.net/logopedia/images/9/9c/Coca-Cola_logo_2016.svg/revision/latest/scale-to-width-down/480?cb=20161225004719"
            className="grid-thumb__img"
            alt={job.job_name}
          />
        </div>
        <div className="grid-thumb__info">
          {/* <span className="grid-thumb__subTitle">{job.job_description}</span> */}
          <span className="grid-thumb__title">{job.job_name}</span>
          <span className="grid-thumb__desc">{job.job_description}</span>
        </div>
      </JobThumbnailStyled>
    );
  }
}

export default JobThumbnail;
