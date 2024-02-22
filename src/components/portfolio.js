import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <>
      <Row className="mt-5">
        <motion.h1 id="projects" className="my-4" initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
          What I've been working on
        </motion.h1>
      </Row>

      <Row className="mb-5 mt-3 g-3 d-flex portfolio-items-container" >
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.1}}>
        <Col className="my-3">
          <Row>
            <Col xs={1} sm={3} lg={4}><img src="meet.png" alt="meet app screenshot" className="portfolio-img"/></Col>
            <Col>
              <h3>Progressive Web App</h3>
              <h6 className="technologies text-secondary">React | Serverless | AWS Lambda</h6>
              <p>Built with React using a test-driven development technique, fetches upcoming events from the Google Calendar API, utilizes OAuth2 authentication, and features data visualization enabled by use of Rechart.</p>
              <div className="project-links d-flex">
                <a href="https://github.com/lladysmall/meet" target="_blank" rel="noreferrer">GitHub Repo</a>
                <a href="https://lladysmall.github.io/meet/" target="_blank" rel="noreferrer">Live App</a>
              </div>
            </Col>
          </Row>
        </Col>
        </motion.div>

        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}}>
        <Col className="my-3">
          <Row>
            <Col xs={1} sm={3} lg={4} className="portfolio-img"><img src="popopolis.png" alt="movie app screenshot" className="portfolio-img"/></Col>
            <Col>
              <h3>CRUD Single-Page Web App</h3>
              <h6 className="technologies text-secondary">MERN | API Development | Bootstrap</h6>
              <p>The server-side is built with Node, Express and MongoDB, is hosted on Heroku, and utilizes JWT authentication.  The client-side is built with React, Bootstrap, react-router, and Parcel.</p>
              <div className="project-links d-flex">
                <a href="https://github.com/lladysmall/movie-client" target="_blank" rel="noreferrer">GitHub Repo</a>
                <a href="https://popopolis.netlify.app/" target="_blank" rel="noreferrer">Live App</a>
                <a href="#/movie-case-study">Case Study</a>
              </div>
            </Col>
          </Row>
        </Col>
        </motion.div>

        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}}>
        <Col className="my-3">
          <Row>
            <Col xs={1} sm={3} lg={4} className="portfolio-img"><img src="chat.png" alt="chat app screenshot" className="portfolio-img"/></Col>
            <Col>
              <h3>React Native Chat App</h3>
              <h6 className="technologies text-secondary">Google Firebase | Expo | GiftedChat</h6>
              <p>A cross-platform chat application that allows users to share images and their locationas well as to choose the background color for the chat screen.</p>
              <div className="project-links d-flex">
                <a href="https://github.com/lladysmall/chat-app" target="_blank" rel="noreferrer">GitHub Repo</a>
              </div>
            </Col>
          </Row>
        </Col>
        </motion.div>

        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.4}}>
        <Col className="my-3">
          <Row>
            <Col xs={1} sm={3} lg={4} className="portfolio-img"><img src="pokedex.png" alt="pokedex app screenshot" className="portfolio-img"/></Col>
            <Col>
              <h3>API Fetch App</h3>
              <h6 className="technologies text-secondary">JavaScript | JQuery | Bootstrap</h6>
              <p>Loads data from an external API, the PokeAPI, and enables the viewing of data points in detail.</p>
              <div className="project-links d-flex">
                <a href="https://github.com/lladysmall/Pokedex" target="_blank" rel="noreferrer">GitHub Repo</a>
                <a href="https://lladysmall.github.io/Pokedex/" target="_blank" rel="noreferrer">Live App</a>
              </div>
            </Col>
          </Row>
        </Col>
        </motion.div>

      </Row>
    </>
  );
};

export default Portfolio;