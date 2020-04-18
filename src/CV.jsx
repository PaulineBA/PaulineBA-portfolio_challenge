import React from "react";
import axios from "axios";
import JobCard from ".JobCard";

export default CV;
class CV extends Component {
  componentDidMount() {
    axios.get('./src/data/cv.json')
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
  }
    state = {
      jobs: [
        {
          id: 1,
          name: "French teacher at Franska skolan, Gothenburg"
        },
      ]
    };
  
    render() {
      const cv = this.state.cv;
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