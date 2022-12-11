import React from "react";
import "./Portfolio.css";

import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.jpg";

const images = [
  {
    id: 1,
    image: img1,
    title: " Crypto Currency Dashboard & Finiancial Visualition",
    github: "https://github.com/",
    demo: "https://google.com/",
  },
  {
    id: 2,
    image: img2,
    title: " Crypto Currency Dashboard & Finiancial Visualition",
    github: "https://github.com/",
    demo: "https://google.com/",
  },
  {
    id: 3,
    image: img3,
    title: " Crypto Currency Dashboard & Finiancial Visualition",
    github: "https://github.com/",
    demo: "https://google.com/",
  },
  {
    id: 4,
    image: img4,
    title: " Crypto Currency Dashboard & Finiancial Visualition",
    github: "https://github.com/",
    demo: "https://google.com/",
  },
  {
    id: 5,
    image: img5,
    title: " Crypto Currency Dashboard & Finiancial Visualition",
    github: "https://github.com/",
    demo: "https://google.com/",
  },
  {
    id: 6,
    image: img6,
    title: " Crypto Currency Dashboard & Finiancial Visualition",
    github: "https://github.com/",
    demo: "https://google.com/",
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
