import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Roberto Lunar</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/roberto-lunar-a8402972/"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/robertoclunarc"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>           
            <li className="social-icons">
              <a
                href="https://twitter.com/LunarRoberto"
                style={{ color: "white" }}
              >
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Design Template by{" "}
        <a
          href="https://github.com/robertoclunarc"
          style={{ color: "white" }}
        >
          robertoclunarc
        </a>{" "}
      </h1>
    </Container>
  );
}

export default Footer;
