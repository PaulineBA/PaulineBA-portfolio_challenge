import React from "react";

const JobCard = ({ cv }) =>{
    return (
        <>
         <div class="ui card">
         <div class="image">
         <img src={cv.image} />
         </div>
         <div class="content">
         <h3 class="ui header">{JobCard.name}</h3>
         <div class="description">{cv.description}</div>
         < a href={cv.link}>
         </a>
         </div>
         </div>
       </>
     );
   };
   export default JobCard;