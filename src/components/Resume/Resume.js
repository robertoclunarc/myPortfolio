import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import ResumePdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Application development coordinator"
              date="November 2015 - Now"
              content={[
                "Coordinate and develop projects to update the applications and platforms of the technology department of the state company MATESI/BRIQVEN.",
              ]}
            />
            
            <Resumecontent
              title="Web systems development"
              date="February 2023 - March 2024"
              content={[
                "Develop web applications remotely using Azure and AWS services as well as Nodejs and React for the company MERCADEO RACIONAL.",
              ]}
            />
            <Resumecontent
              title="Software development"
              date="Octuber 2015 - November 2015"
              content={[
                "Develop service modules for the vehicle insurance system of the company SEGUROS CARONI.",
              ]}
            />
            <Resumecontent
              title="Software development"
              date="November 2008 - November 2009"
              content={[
                "development of a web application for the maintenance unit of the state company ORINOCO IRON",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Informatics Engineer"
              date="November 2008"
              content={[`average of 7.5`]}
            />            
           
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
