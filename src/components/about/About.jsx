import React from "react";
import "./About.css";
import Me from "../../assets/me-about.jpg";
import Aboutcards from "./Aboutcards";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={Me} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <Aboutcards title="Experience" desc="3+years Experience" />
            <Aboutcards title="Clients" desc="200+ Websites" />
            <Aboutcards title="Projects" desc="80+ Completed" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            ex magnam vitae! Sapiente est, voluptatum blanditiis, esse maxime
            illo debitis nobis veritatis architecto consequuntur praesentium
            doloremque suscipit delectus distinctio omnis!
          </p>

          <a href="#contact" className="btn btn-primary cta">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
