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

{/* super owl */}
      <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}}>
          <Col className="my-3">
            <Row>
              <Col><img src="wordpress.png" alt="wordpress mockup" className="portfolio-img"/></Col>
              <Col lg={8}>
                <h3>WordPress Website Maintenance</h3>
                <h6 className="technologies text-secondary">WordPress | Plugins | Themes</h6>
                <p>
                  Identification of a discontinued plugin conflicting with PHP update and implementing a fix after deactivating the plugin.  
                  Assistance updating a theme, as well as fixing a broken Instagram feed display.
                </p>
                <div className="project-links d-flex">
                  <a href="/wordpress"  className="btn btn-outline-info" >Case Study</a>
                </div>
              </Col>
            </Row>
          </Col>
        </motion.div>

{/* aws-crud */}
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}}>
          <Col className="my-3">
            <Row>
              <Col><img src="imageresizer.png" alt="AWS deployment screenshot" className="portfolio-img"/></Col>
              <Col lg={8}>
                <h3>Image Resizer & AWS App Deployment</h3>
                <h6 className="technologies text-secondary">EC2 | AWS SDK | Lambda</h6>
                <p>
                  An image resizer feature, added to the React CRUD single-page web app as a profile image feature, which allows the user to upload an image to an Amazon Web Services (AWS) S3 bucket.
                  The image is resized, uploaded to a new folder in the bucket, and set as the profile image. 
                  The bucket of resized images is available to view client-side and the user may select a new profile image from it.
                  <br />
                  The React CRUD application with the image resizer was deployed with AWS.
                </p>
                <div className="project-links d-flex">
                  <a href="https://github.com/kellysdev/s3-image-resizer" className="btn btn-outline-info" target="_blank" rel="noreferrer">GitHub Repo</a>
                  <a href="/aws-crud"  className="btn btn-outline-info" >Case Study</a>
                </div>
              </Col>
            </Row>
          </Col>
        </motion.div>

{/* movie-angular-client */}
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.4}}>
          <Col className="my-3">
            <Row>
              <Col><img src="angular-main.png" alt="angular movie app screenshot" className="portfolio-img"/></Col>
              <Col lg={8}>
                <h3>Angular CRUD Single-Page Web App</h3>
                <h6 className="technologies text-secondary">Angular | TypeScript | TypeDoc</h6>
                <p>
                  The client-side of a CRUD application with supporting documention and styled with Angular Material is hosted on GitHub Pages.  
                  The API used was updated with documentation with JSDoc.
                </p>
                <div className="project-links d-flex">
                  <a href="https://github.com/kellysdev/movie-Angular-client" className="btn btn-outline-info" target="_blank" rel="noreferrer">GitHub Repo</a>
                  <a href="https://kellysdev.github.io/movie-Angular-client/welcome" className="btn btn-outline-info" target="_blank" rel="noreferrer">Live App</a>
                  <a href="/angular-movie-case-study"  className="btn btn-outline-info" >Case Study</a>
                </div>
              </Col>
            </Row>
          </Col>
        </motion.div>

{/* movie-client */}
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.5}}>
          <Col className="my-3">
            <Row>
              <Col className="portfolio-img"><img src="popopolis.png" alt="movie app screenshot" className="portfolio-img"/></Col>
              <Col lg={8}>
                <h3>React CRUD Single-Page Web App</h3>
                <h6 className="technologies text-secondary">MERN | API Development | Bootstrap</h6>
                <p>Users can create an account, view movie information, curate a list of their favorite movies, and update or delete their account.  
                  The server-side utilizes JWT authentication and is hosted on Heroku.  The client-side also uses react-router and Parcel and is hosted on Netlify.</p>
                <div className="project-links d-flex">
                  <a href="https://github.com/kellysdev/movie-client" className="btn btn-outline-info" target="_blank" rel="noreferrer">GitHub Repo</a>
                  <a href="https://popopolis.netlify.app/" className="btn btn-outline-info" target="_blank" rel="noreferrer">Live App</a>
                  <a href="/movie-case-study" className="btn btn-outline-info" >Case Study</a>
                </div>
              </Col>
            </Row>
          </Col>
        </motion.div>

{/* meet */}
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.6}}>
          <Col className="my-3">
            <Row>
              <Col><img src="meet.png" alt="meet app screenshot" className="portfolio-img"/></Col>
              <Col lg={8}>
                <h3>Progressive Web App</h3>
                <h6 className="technologies text-secondary">React Testing Library | OAuth2 | AWS Lambda</h6>
                <p>Built using a test-driven development technique, fetches upcoming events from the Google Calendar API, utilizes OAuth2 authentication, and features data visualization enabled by the Recharts library.</p>
                <div className="project-links d-flex">
                  <a href="https://github.com/kellysdev/meet" className="btn btn-outline-info" target="_blank" rel="noreferrer">GitHub Repo</a>
                  <a href="https://kellysdev.github.io/meet/" className="btn btn-outline-info" target="_blank" rel="noreferrer">Live App</a>
                  <a href="/meet-case-study" className="btn btn-outline-info" >Case Study</a>
                </div>
              </Col>
            </Row>
          </Col>
        </motion.div>

{/* chat */}
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.7}}>
          <Col className="my-3">
            <Row>
              <Col className="portfolio-img"><img src="chat.png" alt="chat app screenshot" className="portfolio-img"/></Col>
              <Col lg={8}>
                <h3>React Native Chat App</h3>
                <h6 className="technologies text-secondary">Google Firebase | Expo | GiftedChat</h6>
                <p>A cross-platform chat application that allows users to share images and their location as well as to choose the background color for the chat screen.</p>
                <div className="project-links d-flex">
                  <a href="https://github.com/kellysdev/chat-app" className="btn btn-outline-info" target="_blank" rel="noreferrer">GitHub Repo</a>
                  <a href="/chat-case-study" className="btn btn-outline-info">Case Study</a>
                </div>
              </Col>
            </Row>
          </Col>
        </motion.div>

{/* circuit timer */}
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.1}}>
          <Col className="my-3">
            <Row>
              <Col><img src="circuittimer.png" alt="timer mockup" className="portfolio-img"/></Col>
              <Col lg={8}>
                <h3>React Circuit Timer</h3>
                <h6 className="technologies text-secondary">React | Vite | AWS S3</h6>
                <p>
                  A HIIT circuit timer where the user can edit the number of rounds and the time for active and rest rounds.  Built with React and Vite and is hosted in an AWS S3 bucket.
                </p>
                <div className="project-links d-flex">
                  <a href="https://github.com/kellysdev/circuit-timer" className="btn btn-outline-info" target="_blank" rel="noreferrer">GitHub Repo</a>
                  {/* <a href="http://circuit-timer.s3-website-us-west-1.amazonaws.com/" className="btn btn-outline-info" target="_blank" rel="noreferrer">Live App</a> */}
                  <a href="/circuit-timer-casestudy"  className="btn btn-outline-info" >Case Study</a>
                </div>
              </Col>
            </Row>
          </Col>
        </motion.div>

{/* pokedex */}
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.8}}>
          <Col className="my-3">
            <Row>
              <Col className="portfolio-img"><img src="pokedex.png" alt="pokedex app screenshot" className="portfolio-img"/></Col>
              <Col lg={8}>
                <h3>API Fetch App</h3>
                <h6 className="technologies text-secondary">JavaScript | JQuery | Bootstrap</h6>
                <p>Loads data from an external API, the PokeAPI, and enables the viewing of data points in detail.</p>
                <div className="project-links d-flex">
                  <a href="https://github.com/kellysdev/Pokedex" className="btn btn-outline-info" target="_blank" rel="noreferrer">GitHub Repo</a>
                  <a href="https://kellysdev.github.io/Pokedex/" className="btn btn-outline-info"  target="_blank" rel="noreferrer">Live App</a>
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