import React from "react";
import "./Footer.css";
import Permalinks from "./Permalinks";
import Socials from "./Socials";
import { SiFacebook } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Harsh Mishra
      </a>
      <ul className="permalinks">
        <Permalinks Title="Home" href="#" />
        <Permalinks Title="About" href="#about" />
        <Permalinks Title="Experience" href="#experience" />
        {/* <Permalinks Title="Services" /> */}
        <Permalinks Title="Portfolio" href="#portfolio" />
        <Permalinks Title="Testimonials" href="#testimonials" />
        <Permalinks Title="ContactUs" href="#contact" />
      </ul>

      <div className="footer__socials" target="_blank">
        <Socials
          link="https://www.facebook.com/profile.php?id=100020709922897"
          icon={<SiFacebook />}
        />
        <Socials
          link="https://www.instagram.com/harshhh.01_/"
          icon={<BsInstagram />}
        />
        <Socials
          link="https://www.linkedin.com/in/harsh-mishra-b05b3b217/"
          icon={<BsLinkedin />}
        />
      </div>

      <div className="footer__copyright">
        <small>&copy; Harsh Mishra.All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
