import React from "react";
import "./Footer.css";
import Permalinks from "./Permalinks";
import Socials from "./Socials";
import { SiFacebook } from "react-icons/si";
import { BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Harsh Mishra
      </a>
      <ul className="permalinks">
        <Permalinks Title="Home" />
        <Permalinks Title="About" />
        <Permalinks Title="Experience" />
        <Permalinks Title="Services" />
        <Permalinks Title="Portfolio" />
        <Permalinks Title="Testimonials" />
        <Permalinks Title="ContactUs" />
      </ul>

      <div className="footer__socials" target="_blank">
        <Socials link="https://facebook.com" icon={<SiFacebook />} />
        <Socials link="https://instagram.com" icon={<BsInstagram />} />
        <Socials link="https://twitter.com" icon={<BsTwitter />} />
      </div>

      <div className="footer__copyright">
        <small>&copy; Harsh Mishra.All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
