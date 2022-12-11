import React from "react";
import { FaAward, FaUsers, FaFolder } from "react-icons/fa";

const Aboutcards = ({ title, desc }) => {
  return (
    <article className="about__card">
      <FaFolder className="about_icon" />
      <h5>{title}</h5>
      <small>{desc}</small>
    </article>
  );
};

export default Aboutcards;
