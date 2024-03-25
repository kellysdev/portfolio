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

{/* image and socials */}
      <motion.div initial={{opacity:0.3}} animate={{opacity:1}}>
      <Row>
        <Col>
          <img src="portrait.png" alt="Kelly Scott portrait" className="portrait"/>
          <div className="mt-3 d-flex justify-content-around">
            <a href="https://medium.com/@kellysdev" 
              target="_blank" rel="noreferrer" 
              aria-label="Link to Medium profilee">
              <h4><i class="bi bi-medium text-white"></i></h4>
            </a>
            {/* <a href="https://twitter.com/lladysmall" 
              target="_blank" rel="noreferrer" 
              aria-label="Link to Twitter profile">
              <h4><i class="bi bi-twitter-x text-white"></i></h4>
            </a> */}
            <a href="https://www.instagram.com/kellysdev/" 
              target="_blank" rel="noreferrer"
              aria-label="Link to Instagram account">
              <h4><i className="bi bi-instagram text-white" ></i></h4>
            </a>
            <a href="https://codepen.io/kellysdev" 
              target="_blank" rel="noreferrer"
              aria-label="Link to CodePen profile">
            <svg className="codepen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.3 159.7l-234-156c-8-4.9-16.5-5-24.6 0l-234 156C3.7 163.7 0 170.8 0 178v156c0 7.1 3.7 14.3 9.7 18.3l234 156c8 4.9 16.5 5 24.6 0l234-156c6-4 9.7-11.1 9.7-18.3V178c0-7.1-3.7-14.3-9.7-18.3zM278 63.1l172.3 114.9-76.9 51.4L278 165.7V63.1zm-44 0v102.6l-95.4 63.7-76.9-51.4L234 63.1zM44 219.1l55.1 36.9L44 292.8v-73.7zm190 229.7L61.7 334l76.9-51.4L234 346.3v102.6zm22-140.9l-77.7-52 77.7-52 77.7 52-77.7 52zm22 140.9V346.3l95.4-63.7 76.9 51.4L278 448.8zm190-156l-55.1-36.9L468 219.1v73.7z"/></svg>
            </a>
          </div>
        </Col>

{/* text */}
        <Col md={8} className="mb-5">
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
      </motion.div>
    </Row>
  );
};

export default About;