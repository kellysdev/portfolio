import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Intro = () => {
  return (
    <Row className="intro">
      <Col className="intro-col">
        <h1 className="intro-title">Full-Stack Developer</h1>
        <p className="intro-text">          
          Hi, I'm Kelly.
          <br/>
          I am available for a full-time or part-time position (in person, hybrid, or remote) near Davis, CA.
          <br/><br/>
          <span className="mouse me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mouse" viewBox="0 0 16 16">
            <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5"/>
            </svg>
          </span>
          <span className="scroll-statement">Scroll down to check out some of my recent work.</span>
        </p>
      </Col>
    </Row>
  );
};

export default Intro;