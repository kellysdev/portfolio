import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

const AngularMovieCaseStudy = () => {
  return (
    <Row>
      <Col>
{/* hero */}
        <Row className="mt-5">
          <header className="angular-movie-hero has-bg-img" style={{ paddingLeft: 0 }}>
            <div className="p-3 text-center bg-image">
              <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div>
                    <h1 className="mt-5 text-white popopolis-logo">Case Study</h1>
                    <h4 className="mb-5 text-whie popopolis-logo">Angular CRUD Movie Application</h4>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </Row>

{/* overview */}
        <Row className="mt-5">
          <Col>
            <h3 className="mb-3 popopolis-logo">Overview</h3>
            <p>
              The client-side of a CRUD (create, read, update and delete functionality) movie application.
            </p>
          </Col>
          <Col>
            <h3 className="popopolis-logo">Purpose & Context</h3>
            <p>
              This app was built to add to my portfolio while taking the CareerFoundry Full-Stack Web Development course to learn Angular, TypeScript, and about documentation.
            </p>
          </Col>
        </Row>

        <Row className="bg-danger my-4 py-1"></Row>

{/* tech used */}
        <Row>
          <Col sm={3} className="mt-2">
            <img className="angular-documentation" src="documentation-code.png" alt="screenshot of comments used to generate documention" />
          </Col>
          <Col>
          <h3 className="mb-3 popopolis-logo">Technology</h3>
            <h4>Angular</h4>
            <p>
              Angular is a development platform that includes a component-based framework for building applications, 
              a collection of libraries (that offer features like routing and form management, to name a few), 
              and a suite of developer tools for building, testing, and updating code.
              <br/><br/>
              Angular is built on <b>TypeScript</b>, an extension of the programming language JavaScript, that uses type specificity which adds certainty to code bases and helps reduce errors.
            </p>

            <h4>Angular Material</h4>
            <p>
              Angular Material is a user interface component library built on Google's Material Design.<br/>
              Components used in this project include inputs, forms, the toolbar, cards, dialogs, buttons, and icons.
            </p>

            <h4>TypeDoc and JSDoc</h4>
            <p>
              TypeDoc and JSDoc are documentation generators for TypeScript and JavaScript, respectively.  
              They scan your code and generate websites with information about your code, based on comments that you include with your code.
              <br/>In the image on the left, the code with asterisks before it are comments written in a style that these generators recognize.
            </p>
          </Col>
        </Row>

{/* Development */}
        <Row className="my-5">
          <h3 className="mb-3 popopolis-logo">Development</h3>
          <Col>
            <h4>Challenges</h4>
            <p className="mt-3">
              <b>Learning TypeScript</b><br/>
              In order to overcome this challenge, I took courses through Codecademy to get the basics down.
              Once I had a feel for TypeScript, it became a tool in itself.  TypeScript helped me find errors quickly and was a big help passing data between components in this project.
            </p>
            <p>
              <b>Learning Angular</b><br/>
              I had built a client-side for this project before in React, but React handles data differently compared to Angular.
              In React, data can be stored as a state and can be interacted with differently by child and parent componenents.  In Angular, data can be changed and passed between child and parent components easily.
              This meant a reworking of the structure of the client-side and how it's components would interact. 
            </p>
            <p>
              <b>Data Management in Angular</b><br/>
              I also struggled with passing data from a parent component to a chile component, at first.  This was because I was passing an object and wasn't extracting the right data from the object in the child component.
              A combination of studying the Angular documentation and using TypeScript's static typing helped me overcome this challenge.
            </p>
          </Col>
          <Col>
            <h4>Final Product</h4>
{/* carousel             */}
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img className="carousel-img" src="angular-welcome.png" alt="screenshot of app welcome page" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="carousel-img" src="angular-main.png" alt="screenshot of app main page" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="carousel-img" src="angular-movie.png" alt="screenshot of app movie details" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="carousel-img" src="angular-profile.png" alt="screenshot of app profile page" />
              </Carousel.Item>
          </Carousel>

          </Col>
        </Row>

        <Row className="bg-danger py-1 mt-5"></Row>

{/* credits */}
        <Row className="my-5 credits">
          <h1 className="mb-3 popopolis-logo">(Angular) PopOpolis</h1>
          <h3>Credits:</h3>
          <p>
            Lead Developer: Kelly Scott<br/>
            Mentor: Vini De Antoni<br/>
            Tutor: Jason Early
          </p>
          <a href="https://github.com/kellysdev/movie-Angular-client">GitHub Repository</a>
          <a href="https://kellysdev.github.io/movie-Angular-client/welcome">App Hosted on Netlify</a><br/><br/>
          <a href="https://unsplash.com/@liammcgarry" className="meet-hero-credit">title photo credit: @liammcgarry</a>
        </Row>

      </Col>
    </Row>
  )
};

export default AngularMovieCaseStudy;