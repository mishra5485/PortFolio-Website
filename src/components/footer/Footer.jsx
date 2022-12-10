import React from "react";
import "./Footer.css";
import { SiFacebook } from "react-icons/si";
import { BsInstagram, BsTwitter } from "react-icons/bs";
function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Harsh Mishra
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials" target="_blank">
        <a href="https://facebook.com">
          <SiFacebook />
        </a>
        <a href="https://instagram.com" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://twitter.com" target="_blank">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Harsh Mishra.All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
