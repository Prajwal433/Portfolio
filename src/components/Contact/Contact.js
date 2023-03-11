import React from "react";
import { Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { 
    FaLinkedinIn,
    FaDiscord
} from "react-icons/fa";
import Particle from "../Particle";

function Contact() {
  return (
    
    <div style={{ padding: 150, textAlign: "center", paddingBottom: 350}}>
          <Col md={12} className="home-about-social">
          <Particle />
            <h3>
              Feel Free to <span className="purple">Connect </span>With Me
            </h3>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Prajwal433"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discord.com/users/778254181303451658/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.twwiter"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/Prajwal433/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/prajwal_433"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
          </div>
  );
}
export default Contact;
