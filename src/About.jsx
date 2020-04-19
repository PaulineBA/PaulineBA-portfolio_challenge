import React from "react";
import { UndrawDesignerLife } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container">
      <div className="ui stackable two column grid">
        <div className="column">
          <UndrawDesignerLife />
        </div>
        <div className="column">
          <h1 className="ui header">About Me</h1>
          <p>
          Passionate about languages and cultural diversity I have embarqued on a new journey as a software developer after many years in the education field.
          I am a keen learner and a natural enthusiast for new ideas. I am originally from France but I am now based in Sweden where I raise a very international family. 
          We have successfully managed to embrace different cultures,languages while teaching about being open minded.
          What I love the most about developping solutions for people is the immediate impact it has and how helpful your contribution is!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;