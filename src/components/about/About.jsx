import React from "react";
import "./About.css";
import Me from "../../assets/me-about.jpg";
import { FaAward, FaUsers, FaFolder } from "react-icons/fa";

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
            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+years Experience</small>
            </article>

            <article className="about__card">
              <FaUsers className="about_icon" />
              <h5>Cients</h5>
              <small>200+ Clients</small>
            </article>

            <article className="about__card">
              <FaFolder className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
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
