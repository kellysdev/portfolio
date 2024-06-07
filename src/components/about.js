import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Row className="my-5">
{/* title */}
      <motion.h1 className="my-3" initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
        About
      </motion.h1>

{/* image */}
      <motion.div initial={{opacity:0.3}} animate={{opacity:1}}>
      <Row>
        <Col>
          <img src="portrait.png" alt="Kelly Scott portrait" className="portrait"/>
        </Col>

{/* text */}
        <Col md={8} className="mb-5">
          <p className="about-text">
            I am a problem solver who is big on taking the initiative and has a passion for project management.
            I enjoy the structure and creativity of coding and find beauty in the way that a website can evoke as much emotion as a physical space.
            <br/><br/>
            Through my background in brewing and research, I have developed an analytical and systematic approach to my work. 
            Writing standard operating procedures and developing curriculum for brewing courses has led me to focus on comprehension and user experience.
            <br/><br/>
            When I'm not coding, I am spending time with my boyfriend and our dog - often playing video games, tinkering with a mechanical keyboard, or gardening.
            <br/><br/>
            I am excited to pursue a career in which all of these aspects of me can culminate into meaningful and well built products.
          </p>
        </Col>

      </Row>
      </motion.div>
    </Row>
  );
};

export default About;