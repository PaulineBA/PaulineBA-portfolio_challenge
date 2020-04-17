import React from "react";
import { UndrawDesignerLife } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container">
      <div className="ui stackable two column grid">
        <div className="column">
          <UndrawDashboard />
        </div>
        <div className="column">
          <h1 className="ui header">My Projects</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quod
            ab doloremque eaque. Consequatur temporibus, quos enim, eaque nemo ad
            iusto sequi modi totam qui veniam? Ab asperiores inventore distinctio.
          </p>
        </div>
      </div>
      <div className="ui stackable four column grid">{projectsList}</div>
    </div>
  );
};

export default About;