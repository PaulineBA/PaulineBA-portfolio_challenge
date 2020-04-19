import React from "react";
import CV from "./cv";

const JobCard = ({ cv }) =>{
    return (
        <>
         <div class="ui card">
         <div class="image">
         <img src={CV.image} />
         </div>
         <div class="content">
         <h3 class="ui header">{cv.name}</h3>
         <div class="description">{cv.description}</div>
         <div className="link"><a href={jobs.link}>schoolWebsite</a>
         </div>
         </div>
       </div>
       </>
     );
   };
   export default JobCard;