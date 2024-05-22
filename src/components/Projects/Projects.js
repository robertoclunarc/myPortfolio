import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

//import unichat from "../../Assets/Projects/Unichat.jpg";
import desbloqueamicell from "../../Assets/Projects/desbloqueamicell.png";
import mcoc from "../../Assets/Projects/marvel.png";
import sisca from "../../Assets/Projects/sisca.png";
import sisSalud from "../../Assets/Projects/sigesai.png";
//import pollution from "../../Assets/Projects/pollution.png";

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
              imgPath={desbloqueamicell}
              title="Desbloqueamicell"
              description="This is an application so that the user can connect to unlock their purchased cell phone which is locked by the factory for the area where the phone will operate."
              link="https://github.com/robertoclunarc/desbloqueo-frontend-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mcoc}
              title="Marvel Contest of Champion Info Warriors"
              description="This is an application that serves as information for players of the game Marvel Contest of Champion by Kabam which shows players the immunities and other abilities of each fighter."
              link="https://github.com/robertoclunarc/marvel_contest_of_champions"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sisca}
              title="Sistema Control de Asistencia"
              description="Attendance control system to report the time worked of each worker and their incidents"
              link="https://github.com/robertoclunarc/sist-briqven/tree/main/control_asistencia"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sisSalud}
              title="Sistema de Gestion de Salud Laboral"
              description="Occupational health management system to record all the medical history of each worker"
              link="https://github.com/robertoclunarc/coreui-admin"
            />
          </Col>          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
