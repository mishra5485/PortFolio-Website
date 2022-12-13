import React from "react";

const Socials = ({ link, icon, target }) => {
  return (
    <a target={"_blank"} href={link}>
      {icon}
    </a>
  );
};

export default Socials;
