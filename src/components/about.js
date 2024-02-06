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
          Writing standard operating procedures and developing curriculum for brewing courses has led me to focus on comprehension and user experience.
          <br/><br/>
          I am a problem solver who is big on taking the initiative and has a passion for project management.
          I enjoy the structure and creativity of coding and find beauty in the way that a website can evoke as much emotion as a physical space.
          <br/><br/>
          When I'm not coding, I am spending time with my boyfriend and our dog - often playing video games, tinkering with a mechanical keyboard, or gardening.
          <br/><br/>
          I am excited to pursue a career in which all of these aspects of me can culminate into meaningful and well built products.
        </p>
      </Col>
    </Row>
  );
};

export default About;