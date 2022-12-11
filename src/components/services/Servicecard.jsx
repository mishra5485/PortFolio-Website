import React from "react";
import Servicedetails from "./Servicedetails";
const Servicecard = ({ Heading }) => {
  return (
    <article className="service">
      <div className="service__head">
        <h3>{Heading}</h3>
      </div>
      <ul className="service__list">
        <Servicedetails data="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
        <Servicedetails data="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
        <Servicedetails data="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
        <Servicedetails data="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
        <Servicedetails data="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
        <Servicedetails data="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
        <Servicedetails data="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
        <Servicedetails data="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
        <Servicedetails data="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
        <Servicedetails data="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
      </ul>
    </article>
  );
};

export default Servicecard;
