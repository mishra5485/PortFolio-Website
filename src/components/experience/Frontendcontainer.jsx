import React from "react";
import Experiencedetails from "./Experiencedetails";

const Frontendcontainer = ({ Heading }) => {
  return (
    <>
      <div className="experience__frontend">
        <h3>{Heading}</h3>
        <div className="experience__content">
          <Experiencedetails topic="HTML" type="Experienced" />
          <Experiencedetails topic="CSS" type="Intermediate" />
          <Experiencedetails topic="JavaScript" type="Intermediate" />
          <Experiencedetails topic="BootStrap" type="Intermediate" />
          <Experiencedetails topic="Tailwind Css" type="Intermediate" />
          <Experiencedetails topic="ReactJs" type="Intermediate" />
        </div>
      </div>
    </>
  );
};

export default Frontendcontainer;
