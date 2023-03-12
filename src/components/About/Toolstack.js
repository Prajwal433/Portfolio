import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiUbuntu,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <div class= "about-tech" >Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
        <div class= "about-tech" >Ubuntu</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div class= "about-tech" >Vsc</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <div class= "about-tech" >Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div class= "about-tech" >Github</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
