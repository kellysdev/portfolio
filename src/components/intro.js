import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <Row className="intro">
      <Col className="intro-col">
        <motion.div className="intro-title" initial={{opacity: 0}} animate={{opacity: 1}} transition={{ ease: "easeOut", duration: 1.5}}>
          Full-Stack Web Developer</motion.div>
        <p className="intro-text text-info">          
          Hi, I'm Kelly.
          <br/>
          I am available for a full-time or part-time position (in person, hybrid, or remote) near Davis, CA.
        </p>
      </Col>
    </Row>
  );
};

export default Intro;