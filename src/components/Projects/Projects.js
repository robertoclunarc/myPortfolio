import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import unichat from "../../Assets/Projects/Unichat.jpg";
import desbloqueamicell from "../../Assets/Projects/desbloqueamicell.png";
import mcoc from "../../Assets/Projects/marvel.png";
import youtube from "../../Assets/Projects/youtube.jpg";
import mysuru from "../../Assets/Projects/mysuru.JPG";
import pollution from "../../Assets/Projects/pollution.png";

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
              imgPath={youtube}
              title="Youtube Clone"
              description="I have created this project for my Open Source submission. This webste is basically the frontend clone of Youtube which uses Youtube API to fetch videos from Youtube. I have created this project using React, Redux and Firebase."
              link="https://github.com/sagarmude7/Youtube-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unichat}
              title="UniChat"
              description="This is a real-time chat application build using React.js, Firebase and React chat engine. Here you can do one to one and one to many chats by creating groups and adding the members to it."
              link="https://github.com/sagarmude7/UniChat"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mysuru}
              title="Mysuru Tourism Website"
              description="I have created this website for DSC-WOW Hackathon. This website is created with basic HTML, CSS and JavaScript. This website helps to increase tourism in Mysore by featuring all the toursits spots."
              link="https://github.com/sagarmude7/DSCWOW_Mysuru-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pollution}
              title="Pollution Tracker"
              description="It is a python program that tells the API (Air Pollution Index) and further pollutants level in air of any city in the world. It uses Matplotlib to plot pie chart of pollutants in air."
              link="https://github.com/sagarmude7/Pollution-Tracker"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
