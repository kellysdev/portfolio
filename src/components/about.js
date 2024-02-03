import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <Row>
      <h1>About</h1>

      <Col>
        <img src="portrait.jpg" alt="Kelly Scott portrait" className="portrait"/>
      </Col>

      <Col>
        <p className="about-text">
            Through my background in brewing and research, I have developed an analytical and systematic approach to my work.
            Writing standard operating procedures and developing curriculum for brewing courses has also led me to focus on comprehension and user experience. 
            <br/><br/>
            I enjoy the structure and creativity of coding and enjoy the way that spaces - virtual or real - affect perception and can foster meditative states of mind.
            <br/><br/>
            When I'm not coding, I am spending time with my boyfriend and our dog - often playing video games, tinkering with a mechanical keyboard, or gardening.
            <br/><br/>
            I am available for a full-time or part-time position (in person, hybrid or remote) near Davis, CA.
        </p>
      </Col>
    </Row>
  );
};

export default About;