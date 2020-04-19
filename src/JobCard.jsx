import React from "react";
import CV from "./cv";

const JobCard = ({ cv }) => {
    return (
      <>
        <div class="ui card">
          <div class="image">
            <img src={cv.image} />
          </div>
          <div class="content">
            <h3 class="ui header"><a href={cv.link}> <h3 class="ui header">{cv.name}</h3> </a></h3>
  
            <div class="description">{cv.description}</div>  
            <div class="link"><a href={cv.link}><h5>school's website</h5></a>

            </div>
          </div>
        </div>
      </>
    );
  };
  
export default JobCard;