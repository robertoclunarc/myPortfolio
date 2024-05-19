import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My name is <span className="purple">Roberto Lunar </span>
            from <span className="purple"> Guayana City, Venezuela.</span>
            <br />I am a Computer Engineer graduated from the Experimental University 
            of Guayana "UNEG" in 2008. I'm{" "}
            <b className="purple"> Web developer</b> and
            <b className="purple"> SQL database administrator.</b>
            <br />I am looking forward to gain competency and exposure in{" "}
            <b className="purple">
              Web development.
            </b>
            <br />
            <br />
            I am a highly qualified professional who is characterized by his decisive, 
            creative and effective capacity. With the capacity for flexibility and adaptability, 
            customer-oriented, achievement-oriented and results-oriented, with excellent interpersonal 
            relationships and teamwork skills.
One of my intentions is to establish a long-term relationship, where we can mutually benefit 
for growth as people and as a company.
          </p>          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
