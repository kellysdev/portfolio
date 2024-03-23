import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AngularMovieCaseStudy = () => {
  return (
    <Row>
      <Col>
{/* hero */}
        <Row>
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
        <Row className="mt-4">
          <Col>
            <h3>Overview</h3>
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

        <Row className="bg-danger py-1"></Row>

{/* tech used */}
        <Row>
          <Col>
            <img className="angular-documentation" src="documentation-screenshot.png" alt="screenshot of documentation output" />
          </Col>
          <Col>
            <h3 className="mb-3 popopolis-logo">Technology</h3>
            <p>
              <b>Angular</b><br/>
              Angular is a development platform that includes a component-based framework for building applications, 
              a collection of libraries (that offer features like routing and form management, to name a few), 
              and a suite of developer tools for building, testing, and updating code.
              <br/><br/>
              Angular is built on <b>TypeScript</b>, an extension of the programming language JavaScript, that uses type specificity which adds certainty to code bases and helps reduce errors.
            </p>
            <p>
              <b>Angular Material</b><br/>
              Angular Material is a user interface component library built on Google's Material Design.<br/>
              Components used in this project include inputs, forms, the toolbar, cards, dialogs, buttons, and icons.
            </p>
            <p>
              <b>TypeDoc and JSDoc</b><br/>
              ...
            </p>
          </Col>
        </Row>

{/* Development */}
        <Row className="my-5">
          <h3 className="mb-3 popopolis-logo">Development</h3>
          <Col>
            <h4>Challenges</h4>
            <p>...</p>
          </Col>
        </Row>

{/* final product */}
        <Row>
          <h4>Final Product</h4>
          <p>...</p>
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
          <a href="https://kellysdev.github.io/movie-Angular-client/welcome">App Hosted on Netlify</a>
        </Row>

      </Col>
    </Row>
  )
};

export default AngularMovieCaseStudy;