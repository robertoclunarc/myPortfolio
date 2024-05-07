import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
  DiHtml5,
  DiBootstrap
} from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import {
  SiRedux,
  SiMaterialUi,
  SiMariadb,
  SiCplusplus,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiPhp, SiTypescript, SiAngular, SiNextDotJs,
  SiGraphql,
} from "react-icons/si";

function Techstack() {
  return (
    <Container>
      <h3 className="project-heading" style={{ size: "20px" }}>
        Languages
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col title="PHP" xs={4} md={2} className="tech-icons">
          <SiPhp />
        </Col>
        <Col title="Python" xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
        <Col title="Java" xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
        <Col title="JavaScript" xs={4} md={2} className="tech-icons">
          <SiJavascript />
        </Col>
        <Col title="C++" xs={4} md={2} className="tech-icons">
          <SiCplusplus />
        </Col>
      </Row>

      <h3 className="project-heading" style={{ size: "20px" }}>
        Web Development
      </h3>
      <Row title="HTML5" style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 />
        </Col>
        <Col title="CSS" xs={4} md={2} className="tech-icons">
          <FaCss3Alt />
        </Col>
        <Col title="JavaScript" xs={4} md={2} className="tech-icons">
          <SiJavascript />
        </Col>
        <Col title="REACT" xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col title="Redux" xs={4} md={2} className="tech-icons">
          <SiRedux />
        </Col>
        <Col title="Bootstrap" xs={4} md={2} className="tech-icons">
          <DiBootstrap />
        </Col>
        <Col title="MaterialUi" xs={4} md={2} className="tech-icons">
          <SiMaterialUi />
        </Col>
        <Col title="NodeJS" xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col title="MySQL" xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
        <Col title="Mariadb" xs={4} md={2} className="tech-icons">
          <SiMariadb />
        </Col>

        <Col title="Postgresql" xs={4} md={2} className="tech-icons">
          <SiPostgresql />
        </Col>
        <Col title="Oracle" xs={4} md={2} className="tech-icons">
          <SiOracle />
        </Col>
        <Col title="TypeScript" xs={4} md={2} className="tech-icons">
          <SiTypescript />
        </Col>
        <Col title="Angular" xs={4} md={2} className="tech-icons">
          <SiAngular />
        </Col>
        <Col title="NextJs" xs={4} md={2} className="tech-icons">
          <SiNextDotJs />
        </Col>
        <Col title="Graphql" xs={4} md={2} className="tech-icons">
          <SiGraphql />
        </Col>
      </Row>
    </Container>
  );
}

export default Techstack;
