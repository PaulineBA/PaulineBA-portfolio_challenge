import React, { Component } from "react";
import axios from "axios";
import JobCard from "./JobCard";


class CV extends Component {
  state = {
    CVdata: []
  };
  componentDidMount() {
    axios.get('./src/data/cv.json')
      .then(response => {
        this.setState({
          CVdata: response.data
        })
      })
  }
  
render() {
  const cv = this.state.CVdata;
  let jobList;


if (cv.length > 0) {
  jobList = cv.map(cv => {
    return (
      <div id={'cv-' + cv.id} key={cv.id}>
        <h3 className="ui header">{cv.name}</h3>
        <JobCard cv={cv} />
      </div>
    );
  });
}

return (
  <React.Fragment>
    <div className="ui main container">
      <h1 id="cv-header" className="ui header">CV</h1>
      {jobList}
    </div>
  </React.Fragment>
);
  }
}

export default CV;