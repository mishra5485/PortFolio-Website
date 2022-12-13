import React from "react";
import "./Portfolio.css";

import img1 from "../../assets/Project-Tesla.png";
import img2 from "../../assets/Project-Netflix.png";
import img3 from "../../assets/Project-Yt.png";

const images = [
  {
    id: 1,
    image: img1,
    title: " Tesla Landing Page",
    github: "https://github.com/mishra5485/Tesla-Clone",
    demo: "https://tesla-clone9909.netlify.app/",
  },
  {
    id: 2,
    image: img2,
    title: " Netflix-Clone",
    github: "https://github.com/mishra5485/Netflix-Clone",
    demo: "https://netflix-clone-a578b.web.app/",
  },
  {
    id: 3,
    image: img3,
    title: "Media Player",
    github: "https://github.com/mishra5485/Youtube-Clone",
    demo: "https://aesthetic-snickerdoodle-5d94a7.netlify.app/",
  },
];

function Portfolio() {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {images.map((elem, index) => {
          return (
            <article key={index} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={elem.image} alt="portfolio " />
              </div>
              <h3>{elem.title}</h3>
              <div className="portfolio__item-cta">
                <a href={elem.github} target="_blank" className="btn">
                  Github
                </a>
                <a href={elem.demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
