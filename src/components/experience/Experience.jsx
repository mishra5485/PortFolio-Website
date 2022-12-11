import React from "react";
import "./Experience.css";
import Frontendcontainer from "./Frontendcontainer";
import Backendcontainer from "./Backendcontainer";
import { BsFillPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <Frontendcontainer Heading="Frontend Development" />
        <Backendcontainer Heading="Backend Development" />
      </div>
    </section>
  );
}

export default Experience;
