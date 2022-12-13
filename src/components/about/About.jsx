import React from "react";
import "./About.css";
import Me from "../../assets/Profile pic.jpg";
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
            <Aboutcards title="Experience" desc="Fresher" />
            <Aboutcards title="Bsc-It Graduated" desc="CGPA:8.90" />
            <Aboutcards title="Projects" desc="4+ Completed" />
          </div>
          <p>
            Aspring Web Developer.Currently Focused on ReactJS.
            <br />
            Main goal MERN Stack
            <br />
            Curious to work in StartUps.Looking for oppourtinuties
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
