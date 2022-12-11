import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experiencedetails = ({ topic, type }) => {
  return (
    <article className="experience__details">
      <BsFillPatchCheckFill className="experience__details-icon" />
      <div>
        <h4>{topic}</h4>
        <small className="text-light">{type}</small>
      </div>
    </article>
  );
};

export default Experiencedetails;
