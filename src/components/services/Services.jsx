import React from "react";
import "./Services.css";
import Servicecard from "./Servicecard";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <Servicecard Heading="UI/UX Design" />
        <Servicecard Heading="Web Development" />
        <Servicecard Heading="Content Creation" />
      </div>
    </section>
  );
}

export default Services;
