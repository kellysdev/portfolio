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
          <span className="scroll-statement">Scroll down to check out some of my recent work.</span>
        </p>
      </Col>
    </Row>
  );
};

export default Intro;