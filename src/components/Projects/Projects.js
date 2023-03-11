import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://cdn.discordapp.com/attachments/1057671222827155501/1084066594084372500/image.png"
              isBlog={false}
              title="Portfolio"
              description="A Portfolio Where I Display All My Project/About Me"
              ghLink="https://github.com/Prajwal433/Portfolio"
              demoLink="https://prajwaldev.xyz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://cdn.discordapp.com/attachments/940850824496697385/1062292726734925874/image.png"
              isBlog={false}
              title="Old-Portfolio"
              description="A Old Portfolio Where I Display All My Project/About Me"
              ghLink="https://github.com/Prajwal433/Old-Portfolio"
              demoLink="https://old-portfolio.prajwaldev.xyz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://cdn.discordapp.com/attachments/1061206144271519854/1062259724550144010/image.png?size=2048"
              isBlog={false}
              title="Hosting Template"
              description="A Free Hosting Template Made For Hosting"
              ghLink="https://github.com/Prajwal433/Hosting-Website"
              demoLink="https://demo-1.prajwaldev.xyz"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://cdn.discordapp.com/attachments/940850824496697385/1062302161813393428/image.png?size=2048"
              isBlog={false}
              title="Hosting Template 2"
              description="A Free Hosting Template Made For Hosting"
              ghLink="https://github.com/Prajwal433/Hosting-Website-2"
              demoLink="https://demo-2.prajwaldev.xyz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://cdn.discordapp.com/attachments/1054787515711754260/1083400625276071986/image.png"
              isBlog={false}
              title="Catactyl"
              description="A Multi-Egg For Pterodactyl Which Have All Software In One Egg"
              demoLink="https://catactyl.xyz" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
