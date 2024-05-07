import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAmazonaws,
  SiNetlify,
  SiDocker,
  SiGithub, SiMicrosoftazure,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col title="Visula Studio Code" xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col title="AWS" xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col title="Github" xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col title="Docker" xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col title="Netlify" xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
    </Row>
  );
}

export default Toolstack;
