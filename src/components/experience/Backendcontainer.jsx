import React from "react";
import Experiencedetails from "./Experiencedetails";

const Backendcontainer = ({ Heading }) => {
  return (
    <>
      <div className="experience__frontend">
        <h3>{Heading}</h3>
        <div className="experience__content">
          <Experiencedetails topic="MongoDb" type="Intermediate" />
          <Experiencedetails topic="Node.Js" type="Intermediate" />
          <Experiencedetails topic="MySql" type="Intermediate" />
          <Experiencedetails topic="Express.js" type="Begineer" />
        </div>
      </div>
    </>
  );
};

export default Backendcontainer;
