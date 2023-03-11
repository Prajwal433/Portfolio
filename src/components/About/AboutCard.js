import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prajwal </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />I am a Full Stack Developer.
            <br />
            <br />
            Apart From Coding, Some Other Activities That I Love To Do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding & Problem Solving
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The Best Way To Predict The Future Is To Invent It"{" "}
          </p>
          <footer className="blockquote-footer">Prajwal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
