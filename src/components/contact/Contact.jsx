import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { BsMessenger } from "react-icons/bs";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_mpd02fb",
      "template_a9h5bu4",
      form.current,
      "6VeBxQux9e9AFskfI"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Harshmishra5485@gmail.com</h5>
            <a href="mailto:Harshmishra5485@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Harsh Mishra</h5>
            <a
              href="https://m.me/profile.php?id=100020709922897"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>9920139151</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+919920139151"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of Contact Options  */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Enter your E-mail" />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="Submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
