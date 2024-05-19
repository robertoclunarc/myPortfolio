import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {  
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      {/*<GitHubCalendar
        username="robertoclunarc"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
  />*/}
      <GitHubCalendar blockSize={15} blockMargin={5} fontSize={16} username="robertoclunarc" />
    </Row>
  );
}
export default Github;
