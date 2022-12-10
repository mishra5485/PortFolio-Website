import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/" target="_blank">
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/harsh-mishra-b05b3b217/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/harshhh.01_/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
