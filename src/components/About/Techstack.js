import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiPhp,
  DiPostgresql,
} from "react-icons/di";
import { 
  AiFillHtml5
 } from "react-icons/ai";
import {
  SiNextdotjs,
  SiCss3,
  SiExpress,
  SiGnubash,
  SiJson,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div class= "about-tech" >Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div class= "about-tech" >Nodejs</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div class= "about-tech" >React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <div class= "about-tech" >Express</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
        <div class= "about-tech" >Bash</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <div class= "about-tech" >NextJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5 />
        <div class= "about-tech" >HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <div class= "about-tech" >PHP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <div class= "about-tech" >Css</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJson />
        <div class= "about-tech" >Json</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div class= "about-tech" >MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <div class= "about-tech" >MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        <div class= "about-tech" >PostgreSQL</div>
      </Col>
    </Row>
  );
}

export default Techstack;
