import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import { motion } from "framer-motion";

const ResumePage = () => {
  return (
    <Row>
      <Col>

      <motion.div initial={{opacity:0.3}} animate={{opacity:1}}>
{/* header */}
        <Row className="mt-5">
          <Col sm={6}>
              <motion.h1 initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>Full-Stack Web Developer</motion.h1>
              <Button className="download-button" type="button" variant="outline-info" style={{width: 200}}
              href={require("../Scott-Kelly-Resume.pdf")} download="Scott-Kelly-Resume.pdf"
              ><i className="bi bi-download"></i> Download Resume</Button>
          </Col>
        </Row>

{/* summary */}
        <Row className="mt-5">
            <h3>Summary</h3>
            <p>
              Web developer passionate about accessibility and responsiveness.  With a background in research and brewing, is adept at managing priorities and problem solving.
              Excited to pursue a career collaborating with others to create user-centric websites.
            </p>
        </Row>

{/* skills */}
        <Row className="mt-3">
          <h3>Skills</h3>
          <Col>
            <ul>
              <li>Front-End</li>
                <ul>
                  <li>JavaScript, HTML, CSS</li>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Bootstrap</li>
                  <li>Angular Material</li>
                  <li>User Stories / Scenarios, Gherkin</li>
                </ul>
            </ul>
          </Col>

          <Col md={3}>
            <ul>
              <li>Back-End</li>
                <ul>
                  <li>Node</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>JSON</li>
                  <li>RESTful APIs</li>
                </ul>
            </ul>
          </Col>

          <Col md={5}>
            <ul>
              <li>Also proficient in</li>
                <ul>
                  <li>Functional Programming</li>
                  <li>Object-Oriented Programming</li>
                  <li>Test-driven and behavor-driven development</li>
                  <li>Version Control - GitHub</li>
                  <li>Postman</li>
                  <li>VS Code</li>
                  <li>Slack</li>
                </ul>
            </ul>
          </Col>

        </Row>
{/* projects */}
        <Row>
        <h3>Projects</h3>
        {/* <Col>
          <h4></h4>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Col> */}
        <Col className="mt-1">
            <h4>React Meet Application</h4>
            <ul>
              <li>A serverless, progressive web application built using a test-driven development technique.</li>
              <li>Fetches and displays events from the Google Calendar API and renders event data in charts using Recharts.</li>
              <li>Uses AWS for the authorization server and uses OAuth 2 authentication.</li>
              <li>Application data is available offline once loaded and the app can be downloaded to a desktop or home screen.</li>
            </ul>
          </Col>
          <Col className="mt-1">
            <h4>CRUD Movie Application</h4>
            <ul>
              <li>Single-page, responsive app with routing, several interface views, and a polished user experience.</li>
              <li>Two versions of the client-side were built: one with React and Bootstrap and is hosted on Netlify, while the other was built with Angular and Angular Material and is hosted on GitHub pages.</li>
              <li>The server-side is a REST API built with Node.js, Express and MongoDB. 
                API endpoints were tested with Postman and the API is deployed on Heroku. Utilizes JWT authentication.</li>
            </ul>
          </Col>
        </Row>

{/* education */}
        <Row className="mt-4 d-flex flex-column">
          <h3>Education</h3>
          <Col className="mt-1">
            <h4>CareerFoundry</h4>
            <p>Full-Stack Web Development Certificate, 2024<br/>
            Comprehensive online training program emphasizing the MERN tech stack, featuring intensive project-based learning and exploration of prominent libraries and frameworks.</p>
          </Col>
          <Col className="mt-1">
            <h4>University of California, Davis</h4>
            <p>B.S. Food Science & Technology, 2015<br/>
              Emphasis in Brewing, Minor in Chemistry</p>
          </Col>
        </Row>
{/* work experience */}
        <Row className="mt-5 d-flex">
          <h3>Work Experience</h3>
          <Col className="mt-2">
            <Row>
              <h4>Packaging Assistant</h4>
              <p>Sudwerk Brewing Co.<br/>
                June 2023 - Present</p>
            </Row>
            <Row><p>Manage tasks with competing priorities alongside the production team to transfer and package product and clean kegs.</p></Row>
          </Col>

          <Col className="mt-2">
            <Row>
              <h4>Staff Research Assistant</h4>
              <p>University of California, Davis<br/>
                February 2018 - June 2023</p>
            </Row>
            <Row><p>Maintained a research facility while teaching classes, ensuring safety compliance, and conducting research.</p></Row>
          </Col>

          <Col className="mt-2">
            <Row>
              <h4>Brewer</h4>
              <p>Sudwerk Brewing Co.<br/>
                September 2015 - February 2018</p>
            </Row>
            <Row><p>Perform brewing and cellaring duties from raw material intake through packaging while managing a team to ensure that the production plan was executed every week.</p></Row>
          </Col>
        </Row>  
      </motion.div>     

      </Col>
    </Row>
  );
};

export default ResumePage;