import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <Row className="intro">
      <Col className="intro-col">
        <h1 className="intro-title">Full-Stack Developer</h1>
        <p className="intro-text">          
          Hi, I'm Kelly.
          <br/>
          I am available for a full-time or part-time position (in person, hybrid, or remote) near Davis, CA.
        </p>
        <div className="d-flex">
          <motion.h2 className="bi bi-mouse mouse" animate={{ x: [0, 10, 5] }} transition={{ ease: "easeOut", duration: 2 }} />
          <span className="scroll-statement ms-4">Scroll down to check out some of my recent work.</span>
        </div>
      </Col>
    </Row>
  );
};

export default Intro;